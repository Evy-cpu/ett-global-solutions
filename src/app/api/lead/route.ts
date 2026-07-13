import { z } from "zod";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

const leadSchema = z.object({
  source: z.string().min(1).default("website"),
  name: z.string().max(200).optional().nullable(),
  email: z.string().email().max(200).optional().nullable().or(z.literal("")),
  phone: z.string().max(60).optional().nullable(),
  company: z.string().max(200).optional().nullable(),
  service: z.string().max(120).optional().nullable(),
  message: z.string().max(4000).optional().nullable(),
  meta: z.record(z.string(), z.unknown()).optional().nullable(),
  _gotcha: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req.headers);
    const rl = rateLimit(`lead:${ip}`, 5, 60_000);
    if (!rl.ok) {
      return Response.json(
        { ok: false, error: "rate_limited" },
        { status: 429 },
      );
    }

    const json = await req.json().catch(() => null);
    const parsed = leadSchema.safeParse(json);
    if (!parsed.success) {
      return Response.json(
        { ok: false, error: "invalid", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Honeypot: silently accept but don't store.
    if (data._gotcha && data._gotcha.trim() !== "") {
      return Response.json({ ok: true, id: 0 });
    }

    const [row] = await db
      .insert(leads)
      .values({
        source: data.source,
        name: data.name || null,
        email: data.email || null,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service || null,
        message: data.message || null,
        meta: data.meta ?? null,
        ip,
      })
      .returning({ id: leads.id });

    return Response.json({ ok: true, id: row.id });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}

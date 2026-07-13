import { db } from "@/db";
import { visits } from "@/db/schema";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req.headers);
    const rl = rateLimit(`track:${ip}`, 60, 60_000);
    if (!rl.ok) {
      return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const body = (await req.json().catch(() => ({}))) as {
      page?: string;
      referrer?: string | null;
    };
    const page = typeof body.page === "string" ? body.page.slice(0, 300) : "/";

    await db.insert(visits).values({
      ip,
      ua: req.headers.get("user-agent")?.slice(0, 400) ?? null,
      page,
      referrer: body.referrer?.slice(0, 300) ?? null,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}

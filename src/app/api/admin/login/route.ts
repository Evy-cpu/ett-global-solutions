import { cookies } from "next/headers";
import { ADMIN_COOKIE, adminToken, getAdminPass } from "@/lib/auth-token";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const ip = getClientIp(req.headers);
  const rl = rateLimit(`login:${ip}`, 8, 60_000);
  if (!rl.ok) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const body = (await req.json().catch(() => ({}))) as { password?: string };
  if (body.password !== getAdminPass()) {
    return Response.json({ ok: false, error: "invalid" }, { status: 401 });
  }

  const store = await cookies();
  store.set(ADMIN_COOKIE, adminToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
    secure: process.env.NODE_ENV === "production",
  });

  return Response.json({ ok: true });
}

export async function DELETE() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  return Response.json({ ok: true });
}

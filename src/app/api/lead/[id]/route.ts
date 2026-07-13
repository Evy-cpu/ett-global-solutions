import { db } from "@/db";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";
import { isAdminAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthed())) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const leadId = Number(id);
  if (!Number.isFinite(leadId)) {
    return Response.json({ ok: false, error: "invalid_id" }, { status: 400 });
  }

  try {
    const body = (await req.json().catch(() => ({}))) as { status?: string };
    const status = body.status === "new" ? "new" : "treated";

    await db.update(leads).set({ status }).where(eq(leads.id, leadId));
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "db_unavailable" }, { status: 503 });
  }
}

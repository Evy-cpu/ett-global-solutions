import { isAdminAuthed } from "@/lib/auth";
import { getAdminStats } from "@/lib/admin-stats";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminAuthed())) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const stats = await getAdminStats();
  return Response.json(stats);
}

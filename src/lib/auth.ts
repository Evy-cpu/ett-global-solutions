import { cookies } from "next/headers";
import { ADMIN_COOKIE, adminToken, getAdminPass } from "@/lib/auth-token";

export { ADMIN_COOKIE, adminToken, getAdminPass };

export async function isAdminAuthed(): Promise<boolean> {
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === adminToken();
}

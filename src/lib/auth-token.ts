// Edge-safe helpers (no next/headers, no Node Buffer) so they can be used
// inside middleware as well as server components.
export const ADMIN_COOKIE = "ett_admin";

export function getAdminPass(): string {
  return process.env.ADMIN_PASS || "ett2026";
}

// Deterministic non-reversible-ish token derived from the password.
export function adminToken(): string {
  const input = `ett::${getAdminPass()}::global::v1`;
  let h1 = 0x811c9dc5;
  let h2 = 0x1000193;
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;
    h2 = Math.imul(h2 + c, 0x85ebca6b) >>> 0;
  }
  return `${h1.toString(36)}${h2.toString(36)}`;
}

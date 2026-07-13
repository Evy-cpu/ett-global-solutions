import { db } from "@/db";
import { leads, visits } from "@/db/schema";
import { countDistinct, count, desc, gte, max, sql } from "drizzle-orm";

export async function getAdminStats() {
  const now = Date.now();
  const fiveMinAgo = new Date(now - 5 * 60_000);
  const dayAgo = new Date(now - 24 * 60 * 60_000);
  const weekAgo = new Date(now - 7 * 24 * 60 * 60_000);

  try {
  const [liveRow] = await db
    .select({ n: countDistinct(visits.ip) })
    .from(visits)
    .where(gte(visits.ts, fiveMinAgo));

  const [visits24Row] = await db
    .select({ n: count() })
    .from(visits)
    .where(gte(visits.ts, dayAgo));

  const [leadsTotalRow] = await db.select({ n: count() }).from(leads);

  const [leads7Row] = await db
    .select({ n: count() })
    .from(leads)
    .where(gte(leads.createdAt, weekAgo));

  const visitorRows = await db
    .select({
      ip: visits.ip,
      lastSeen: max(visits.ts),
      hits: count(),
      page: sql<string>`(array_agg(${visits.page} ORDER BY ${visits.ts} DESC))[1]`,
    })
    .from(visits)
    .where(gte(visits.ts, dayAgo))
    .groupBy(visits.ip)
    .orderBy(desc(max(visits.ts)))
    .limit(50);

  const leadRows = await db
    .select()
    .from(leads)
    .orderBy(desc(leads.createdAt))
    .limit(50);

  return {
    liveVisitors: liveRow?.n ?? 0,
    visits24h: visits24Row?.n ?? 0,
    leadsTotal: leadsTotalRow?.n ?? 0,
    leads7d: leads7Row?.n ?? 0,
    visitors: visitorRows.map((v) => ({
      ip: v.ip,
      page: v.page ?? "/",
      lastSeen: (v.lastSeen ?? new Date()).toISOString(),
      hits: v.hits,
    })),
    leads: leadRows.map((l) => ({
      ...l,
      createdAt: l.createdAt.toISOString(),
    })),
  };
  } catch (e) {
    console.error("[admin-stats] DB unavailable:", (e as Error).message);
    return {
      liveVisitors: 0,
      visits24h: 0,
      leadsTotal: 0,
      leads7d: 0,
      visitors: [],
      leads: [],
    };
  }
}

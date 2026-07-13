import {
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const visits = pgTable("visits", {
  id: serial("id").primaryKey(),
  ip: text("ip").notNull(),
  ua: text("ua"),
  page: text("page").notNull(),
  ts: timestamp("ts", { withTimezone: true }).defaultNow().notNull(),
  country: text("country"),
  sessionId: text("session_id"),
  referrer: text("referrer"),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  source: text("source").notNull(),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  company: text("company"),
  service: text("service"),
  message: text("message"),
  meta: jsonb("meta"),
  ip: text("ip"),
  status: text("status").default("new").notNull(),
});

export type Visit = typeof visits.$inferSelect;
export type Lead = typeof leads.$inferSelect;

"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card } from "@/components/ui/primitives";

type Stats = {
  liveVisitors: number;
  visits24h: number;
  leadsTotal: number;
  leads7d: number;
  visitors: { ip: string; page: string; lastSeen: string; hits: number }[];
  leads: {
    id: number;
    createdAt: string;
    source: string;
    name: string | null;
    email: string | null;
    phone: string | null;
    company: string | null;
    service: string | null;
    message: string | null;
    meta: unknown;
    ip: string | null;
    status: string;
  }[];
};

export function AdminDashboard({ initial }: { initial: Stats }) {
  const [stats, setStats] = useState<Stats>(initial);
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
  const router = useRouter();

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/stats", { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as Stats;
        setStats(data);
        setUpdatedAt(new Date());
      }
    } catch {
      /* silent */
    }
  }, []);

  useEffect(() => {
    const iv = setInterval(refresh, 30_000);
    return () => clearInterval(iv);
  }, [refresh]);

  const markTreated = async (id: number) => {
    await fetch(`/api/lead/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "treated" }),
    });
    refresh();
  };

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  const kpis = [
    { label: "Visiteurs live (5 min)", value: stats.liveVisitors, accent: true },
    { label: "Visites 24h", value: stats.visits24h },
    { label: "Leads total", value: stats.leadsTotal },
    { label: "Leads 7 jours", value: stats.leads7d },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-white p-2">
            <Image src="/logo_header.png" alt="ETT" width={120} height={36} className="h-8 w-auto" />
          </span>
          <div>
            <h1 className="font-mont text-xl font-extrabold text-white">
              Dashboard Admin – ETT GLOBAL SOLUTIONS
            </h1>
            <p className="text-xs text-slate-400">
              Temps réel • rafraîchi {updatedAt.toLocaleTimeString("fr-FR")} • auto 30s
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="/">
            <Button variant="glass" size="sm">← Site</Button>
          </Link>
          <Button variant="glass" size="sm" onClick={refresh}>
            ⟳ Rafraîchir
          </Button>
          <Button size="sm" onClick={logout}>
            Déconnexion
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label} className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {k.label}
            </p>
            <p
              className={
                "mt-2 font-mont text-4xl font-extrabold " +
                (k.accent ? "text-ett-orange" : "text-white")
              }
            >
              {k.value}
              {k.accent && (
                <span className="ml-2 inline-block h-3 w-3 animate-pulse rounded-full bg-emerald-400 align-middle" />
              )}
            </p>
          </Card>
        ))}
      </div>

      {/* Visitors table */}
      <Card className="mt-8 overflow-x-auto p-0">
        <div className="border-b border-white/[0.08] px-6 py-4">
          <h2 className="font-mont text-base font-extrabold text-white">
            Visiteurs en direct (dernières 24h)
          </h2>
        </div>
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-xs uppercase tracking-wider text-slate-500">
              <th className="px-6 py-3">IP</th>
              <th className="px-6 py-3">Dernière page</th>
              <th className="px-6 py-3">Dernière vue</th>
              <th className="px-6 py-3 text-right">Hits</th>
            </tr>
          </thead>
          <tbody>
            {stats.visitors.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                  Aucun visiteur pour l&apos;instant.
                </td>
              </tr>
            )}
            {stats.visitors.map((v) => {
              const seen = new Date(v.lastSeen);
              const live = Date.now() - seen.getTime() < 5 * 60_000;
              return (
                <tr key={v.ip} className="border-b border-white/[0.04] hover:bg-white/[0.03]">
                  <td className="px-6 py-3 font-mono text-slate-300">
                    {live && (
                      <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    )}
                    {v.ip}
                  </td>
                  <td className="px-6 py-3 text-slate-300">{v.page}</td>
                  <td className="px-6 py-3 text-slate-400">
                    {seen.toLocaleTimeString("fr-FR")}
                  </td>
                  <td className="px-6 py-3 text-right font-semibold text-white">{v.hits}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* Leads */}
      <div className="mt-8">
        <h2 className="font-mont text-base font-extrabold text-white">
          Leads – 50 derniers
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {stats.leads.length === 0 && (
            <Card>
              <p className="text-sm text-slate-500">Aucun lead pour l&apos;instant.</p>
            </Card>
          )}
          {stats.leads.map((l) => (
            <Card key={l.id} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mont font-bold text-white">
                    {l.name || l.company || "—"}
                    {l.company && l.name && (
                      <span className="text-slate-400"> • {l.company}</span>
                    )}
                  </p>
                  {l.service && (
                    <p className="font-mont text-[11px] font-bold tracking-widest text-ett-orange">
                      {l.service}
                    </p>
                  )}
                </div>
                <span
                  className={
                    "rounded-full px-3 py-1 text-[11px] font-bold " +
                    (l.status === "treated"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-ett-orange/15 text-ett-orange")
                  }
                >
                  {l.status === "treated" ? "Traité" : "Nouveau"}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {new Date(l.createdAt).toLocaleString("fr-FR")}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {l.email && <span>{l.email}</span>}
                {l.email && l.phone && " • "}
                {l.phone && <span>{l.phone}</span>}
              </p>
              {l.message && (
                <p className="mt-3 whitespace-pre-wrap rounded-lg bg-white/[0.04] p-3 text-sm text-slate-300">
                  {l.message}
                </p>
              )}
              {l.meta != null && (
                <p className="mt-2 break-all text-xs text-slate-500">
                  {JSON.stringify(l.meta)}
                </p>
              )}
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  {l.source} • {l.ip || "?"}
                </p>
                {l.status !== "treated" && (
                  <Button size="sm" variant="glass" onClick={() => markTreated(l.id)}>
                    Marquer traité ✓
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

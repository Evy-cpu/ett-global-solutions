"use client";

import { useLang } from "@/lib/i18n";

export function Engagements() {
  const { t } = useLang();
  const items = [
    {
      icon: "⏱️",
      title: t("Délais tenus", "Committed deadlines"),
      text: t("Devis sous 48h, déploiement WiFi en 72h max.", "Quotes in 48h, WiFi rollout in max 72h."),
    },
    {
      icon: "📞",
      title: t("Support réel", "Real support"),
      text: t("WhatsApp +237, équipe joignable même le dimanche.", "WhatsApp +237, reachable even on Sundays."),
    },
    {
      icon: "📋",
      title: t("Reporting clair", "Clear reporting"),
      text: t("Tableaux de bord simples + rapports mensuels en français.", "Simple dashboards + monthly reports in French."),
    },
    {
      icon: "💰",
      title: t("Prix transparents", "Transparent pricing"),
      text: t("Tout en FCFA TTC. Aucun frais caché.", "Everything in FCFA TTC. No hidden fees."),
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <div key={i} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ett-orange/10 text-3xl">
            {it.icon}
          </div>
          <p className="mt-4 font-mont font-bold text-white">{it.title}</p>
          <p className="mt-2 text-sm text-slate-400">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useLang } from "@/lib/i18n";

export function Zones() {
  const { t } = useLang();
  const cities = [
    { c: "Yaoundé", s: "Siège Bastos • Centre" },
    { c: "Douala", s: "Antenne Akwa • Littoral" },
    { c: "Bafoussam", s: "En cours de déploiement" },
    { c: "Garoua", s: "Prochainement" },
    { c: "Bamenda", s: "Prochainement" },
    { c: "Kribi", s: "Hôtels & Resorts" },
  ];

  return (
    <div>
      <p className="font-mont text-xs font-bold uppercase tracking-widest text-ett-orange mb-3">
        {t("Zones d'intervention", "Areas we serve")}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
        {cities.map((z) => (
          <div key={z.c} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3">
            <div className="font-semibold text-white">{z.c}</div>
            <div className="text-xs text-slate-400">{z.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

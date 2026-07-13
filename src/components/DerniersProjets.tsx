"use client";

import { useLang } from "@/lib/i18n";

export function DerniersProjets() {
  const { t } = useLang();
  const projets = [
    { date: "Juin 2026", client: "CHU Yaoundé", type: "WIFI CAMPUS", detail: "120 bornes + portail patients" },
    { date: "Mai 2026", client: "Canal+ Douala Bassa", type: "CALL CENTER", detail: "42 agents FR/EN" },
    { date: "Avril 2026", client: "Hôtel La Falaise Bonanjo", type: "WIFI CAMPUS", detail: "6 U6-Pro, +34% leads" },
    { date: "Mars 2026", client: "Université Yaoundé I", type: "WIFI CAMPUS", detail: "Campus Ngoa-Ekellé" },
  ];

  return (
    <div>
      <p className="font-mont text-xs font-bold uppercase tracking-widest text-ett-orange mb-4">
        {t("Derniers projets livrés", "Recently delivered projects")}
      </p>
      <div className="space-y-3 text-sm">
        {projets.map((p, i) => (
          <div key={i} className="flex justify-between border-b border-white/[0.06] pb-2 last:border-0">
            <div>
              <span className="font-semibold text-white">{p.client}</span>
              <span className="ml-2 text-xs text-slate-500">• {p.type}</span>
            </div>
            <div className="text-right text-slate-400">
              <div>{p.date}</div>
              <div className="text-xs">{p.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

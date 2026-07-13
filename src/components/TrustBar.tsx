"use client";

import { COMPANY } from "@/lib/company";

export function TrustBar() {
  return (
    <div className="border-y border-white/[0.06] bg-ett-surface2/60 py-3">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 sm:px-8 text-center text-xs font-semibold text-slate-400 sm:justify-between">
        <span>Agrément ART : {COMPANY.art}</span>
        <span>RCCM : {COMPANY.rccm}</span>
        <span>Tous nos numéros : +237</span>
        <span>Fuseau : {COMPANY.timezone} — Yaoundé / Douala</span>
        <span className="text-ett-orange">Réponse garantie &lt; 24h</span>
      </div>
    </div>
  );
}

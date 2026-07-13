"use client";

import { COMPANY } from "@/lib/company";

export function Agrements() {
  return (
    <div className="rounded-2xl border border-ett-orange/20 bg-ett-orange/5 p-6 text-sm">
      <p className="font-mont font-bold text-ett-orange mb-2">Nos agréments officiels</p>
      <ul className="space-y-1 text-slate-300">
        <li>• RCCM : {COMPANY.rccm}</li>
        <li>• NIF : {COMPANY.nif}</li>
        <li>• Agrément ART : {COMPANY.art}</li>
        <li>• Capital social : {COMPANY.capital}</li>
      </ul>
      <p className="mt-3 text-xs text-slate-500">
        Société camerounaise déclarée • Tous nos numéros commencent par +237
      </p>
    </div>
  );
}

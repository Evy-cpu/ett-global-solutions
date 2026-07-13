"use client";

import { useLang } from "@/lib/i18n";
import { CountUp } from "@/components/RealTouches";

export function Chiffres() {
  const { t } = useLang();
  const stats = [
    { n: 1200, s: "+", l: t("Sites déployés", "Sites deployed") },
    { n: 180, s: "", l: t("Agents Call Center", "Call Center agents") },
    { n: 47, s: "", l: t("Clients actifs 2026", "Active clients 2026") },
    { n: 96, s: "%", l: t("Satisfaction moyenne", "Average satisfaction") },
  ];

  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center"
          >
            <div className="font-mont text-3xl font-extrabold text-ett-orange">
              <CountUp end={s.n} suffix={s.s} />
            </div>
            <p className="mt-1 text-xs text-slate-400">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

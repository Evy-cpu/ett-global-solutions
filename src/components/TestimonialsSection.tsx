"use client";

import { useLang } from "@/lib/i18n";
import { TESTIMONIALS } from "@/lib/company";
import { Card } from "@/components/ui/primitives";
import { RevealStagger, StaggerItem } from "@/components/Reveal";
import { Stars } from "@/components/LocalTouches";

export function TestimonialsSection() {
  const { t } = useLang();
  return (
    <RevealStagger className="grid gap-6 md:grid-cols-3">
      {TESTIMONIALS.map((tm, i) => (
        <StaggerItem key={tm.author}>
          <Card
            className="h-full"
            style={i === 2 ? { transform: "translateY(6px)" } : undefined}
          >
            <div className="flex items-center justify-between">
              <Stars count={5} />
              <span className="text-[10px] font-semibold text-emerald-400">
                ✓ {t("vérifié le", "verified on")} {tm.date}
              </span>
            </div>
            <p
              className={
                "mt-4 text-slate-200 " + (i === 1 ? "italic" : "")
              }
              style={i === 1 ? { fontFamily: "cursive" } : undefined}
            >
              « {t(tm.quote, tm.quoteEn)} »
            </p>
            <p className="mt-4 text-sm font-bold text-white">
              {tm.author} <span className="font-normal text-slate-500">— {tm.context}</span>
            </p>
          </Card>
        </StaggerItem>
      ))}
    </RevealStagger>
  );
}

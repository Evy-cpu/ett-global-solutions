"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { TEAM } from "@/lib/company";
import { Card } from "@/components/ui/primitives";
import { RevealStagger, StaggerItem } from "@/components/Reveal";

export function TeamSection() {
  const { t } = useLang();
  return (
    <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {TEAM.map((m, i) => (
        <StaggerItem key={m.name}>
          <Card
            className="h-full overflow-hidden p-0"
            style={i === 1 ? { transform: "translateY(6px)" } : undefined}
          >
            <div className="relative h-56 w-full">
              <Image
                src={m.photo}
                alt={`${m.name}, ${m.role}, ETT Global Solutions`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
              <div className="ett-img-overlay absolute inset-0 bg-linear-to-t from-ett-dark via-transparent to-transparent" />
              <span className="absolute right-3 top-3 rounded-full border border-white/25 bg-black/40 px-2.5 py-1 font-mont text-[10px] font-bold text-white backdrop-blur">
                ETT · {m.city}
              </span>
            </div>
            <div className="p-5">
              <p className="font-mont font-extrabold text-white">{m.name}</p>
              <p className="mt-0.5 text-[12px] font-bold uppercase tracking-wide text-ett-orange">
                {t(m.role, m.roleEn)}
              </p>
              <p className="mt-2 text-sm text-slate-400">{t(m.bio, m.bioEn)}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white"
                aria-label={`LinkedIn ${m.name}`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0A66C2] text-[10px] font-black text-white">
                  in
                </span>
                LinkedIn
              </a>
            </div>
          </Card>
        </StaggerItem>
      ))}
    </RevealStagger>
  );
}

"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

type QA = { q: string; qEn: string; a: string; aEn: string };

export function FAQ({ items }: { items: QA[] }) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-medium text-white">
                {lang === "en" ? item.qEn : item.q}
              </span>
              <span className="text-ett-orange text-xl leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-slate-300">
                {lang === "en" ? item.aEn : item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

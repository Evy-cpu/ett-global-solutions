"use client";

import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      className="flex items-center rounded-full bg-white/[0.06] p-0.5"
      role="group"
      aria-label="Language selector"
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-3 py-1.5 font-mont text-[12px] font-bold uppercase transition",
            lang === l
              ? "bg-ett-orange text-white"
              : "text-slate-300 hover:text-white",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

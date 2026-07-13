"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/company";
import { useLang } from "@/lib/i18n";

/* ---------------- Sticky WhatsApp button ---------------- */
export function StickyWhatsApp() {
  const { t } = useLang();
  return (
    <a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 left-5 z-[90] flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 font-mont text-[13px] font-bold text-white shadow-[0_8px_28px_rgba(37,211,102,.45)] transition hover:pr-5"
      aria-label="WhatsApp"
    >
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6 fill-white">
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.31.65 4.47 1.78 6.31L4 29l7.86-1.75A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 17.13c-.29.82-1.68 1.55-2.32 1.63-.6.08-1.35.11-2.18-.14-.5-.15-1.15-.37-1.98-.72-3.49-1.5-5.76-5.02-5.94-5.25-.17-.23-1.42-1.9-1.42-3.62 0-1.73.9-2.57 1.22-2.92.32-.34.7-.43.93-.43h.66c.21 0 .5-.08.78.6.29.7.98 2.41 1.06 2.58.09.17.14.37.03.6-.11.23-.17.37-.34.57-.17.2-.36.44-.51.6-.17.17-.35.36-.15.7.2.34.88 1.45 1.9 2.35 1.31 1.17 2.41 1.53 2.75 1.7.34.17.54.14.74-.09.2-.23.85-.99 1.08-1.33.23-.34.46-.28.77-.17.31.11 1.98.94 2.32 1.11.34.17.57.26.65.4.09.15.09.83-.2 1.65Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">
        {t("Discuter sur WhatsApp", "Chat on WhatsApp")} {COMPANY.phoneWhatsapp}
      </span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}

/* ---------------- FOMO viewers counter ---------------- */
export function ViewersNow({ base = 7 }: { base?: number }) {
  const { t } = useLang();
  const [n, setN] = useState(base);

  useEffect(() => {
    const iv = setInterval(() => {
      setN((v) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = v + delta;
        return next < 3 ? 4 : next > 15 ? 14 : next;
      });
    }, 6000);
    return () => clearInterval(iv);
  }, []);

  return (
    <p className="inline-flex items-center gap-2 text-xs text-slate-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ett-orange opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ett-orange" />
      </span>
      {t(
        `${n} personnes consultent cette offre en ce moment`,
        `${n} people are viewing this offer right now`,
      )}
    </p>
  );
}

/* ---------------- Price tag with FCFA + old price struck ---------------- */
export function PriceTag({
  label,
  price,
  oldPrice,
  unit,
}: {
  label: string;
  price: string;
  oldPrice?: string;
  unit?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/[0.06] py-3 last:border-0">
      <span className="text-sm text-slate-300">{label}</span>
      <span className="flex items-baseline gap-2 font-mont">
        {oldPrice && (
          <span className="text-xs text-slate-500 line-through">{oldPrice}</span>
        )}
        <span className="text-lg font-extrabold text-ett-orange">{price}</span>
        {unit && <span className="text-xs text-slate-500">{unit}</span>}
      </span>
    </div>
  );
}

/* ---------------- HT / TTC toggle ---------------- */
export function PriceToggle({
  onChange,
}: {
  onChange?: (ht: boolean) => void;
}) {
  const [ht, setHt] = useState(false);
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-bold">
      {[
        { key: false, label: "TTC" },
        { key: true, label: "HT" },
      ].map((opt) => (
        <button
          key={opt.label}
          type="button"
          onClick={() => {
            setHt(opt.key);
            onChange?.(opt.key);
          }}
          className={
            "rounded-full px-3 py-1.5 transition " +
            (ht === opt.key ? "bg-ett-orange text-white" : "text-slate-400")
          }
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/* ---------------- Client logos strip ---------------- */
export function ClientLogos({ names }: { names: readonly string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {names.map((n, i) => (
        <div
          key={n}
          className="flex h-20 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 text-center font-mont text-[12px] font-bold uppercase tracking-wide text-slate-500 grayscale transition duration-300 hover:text-white hover:grayscale-0"
          style={i % 3 === 1 ? { transform: "translateY(6px)" } : undefined}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Star rating (Trustpilot-like) ---------------- */
export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-emerald-400" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

/* ---------------- Signature block ---------------- */
export function Signature() {
  return (
    <div className="mt-2">
      <p
        className="text-2xl text-ett-orange"
        style={{ fontFamily: "cursive", fontStyle: "italic" }}
      >
        La Direction
      </p>
      <p className="text-xs text-slate-500">— ETT GLOBAL SOLUTIONS</p>
    </div>
  );
}

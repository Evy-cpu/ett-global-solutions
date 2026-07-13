"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* ---------------- Flag marquee (bandeau drapeaux défilant) ---------------- */
export function FlagMarquee({
  title,
  items,
}: {
  title?: string;
  items: { flag: string; label: string }[];
}) {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/[0.06] bg-ett-surface2/60 py-5">
      {title && (
        <p className="mb-3 text-center font-mont text-[11px] font-bold uppercase tracking-widest text-slate-500">
          {title}
        </p>
      )}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ett-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ett-dark to-transparent" />
        <div className="ett-marquee gap-10 px-6">
          {doubled.map((item, i) => (
            <span
              key={`${item.label}-${i}`}
              className="flex shrink-0 items-center gap-2.5 font-mont text-sm font-semibold text-slate-300"
            >
              <span className="text-2xl" aria-hidden>
                {item.flag}
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Animated counter ---------------- */
export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

/* ---------------- Live status badge (pulsing) ---------------- */
export function LiveBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mont text-[11px] font-bold uppercase tracking-widest text-emerald-400">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}

/* ---------------- Animated WiFi signal ---------------- */
export function WifiPulse({ size = 72 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className="text-ett-orange"
    >
      <path
        className="ett-wifi-arc-3"
        d="M8 26 C22 12 42 12 56 26"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        className="ett-wifi-arc-2"
        d="M16 36 C25 27 39 27 48 36"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        className="ett-wifi-arc-1"
        d="M24 45 C29 40 35 40 40 45"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="54" r="4" fill="currentColor" />
    </svg>
  );
}

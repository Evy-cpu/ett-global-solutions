"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const PARTNERS = [
  { name: "Ubiquiti", logo: "/partners/ubiquity-logo.png", invertLight: false, keepOriginal: false },
  { name: "MikroTik", logo: "/partners/MikroTik-Logo.png", invertLight: false, keepOriginal: false },
  { name: "Cisco", logo: "/partners/Cisco-logo.png", invertLight: false, keepOriginal: false },
  { name: "3CX", logo: "/partners/3cx.png", invertLight: false, keepOriginal: false },
  { name: "Genesys", logo: "/partners/genesys-white.png", invertLight: true, keepOriginal: false },
  { name: "HubSpot", logo: "/partners/hubspot.png", invertLight: false, keepOriginal: false },
  { name: "MTN Cameroon", logo: "/partners/mtn.jpg", invertLight: false, keepOriginal: true },
  { name: "Orange Business", logo: "/partners/orange.png", invertLight: false, keepOriginal: true },
];

export function Partenaires() {
  const { t } = useLang();
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  return (
    <div>
      <p className="font-mont text-xs font-bold uppercase tracking-widest text-ett-orange mb-5">
        {t("Nos partenaires techniques", "Technical partners")}
      </p>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
        {PARTNERS.map((p) => {
          const filter = p.keepOriginal
            ? ""
            : isDark
              ? "brightness-0 invert"
              : p.invertLight
                ? "brightness-0"
                : "";

          return (
            <div
              key={p.name}
              className="flex h-24 items-center justify-center rounded-2xl border border-white/8 bg-white/3 px-4 transition hover:border-ett-orange/30 hover:bg-white/6"
              title={p.name}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={140}
                height={56}
                className={`h-10 w-auto object-contain opacity-80 hover:opacity-100 transition ${filter}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

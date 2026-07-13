"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export function GalerieTerrain() {
  const { t } = useLang();

  const photos = [
    {
      src: "https://images.pexels.com/photos/3894376/pexels-photo-3894376.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Équipe ETT devant le siège à Bastos, Yaoundé",
      caption: t("Siège Bastos – Yaoundé", "HQ Bastos – Yaoundé"),
    },
    {
      src: "https://images.pexels.com/photos/4682189/pexels-photo-4682189.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Baie réseau ETT avec étiquettes manuscrites",
      caption: t("Baie réseau – Étiquettes à la main", "Network rack – Handwritten labels"),
    },
    {
      src: "https://images.pexels.com/photos/7709148/pexels-photo-7709148.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Open-space Call Center à Akwa, Douala",
      caption: t("Site Akwa – Douala", "Akwa site – Douala"),
    },
  ];

  return (
    <div>
      <p className="font-mont text-xs font-bold uppercase tracking-widest text-ett-orange mb-4">
        {t("Sur le terrain", "On the ground")}
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {photos.map((p, i) => (
          <figure key={i} className="overflow-hidden rounded-xl border border-white/[0.08]">
            <div className="relative h-44">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
            <figcaption className="p-3 text-xs text-slate-400 border-t border-white/[0.06]">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

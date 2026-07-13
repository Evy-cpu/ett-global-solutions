"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Badge, Card } from "@/components/ui/primitives";

export function WifiCaseStudy() {
  const { t } = useLang();
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid md:grid-cols-2">
        <div className="relative h-56 md:h-full">
          <Image
            src="https://images.pexels.com/photos/7820375/pexels-photo-7820375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900"
            alt="Hôtel La Falaise, Bonanjo, Douala"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="p-7">
          <Badge>{t("Étude de cas", "Case study")}</Badge>
          <h3 className="mt-3 font-mont text-xl font-extrabold text-white">
            WIFI CAMPUS — Hôtel La Falaise
          </h3>
          <p className="text-xs text-slate-500">
            Bonanjo, Douala • {t("Février 2025", "February 2025")}
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
            <li>• 6× Ubiquiti U6-Pro</li>
            <li>• 1.200 {t("connexions/mois", "connections/month")}</li>
            <li>• +34% {t("collecte emails", "email capture")}</li>
            <li>• {t("Déploiement", "Rollout")} : 72h</li>
          </ul>
          <blockquote className="mt-5 border-l-2 border-ett-orange pl-4 italic text-slate-300">
            « {t(
              "Depuis ETT, notre WiFi est passé de 62% à 94% satisfaction.",
              "Since ETT, our WiFi went from 62% to 94% satisfaction.",
            )} »
            <footer className="mt-1.5 text-xs not-italic text-slate-500">
              — M. Essomba, DG, Douala
            </footer>
          </blockquote>
        </div>
      </div>
    </Card>
  );
}

export function CallCaseStudy() {
  const { t } = useLang();
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid md:grid-cols-2">
        <div className="p-7 md:order-2">
          <Badge>{t("Étude de cas", "Case study")}</Badge>
          <h3 className="mt-3 font-mont text-xl font-extrabold text-white">
            ETT CALL CENTER — Canal+ Afrique
          </h3>
          <p className="text-xs text-slate-500">Douala Bassa</p>
          <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
            <li>• 42 {t("agents FR/EN", "FR/EN agents")}</li>
            <li>• 11.400 {t("appels/mois", "calls/month")}</li>
            <li>• CSAT 4.6/5</li>
            <li>
              • {t("Coût", "Cost")} <span className="line-through text-slate-500">-30%</span>{" "}
              -52% {t("vs Paris", "vs Paris")}
            </li>
          </ul>
        </div>
        <div className="relative h-56 md:order-1 md:h-full">
          <Image
            src="https://images.pexels.com/photos/7709148/pexels-photo-7709148.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            alt="Open-space call center Akwa, Douala"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Card>
  );
}

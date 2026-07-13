"use client";

import { useLang } from "@/lib/i18n";

export function HowItWorks({ type }: { type: "wifi" | "call" }) {
  const { t } = useLang();

  const wifiSteps = [
    { n: "01", t: "Brief", d: "Vous nous envoyez vos sites et besoins via le formulaire ou WhatsApp." },
    { n: "02", t: "Audit radio", d: "On passe sur place (Yaoundé/Douala) ou en visio pour mesurer la couverture." },
    { n: "03", t: "Devis & déploiement", d: "Devis en FCFA sous 24-48h. Installation en 48-72h en moyenne." },
    { n: "04", t: "Mise en ligne", d: "Portail captif + supervision NOC 24/7. Vous suivez tout en temps réel." },
  ];

  const callSteps = [
    { n: "01", t: "Brief express", d: "Vous remplissez le formulaire ou appelez directement au +237 6 22 14 56 78." },
    { n: "02", t: "Proposition", d: "On vous envoie en 24h un devis + planning de montée en charge (14 jours max)." },
    { n: "03", t: "Recrutement & formation", d: "Agents recrutés à Yaoundé ou Douala, formés sur votre marque." },
    { n: "04", t: "Go live", d: "Lancement en production. Reporting quotidien + écoute qualité." },
  ];

  const steps = type === "wifi" ? wifiSteps : callSteps;
  const title = type === "wifi" ? "Comment ça marche – WIFI CAMPUS" : "Comment ça marche – ETT CALL CENTER";

  return (
    <div className="mx-auto max-w-7xl px-6">
      <p className="font-mont text-xs font-bold uppercase tracking-widest text-ett-orange">{title}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
            <div className="font-mont text-2xl font-extrabold text-ett-orange">{s.n}</div>
            <p className="mt-3 font-semibold text-white">{s.t}</p>
            <p className="mt-1.5 text-sm text-slate-400">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

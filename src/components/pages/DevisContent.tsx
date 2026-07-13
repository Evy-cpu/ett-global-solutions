"use client";

import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { Badge, Card } from "@/components/ui/primitives";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { ContactDirect } from "@/components/ContactDirect";
import { ViewersNow } from "@/components/LocalTouches";

export function DevisContent({ preset }: { preset?: string }) {
  const { t } = useLang();

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <Badge>{t("DEMANDE DE DEVIS", "GET A QUOTE")}</Badge>
          <h1 className="mt-4 font-mont text-4xl font-extrabold text-white">
            {t("Obtenez votre devis gratuit", "Get your free quote")}
          </h1>
          <p className="mt-3 text-slate-300">
            {t(
              "Réseaux, WIFI CAMPUS ou ETT CALL CENTER — parlez à un ingénieur ETT sous 24h.",
              "Networks, WIFI CAMPUS or ETT CALL CENTER — talk to an ETT engineer within 24h.",
            )}
          </p>
          <div className="mt-4">
            <ContactDirect />
          </div>
          <div className="mt-2 text-xs text-slate-500">
            <ViewersNow base={5} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="mt-8">
            <LeadForm preset={preset} />
          </Card>
        </Reveal>
      </section>
    </SiteShell>
  );
}

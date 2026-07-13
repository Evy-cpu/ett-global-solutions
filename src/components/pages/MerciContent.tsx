"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/Reveal";

export function MerciContent() {
  const { t } = useLang();
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <Reveal>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ett-orange/15 text-4xl">
            ✅
          </div>
          <h1 className="mt-6 font-mont text-4xl font-extrabold text-white">
            {t("Merci !", "Thank you!")}
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            {t(
              "Votre demande a bien été reçue. Un administrateur ETT suit votre dossier en temps réel et vous répond sous 24h.",
              "Your request has been received. An ETT administrator is following your case in real time and will reply within 24h.",
            )}
          </p>
          <p className="mt-3 font-mont text-sm font-bold tracking-widest text-ett-orange">
            YOUR OBJECTIVE, OUR PRIORITY
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/">
              <Button variant="glass" size="lg">
                {t("Retour à l'accueil", "Back home")}
              </Button>
            </Link>
            <Link href="/wifi-campus">
              <Button size="lg">WIFI CAMPUS →</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}

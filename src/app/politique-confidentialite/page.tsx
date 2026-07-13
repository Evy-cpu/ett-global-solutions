import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { Card } from "@/components/ui/primitives";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité d'ETT Global Solutions SARL.",
  robots: { index: false },
};

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-mont text-3xl font-extrabold text-white sm:text-4xl">
          Politique de confidentialité
        </h1>
        <Card className="mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h2 className="font-mont font-bold text-white">Qui sommes-nous ?</h2>
            <p className="mt-2">
              {COMPANY.name} SARL, Immeuble ETT, Rue 1.847 Bastos, Yaoundé, Cameroun.
              Contact : {COMPANY.email}
            </p>
          </div>

          <div>
            <h2 className="font-mont font-bold text-white">Données collectées</h2>
            <p className="mt-2">
              Via les formulaires de devis, contact et recrutement : nom, entreprise, email,
              téléphone, message, et éventuellement CV. Ces données sont utilisées uniquement
              pour vous recontacter et traiter votre demande.
            </p>
          </div>

          <div>
            <h2 className="font-mont font-bold text-white">Conservation</h2>
            <p className="mt-2">
              Les données sont conservées pendant 3 ans maximum, sauf obligation légale.
            </p>
          </div>

          <div>
            <h2 className="font-mont font-bold text-white">Vos droits</h2>
            <p className="mt-2">
              Vous pouvez demander l'accès, la rectification ou la suppression de vos données
              en écrivant à {COMPANY.email}. Nous nous engageons à répondre dans un délai raisonnable.
            </p>
          </div>

          <div>
            <h2 className="font-mont font-bold text-white">Cookies</h2>
            <p className="mt-2">
              Seul un cookie technique <code>ett_lang</code> est utilisé pour mémoriser votre
              langue. Aucune donnée n'est vendue ou partagée avec des tiers à des fins publicitaires.
            </p>
          </div>

          <p className="pt-2 text-xs text-slate-500">
            Dernière mise à jour : {COMPANY.updated}
          </p>
        </Card>
      </section>
    </SiteShell>
  );
}

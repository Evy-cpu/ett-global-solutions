import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { Card } from "@/components/ui/primitives";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'ETT Global Solutions SARL.",
  robots: { index: false },
};

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-mont text-3xl font-extrabold text-white sm:text-4xl">
          Mentions légales
        </h1>
        <Card className="mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h2 className="font-mont font-bold text-white">Éditeur du site</h2>
            <p className="mt-2">
              {COMPANY.name} — {COMPANY.legalForm}
              <br />
              Siège social : {COMPANY.addressHQ}
              <br />
              Antenne : {COMPANY.addressDouala}
              <br />
              RCCM : {COMPANY.rccm} • NIF : {COMPANY.nif} • Agrément ART : {COMPANY.art}
              <br />
              Directrice de la publication : {COMPANY.directrice}
              <br />
              Email : {COMPANY.email} • Tél : {COMPANY.phonePrimary}
            </p>
          </div>
          <div>
            <h2 className="font-mont font-bold text-white">Hébergement</h2>
            <p className="mt-2">{COMPANY.hebergeur}</p>
          </div>
          <div>
            <h2 className="font-mont font-bold text-white">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, logos, visuels,
              marques WIFI CAMPUS et ETT CALL CENTER) est la propriété exclusive d&apos;ETT
              GLOBAL SOLUTIONS SARL. Toute reproduction est interdite sans autorisation
              écrite préalable.
            </p>
          </div>
          <div>
            <h2 className="font-mont font-bold text-white">Données personnelles</h2>
            <p className="mt-2">
              Les informations recueillies via les formulaires de ce site sont destinées
              exclusivement à ETT GLOBAL SOLUTIONS pour le traitement des demandes de
              devis, de contact et de recrutement. Conformément à la réglementation en
              vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données en écrivant à {COMPANY.email}.
            </p>
          </div>
          <div>
            <h2 className="font-mont font-bold text-white">Cookies</h2>
            <p className="mt-2">
              Ce site utilise un cookie technique (<code>ett_lang</code>) pour mémoriser
              votre choix de langue pendant 30 jours. Aucun cookie publicitaire tiers
              n&apos;est déposé.
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { COMPANY } from "@/lib/company";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="ett-footer border-t border-white/[0.07] bg-ett-surface2">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-3">
        {/* Col 1 - Logo & description */}
        <div>
          <Image
            src="/logo_header.png"
            alt="ETT Global Solutions"
            width={200}
            height={60}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {t(
              "Votre partenaire technologique, fièrement basé à Yaoundé : réseaux, WiFi Campus, centres d'appels internationaux.",
              "Your technology partner, proudly based in Yaoundé: networks, WiFi Campus, international call centers.",
            )}
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { label: "WhatsApp", href: COMPANY.whatsappLink, txt: "WA" },
              { label: "LinkedIn", href: "#", txt: "in" },
              { label: "Facebook", href: "#", txt: "f" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mont text-xs font-bold text-slate-300 transition hover:border-ett-orange/50 hover:text-white"
              >
                {s.txt}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 - Navigation */}
        <div>
          <p className="font-mont text-sm font-bold text-white">
            {t("Pôles", "Divisions")}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/about" className="hover:text-white">
                Global Solutions
              </Link>
            </li>
            <li>
              <Link href="/wifi-campus" className="hover:text-white">
                WIFI CAMPUS
              </Link>
            </li>
            <li>
              <Link href="/call-center" className="hover:text-white">
                ETT CALL CENTER
              </Link>
            </li>
            <li className="pt-2">
              <Link href="/actus" className="hover:text-white">
                {t("Actus", "News")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3 - Contact essentiel */}
        <div>
          <p className="font-mont text-sm font-bold text-white">CONTACT</p>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>
              <a href={`tel:${COMPANY.phonePrimary.replace(/\s/g, "")}`} className="hover:text-ett-orange">
                {COMPANY.phonePrimary}
              </a>
            </p>
            <p>
              <a href={COMPANY.whatsappLink} className="hover:text-ett-orange">
                WhatsApp : {COMPANY.phoneWhatsapp}
              </a>
            </p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-ett-orange">
                {COMPANY.email}
              </a>
            </p>
            <p className="pt-2 text-xs text-slate-500">
              {COMPANY.addressHQ}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-slate-500 sm:flex-row">
          <p>
            © 2026 ETT GLOBAL SOLUTIONS –{" "}
            <span className="font-semibold text-slate-400">
              YOUR GLOBAL TECHNOLOGY PARTNER
            </span>
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-ett-orange">
              {t("Mentions légales", "Legal notice")}
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-ett-orange">
              {t("Confidentialité", "Privacy")}
            </Link>
            <Link href="/admin" className="hover:text-ett-orange">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

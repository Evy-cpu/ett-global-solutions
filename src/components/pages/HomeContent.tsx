"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { Badge, Button, Card } from "@/components/ui/primitives";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { FlagMarquee, LiveBadge } from "@/components/RealTouches";
import { COMPANY } from "@/lib/company";
import { TrustBar } from "@/components/TrustBar";
import { Engagements } from "@/components/Engagements";
import { FAQ } from "@/components/FAQ";
import { Chiffres } from "@/components/Chiffres";
import { Partenaires } from "@/components/Partenaires";
import { DerniersProjets } from "@/components/DerniersProjets";

const HERO_SLIDES = [
  { src: "/hero-call.jpg", alt: "ETT CALL CENTER – agents multilingues 24/7" },
  { src: "/team-bastos.jpg", alt: "Équipe ETT Global Solutions – Bastos Corporate Centre" },
  { src: "/network-rack.jpg", alt: "ETT Global Solutions – Data Center Yaoundé" },
  { src: "/hero-wifi.jpg", alt: "WIFI CAMPUS – connectivité étudiante" },
];

export function HomeContent() {
  const { t } = useLang();

  const kpis = [
    { v: "24/7", l: t("Support", "Support") },
    { v: "3", l: t("Pôles experts", "Expert hubs") },
    { v: "FR/EN", l: t("Bilingue", "Bilingual") },
    { v: "∞", l: "Scalable" },
  ];

  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden [height:88vh]">
        <HeroCarousel slides={HERO_SLIDES} />
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <Badge>ETT GLOBAL SOLUTIONS</Badge>
            <h1 className="mt-5 font-mont text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {t("CONNECTER LE MONDE,", "CONNECTING THE WORLD,")}
              <br />
              <span className="text-ett-orange">
                {t("SIMPLIFIER VOS SOLUTIONS.", "SIMPLIFYING YOUR SOLUTIONS.")}
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {t("Réseaux • Télécommunications • ", "Networks • Telecommunications • ")}
              <strong className="text-white">WIFI CAMPUS</strong>
              {" • "}
              <strong className="text-white">
                {t("Call Center International", "International Call Center")}
              </strong>
              <br />
              <span className="font-mont text-sm font-bold tracking-widest text-ett-orange">
                NETWORKING-BUILDING COMMUNITIES
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/devis">
                <Button size="lg">{t("Demander un devis", "Request a quote")}</Button>
              </Link>
              <Link href="/wifi-campus">
                <Button variant="glass" size="lg">
                  WIFI CAMPUS →
                </Button>
              </Link>
              <Link href="/call-center">
                <Button variant="glass" size="lg">
                  CALL CENTER →
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <LiveBadge label={t("Équipes en ligne 24/7", "Teams online 24/7")} />
              <span className="flex items-center gap-1.5" aria-label="Pays couverts">
                {["🇫🇷","🇧🇪","🇨🇦","🇬🇧","🇺🇸","🇨🇲"].map((flag, i) => (
                  <img key={i} src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${[...flag].map(c => c.codePointAt(0)?.toString(16)).join("-")}.png`} alt="" className="h-5 w-5" />
                ))}
              </span>
            </div>
             <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
               {kpis.map((k) => (
                 <div key={k.l}>
                   <p className="font-mont text-2xl font-extrabold text-white">{k.v}</p>
                   <p className="text-xs text-slate-400">{k.l}</p>
                 </div>
               ))}
             </div>
             <div className="mt-6 text-xs text-slate-500">
               {t("Fait avec ❤️ à Bastos, Yaoundé – Cameroun", "Made with ❤️ in Bastos, Yaoundé – Cameroon")}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3 POLES CARDS */}
      <section className="relative z-10 mx-auto mt-12 max-w-[1440px] px-4 sm:px-8">
        <RevealStagger className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            icon="🌐"
            title="ETT GLOBAL SOLUTIONS"
            slogan="NETWORKING-BUILDING COMMUNITIES"
            description={t(
              "Infrastructure réseau, télécoms, intégration globale. Votre partenaire technologique de bout en bout.",
              "Network infrastructure, telecoms, global integration. Your end-to-end technology partner.",
            )}
            href="/about"
            cta={t("Découvrir", "Discover")}
            image="/network-rack.jpg"
            imageAlt="ETT Global Solutions – Data Center Yaoundé"
          />
          <ServiceCard
            icon="📶"
            title="WIFI CAMPUS"
            slogan="YOUR GROWTH, OUR BUSINESS"
            description={t(
              "Portails captifs, hotspots, WiFi marketing. Transformez chaque connexion en croissance.",
              "Captive portals, hotspots, WiFi marketing. Turn every connection into growth.",
            )}
            href="/wifi-campus"
            cta={t("Voir WIFI CAMPUS", "See WIFI CAMPUS")}
            image="/hero-wifi.jpg"
            imageAlt="WIFI CAMPUS – connectivité étudiante"
          />
          <ServiceCard
            icon="🎧"
            title="ETT CALL CENTER"
            slogan="YOUR OBJECTIVE, OUR PRIORITY"
            description={t(
              "Externalisation multilingue 24/7. Spécial entreprises étrangères à fort volume d'appels.",
              "Multilingual 24/7 outsourcing. Built for foreign enterprises with high call volumes.",
            )}
            href="/call-center"
            cta={t("Voir Call Center", "See Call Center")}
            image="/callcenter-akwa.jpg"
            imageAlt="ETT Call Center – Akwa, Douala"
          />
        </RevealStagger>
      </section>

      {/* INTERNATIONAL COVERAGE MARQUEE */}
      <div className="mt-20">
        <FlagMarquee
          title={t(
            "Couverture internationale — Afrique • Europe • Amériques",
            "International coverage — Africa • Europe • Americas",
          )}
          items={[
            { flag: "🇫🇷", label: "France" },
            { flag: "🇧🇪", label: "Belgique" },
            { flag: "🇨🇦", label: "Canada" },
            { flag: "🇬🇧", label: "United Kingdom" },
            { flag: "🇺🇸", label: "United States" },
            { flag: "🇨🇭", label: "Suisse" },
            { flag: "🇩🇪", label: "Deutschland" },
            { flag: "🇨🇲", label: "Cameroun" },
            { flag: "🇨🇮", label: "Côte d'Ivoire" },
            { flag: "🇸🇳", label: "Sénégal" },
            { flag: "🇲🇦", label: "Maroc" },
            { flag: "🇹🇬", label: "Togo" },
          ]}
        />
      </div>

      {/* ABOUT */}
      <section className="relative mt-4 overflow-hidden py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: "url(/team-bastos.jpg)" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-ett-dark/90" aria-hidden />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <Badge>{t("À PROPOS", "ABOUT")} – ETT GLOBAL SOLUTIONS</Badge>
            <h2 className="mt-5 font-mont text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {t("Un hub technologique", "An African tech hub,")}
              <br />
              {t("africain, tourné vers le monde.", "built for the world.")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {t(
                "ETT GLOBAL SOLUTIONS conçoit, déploie et opère vos infrastructures critiques : réseaux d'entreprise, ",
                "ETT GLOBAL SOLUTIONS designs, deploys and operates your critical infrastructure: enterprise networks, ",
              )}
              <strong className="text-white">WIFI CAMPUS</strong>
              {t(
                " avec portail captif, et ",
                " with captive portal, and ",
              )}
              <strong className="text-white">
                {t("centres d'appels internationaux", "international call centers")}
              </strong>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {t("Notre signature : ", "Our signature: ")}
              <strong className="text-ett-orange">
                NETWORKING-BUILDING COMMUNITIES
              </strong>
              .{" "}
              {t(
                "Nous connectons les utilisateurs, les lieux et les marques — avec fiabilité, sécurité et performance.",
                "We connect users, venues and brands — reliably, securely, performantly.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                t("Fiabilité – SLA & supervision", "Reliability – SLA & monitoring"),
                t("Sécurité – RGPD • ISO mindset", "Security – GDPR • ISO mindset"),
                t(
                  "Scalabilité – Afrique • Europe • +",
                  "Scalability – Africa • Europe • +",
                ),
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Card>
              <h3 className="font-mont text-lg font-extrabold text-white">
                {t("Nos 3 expertises", "Our 3 areas of expertise")}
              </h3>
              <ul className="mt-5 space-y-5">
                <li>
                  <p className="font-mont font-bold text-white">Global Networks</p>
                  <p className="text-sm text-slate-400">
                    {t(
                      "LAN/WAN, SD-WAN, télécoms, cybersécurité.",
                      "LAN/WAN, SD-WAN, telecoms, cybersecurity.",
                    )}
                  </p>
                </li>
                <li>
                  <p className="font-mont font-bold text-white">WIFI CAMPUS</p>
                  <p className="text-sm text-slate-400">
                    {t(
                      "Captive Portal, Hotspot, analytics, WiFi marketing.",
                      "Captive Portal, Hotspot, analytics, WiFi marketing.",
                    )}{" "}
                    <span className="font-semibold text-ett-orange">
                      YOUR GROWTH, OUR BUSINESS
                    </span>
                  </p>
                </li>
                <li>
                  <p className="font-mont font-bold text-white">ETT CALL CENTER</p>
                  <p className="text-sm text-slate-400">
                    {t(
                      "Inbound/Outbound, multilingue FR/EN, 24/7.",
                      "Inbound/Outbound, multilingual FR/EN, 24/7.",
                    )}{" "}
                    <span className="font-semibold text-ett-orange">
                      YOUR OBJECTIVE, OUR PRIORITY
                    </span>
                  </p>
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* ENGAGEMENTS */}
      <section className="relative overflow-hidden py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.04]"
          style={{ backgroundImage: "url(/callcenter-akwa.jpg)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8">
          <Engagements />
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="relative overflow-hidden py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.07]"
          style={{ backgroundImage: "url(/network-rack.jpg)" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-ett-dark/85" aria-hidden />
        <div className="relative">
          <Chiffres />
        </div>
      </section>

      {/* DERNIERS PROJETS */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-8 py-16">
        <DerniersProjets />
      </section>

      {/* PARTENAIRES */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-8 pb-16">
        <Partenaires />
      </section>


      {/* CTA GRADIENT */}
      <section className="relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url(/hero-call.jpg)" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-ett-dark/80" aria-hidden />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-ett-orange/25 bg-linear-to-br from-ett-orange/20 via-ett-blue/15 to-transparent p-10 text-center sm:p-14">
              <h2 className="font-mont text-3xl font-extrabold text-white sm:text-4xl">
                {t("Prêt à accélérer ?", "Ready to scale ?")}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-300">
                {t(
                  "Parlez à un ingénieur ETT en 24h. Devis gratuit.",
                  "Talk to an ETT engineer in 24h. Free estimate.",
                )}
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/devis">
                  <Button size="lg">{t("Demander un devis", "Request a quote")}</Button>
                </Link>
                <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                  <Button variant="glass" size="lg">
                    {t("Discuter sur WhatsApp", "Chat on WhatsApp")}
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-8 pb-20">
        <h2 className="font-mont text-2xl font-extrabold text-white mb-6">
          Questions fréquentes
        </h2>
        <FAQ
          items={[
            {
              q: "Combien de temps pour un devis ?",
              qEn: "How long for a quote?",
              a: "On vous répond sous 24-48h avec un devis en FCFA TTC.",
              aEn: "We reply within 24-48h with a quote in FCFA TTC.",
            },
            {
              q: "Vous intervenez hors de Yaoundé ?",
              qEn: "Do you operate outside Yaoundé?",
              a: "Oui : Douala (Akwa), Bafoussam en cours, et tous les projets hôteliers à Kribi.",
              aEn: "Yes: Douala (Akwa), Bafoussam rolling out, and hotel projects in Kribi.",
            },
            {
              q: "Est-ce que vous travaillez le dimanche ?",
              qEn: "Do you work on Sundays?",
              a: "Le support Call Center est 24/7. L'équipe répond sur WhatsApp même le dimanche.",
              aEn: "Call Center support is 24/7. The team replies on WhatsApp even on Sundays.",
            },
          ]}
        />
      </section>
    </SiteShell>
  );
}

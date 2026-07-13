"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Badge, Button, Card } from "@/components/ui/primitives";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { CountUp, FlagMarquee, LiveBadge, WifiPulse } from "@/components/RealTouches";
import { WifiCaseStudy } from "@/components/CaseStudy";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Zones } from "@/components/Zones";
import { GalerieTerrain } from "@/components/GalerieTerrain";
import { FAQ } from "@/components/FAQ";

const HERO_SLIDES = [
  {
    src: "/hero-wifi.jpg",
    alt: "WIFI CAMPUS – Connected Campus, Empowering Future Leaders",
  },
  {
    src: "https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    alt: "WIFI CAMPUS – étudiants africains connectés sur la pelouse du campus",
  },
  {
    src: "https://images.pexels.com/photos/5965690/pexels-photo-5965690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    alt: "WIFI CAMPUS – étudiante africaine connectée sur tablette",
  },
  {
    src: "https://images.pexels.com/photos/8199165/pexels-photo-8199165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    alt: "WIFI CAMPUS – salle de classe connectée",
  },
];

export function WifiContent() {
  const { t } = useLang();

  const features = [
    {
      icon: "🎨",
      title: "Captive Portal Branding",
      d: t(
        "Portail 100% à votre marque, login social / SMS / email",
        "Branded captive portal, social/SMS/email login",
      ),
      image:
        "https://images.pexels.com/photos/6146974/pexels-photo-6146974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Étudiants africains connectés au portail captif en groupe",
    },
    {
      icon: "📣",
      title: "WiFi Marketing",
      d: t(
        "Collecte opt-in, campagnes, coupons, CRM export",
        "Opt-in capture, campaigns, coupons, CRM export",
      ),
      image:
        "https://images.pexels.com/photos/6146995/pexels-photo-6146995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Étudiants sur terrasse consultant leurs offres et coupons",
    },
    {
      icon: "📊",
      title: "Analytics Live",
      d: t(
        "Fréquentation, temps de session, zones chaudes",
        "Footfall, session time, heat zones",
      ),
      image:
        "https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Écran de supervision réseau avec câblage data center",
    },
    {
      icon: "🔒",
      title: t("Sécurité & QOS", "Security & QoS"),
      d: t(
        "Isolation VLAN, filtrage, bande passante par profil",
        "VLAN isolation, filtering, per-profile QoS",
      ),
      image: "https://images.pexels.com/photos/4682189/pexels-photo-4682189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Baie réseau ETT avec switch Cisco et étiquettes manuscrites",
    },
    {
      icon: "🏢",
      title: "Multi-sites",
      d: t(
        "Campus, hôtels, retail, events – centralisé",
        "Campus, hotels, retail, events – centralized",
      ),
      image:
        "https://images.pexels.com/photos/6147398/pexels-photo-6147398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Étudiants connectés sur les marches du campus",
    },
    {
      icon: "🔗",
      title: t("Intégrations", "Integrations"),
      d: t(
        "PMS hôtelier, CRM, Meta / Google Ads",
        "Hotel PMS, CRM, Meta / Google Ads",
      ),
      image:
        "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Baie de serveurs data center pour intégrations réseau",
    },
  ];

  const useCases = [
    {
      icon: "🎓",
      t: t("Campus & Universités", "Campus & Universities"),
      d: t(
        "authentification étudiante, bande passante équitable",
        "student authentication, fair bandwidth",
      ),
    },
    {
      icon: "🏨",
      t: t("Hôtels & Resorts", "Hotels & Resorts"),
      d: t(
        "PMS intégration, upsell spa/restaurant",
        "PMS integration, spa/restaurant upsell",
      ),
    },
    {
      icon: "🛍️",
      t: t("Retail & Malls", "Retail & Malls"),
      d: t("capture leads, retargeting", "lead capture, retargeting"),
    },
    {
      icon: "🎪",
      t: t("Événements", "Events"),
      d: t("hotspot temporaire haute densité", "temporary high-density hotspot"),
    },
    {
      icon: "🌆",
      t: t("Villes intelligentes", "Smart cities"),
      d: t("WiFi public sécurisé", "secure public WiFi"),
    },
  ];

  const offer = [
    t("Audit radio & plan de couverture", "Radio audit & coverage plan"),
    t("Portail captif design ETT", "ETT-designed captive portal"),
    t("Supervision 24/7 NOC", "24/7 NOC monitoring"),
    t("Tableau de bord marketing", "Marketing dashboard"),
    t("Support & maintenance", "Support & maintenance"),
  ];

  const sectors = [
    { flag: "🎓", label: t("Universités", "Universities") },
    { flag: "🏨", label: t("Hôtels & Resorts", "Hotels & Resorts") },
    { flag: "🛍️", label: t("Centres commerciaux", "Shopping malls") },
    { flag: "☕", label: t("Cafés & Restaurants", "Cafés & Restaurants") },
    { flag: "🏥", label: t("Cliniques", "Clinics") },
    { flag: "✈️", label: t("Aéroports", "Airports") },
    { flag: "🏟️", label: t("Stades & Events", "Stadiums & Events") },
    { flag: "🏢", label: t("Espaces de coworking", "Coworking spaces") },
    { flag: "🌆", label: t("Villes intelligentes", "Smart cities") },
  ];

  return (
    <SiteShell>
      <PageHero
        slides={HERO_SLIDES}
        badge="WIFI CAMPUS by ETT"
        title="WIFI CAMPUS"
        slogan="YOUR GROWTH, OUR BUSINESS"
        text={t(
          "Portails captifs intelligents, hotspots sécurisés, analytics temps réel. Chez nous à Yaoundé, on transforme votre WiFi en machine de croissance — à partir de 450.000 FCFA.",
          "Smart captive portals, secure hotspots, real-time analytics. From Yaoundé, we turn your WiFi into a growth engine — from 450,000 FCFA.",
        )}
        extra={
          <div className="flex flex-wrap items-center gap-4">
            <LiveBadge label={t("NOC en ligne 24/7", "NOC online 24/7")} />
            <WifiPulse size={56} />
          </div>
        }
      >
        <Link href="/devis?s=wifi">
          <Button size="lg">{t("Auditer mon WiFi", "Audit my WiFi")}</Button>
        </Link>
      </PageHero>

      {/* SECTORS MARQUEE */}
      <FlagMarquee
        title={t("Ils se connectent partout", "They connect everywhere")}
        items={sectors}
      />

      {/* LIVE COUNTERS */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <RevealStagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { end: 1200, suffix: "+", label: t("Points d'accès déployés", "Access points deployed") },
            { end: 98, suffix: "%", label: t("Taux de disponibilité", "Uptime rate") },
            { end: 45000, suffix: "+", label: t("Connexions / mois", "Connections / month") },
            { end: 24, suffix: "/7", label: t("Supervision NOC", "NOC monitoring") },
          ].map((k) => (
            <StaggerItem key={k.label}>
              <Card className="p-6 text-center">
                <CountUp
                  end={k.end}
                  suffix={k.suffix}
                  className="font-mont text-3xl font-extrabold text-ett-orange sm:text-4xl"
                />
                <p className="mt-2 text-xs text-slate-400">{k.label}</p>
              </Card>
            </StaggerItem>
          ))}
        </RevealStagger>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="font-mont text-3xl font-extrabold text-white">
            {t("Fonctionnalités", "Features")}
          </h2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} style={i === 2 ? { transform: "translateY(6px)" } : undefined}>
              <ServiceCard
                icon={f.icon}
                title={f.title}
                description={f.d}
                image={f.image}
                imageAlt={f.imageAlt}
              />
            </div>
          ))}
        </RevealStagger>
      </section>

      {/* CASE STUDY */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <WifiCaseStudy />
        </Reveal>
      </section>

      {/* HOW IT WORKS + ZONES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <HowItWorks type="wifi" />
        <div className="mt-12">
          <Zones />
        </div>
      </section>

      {/* TERRAIN GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <GalerieTerrain />
      </section>

      {/* USE CASES */}
      <section className="border-y border-white/[0.06] bg-ett-surface2/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-mont text-3xl font-extrabold text-white">
              {t("Cas d'usage", "Use cases")}
            </h2>
          </Reveal>
          <RevealStagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <StaggerItem key={u.t}>
                <Card className="h-full">
                  <span className="text-3xl" aria-hidden>
                    {u.icon}
                  </span>
                  <p className="mt-3 font-mont font-bold text-white">{u.t}</p>
                  <p className="mt-2 text-sm text-slate-400">{u.d}</p>
                </Card>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA DEVIS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Link href="/devis?s=wifi">
              <Button size="lg">
                {t("Demander un devis WIFI CAMPUS", "Request a WIFI CAMPUS quote")}
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/[0.06] bg-ett-surface2/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Badge>{t("Avis clients", "Customer reviews")}</Badge>
            <h2 className="mt-4 font-mont text-2xl font-extrabold text-white">
              {t(
                "Depuis Yaoundé, Douala et ailleurs.",
                "From Yaoundé, Douala and beyond.",
              )}
            </h2>
          </Reveal>
          <div className="mt-8">
            <TestimonialsSection />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-mont text-2xl font-extrabold text-white mb-6">
          Questions fréquentes – WIFI CAMPUS
        </h2>
        <FAQ
          items={[
            {
              q: "Faut-il une connexion internet dédiée ?",
              qEn: "Do we need a dedicated internet line?",
              a: "Oui, on vous recommande une fibre ou 4G pro. On peut vous accompagner pour le choix du FAI.",
              aEn: "Yes, we recommend fiber or pro 4G. We can help you choose the ISP.",
            },
            {
              q: "Combien de temps pour avoir le portail en ligne ?",
              qEn: "How long until the captive portal is live?",
              a: "Après l'audit, le déploiement complet prend 48-72h en moyenne.",
              aEn: "After the audit, full deployment usually takes 48-72h.",
            },
            {
              q: "Est-ce que le prix comprend la maintenance ?",
              qEn: "Does the price include maintenance?",
              a: "La supervision NOC est incluse. La maintenance préventive est en option mensuelle.",
              aEn: "NOC monitoring is included. Preventive maintenance is an optional monthly add-on.",
            },
          ]}
        />
      </section>
    </SiteShell>
  );
}

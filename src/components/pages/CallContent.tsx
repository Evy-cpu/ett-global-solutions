"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Badge, Button, Card } from "@/components/ui/primitives";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { CountUp, FlagMarquee, LiveBadge } from "@/components/RealTouches";
import { CallCenterBriefForm } from "@/components/CallCenterBriefForm";
import { CallCaseStudy } from "@/components/CaseStudy";
import { HowItWorks } from "@/components/HowItWorks";
import { Zones } from "@/components/Zones";
import { GalerieTerrain } from "@/components/GalerieTerrain";
import { FAQ } from "@/components/FAQ";

const HERO_SLIDES = [
  {
    src: "/callcenter-akwa.jpg",
    alt: "ETT CALL CENTER – Akwa, Douala, Cameroon",
  },
  {
    src: "/hero-call.jpg",
    alt: "ETT CALL CENTER – agents multilingues Global Support",
  },
  {
    src: "https://images.pexels.com/photos/7689855/pexels-photo-7689855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    alt: "ETT CALL CENTER – équipe support client réunion de suivi",
  },
  {
    src: "https://images.pexels.com/photos/8867473/pexels-photo-8867473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    alt: "ETT CALL CENTER – agents concentrés sur leurs écrans",
  },
];

export function CallContent() {
  const { t } = useLang();

  const services = [
    {
      icon: "📞",
      title: "Customer Care 24/7",
      d: t(
        "Réception multicanale : téléphone, email, chat, WhatsApp",
        "Omnichannel inbound: phone, email, chat, WhatsApp",
      ),
      image:
        "https://images.pexels.com/photos/7709195/pexels-photo-7709195.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Agente customer care africaine avec casque et laptop",
    },
    {
      icon: "📈",
      title: t("Télémarketing & Vente", "Telemarketing & Sales"),
      d: t(
        "Émission qualifiée, prise de RDV, upsell, enquêtes",
        "Qualified outbound, appointment setting, upsell, surveys",
      ),
      image:
        "https://images.pexels.com/photos/7709184/pexels-photo-7709184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Agente télémarketing africaine au casque",
    },
    {
      icon: "🛠️",
      title: "Tech Support",
      d: t(
        "N1/N2, ticketing, SLA, base de connaissances",
        "L1/L2, ticketing, SLA, knowledge base",
      ),
      image:
        "https://images.pexels.com/photos/7709114/pexels-photo-7709114.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Agent support technique concentré sur son écran",
    },
    {
      icon: "☎️",
      title: t("Hotline Internationale", "International Hotline"),
      d: t(
        "Numéros locaux FR • BE • CA • UK • US, routage intelligent",
        "Local DIDs FR • BE • CA • UK • US, smart routing",
      ),
      image:
        "https://images.pexels.com/photos/8866716/pexels-photo-8866716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Agents hotline internationale sur leurs postes",
    },
    {
      icon: "📋",
      title: t("Qualité & Reporting", "Quality & Reporting"),
      d: t(
        "Écoute, QA, dashboards temps réel, CRM",
        "Call QA, live dashboards, CRM sync",
      ),
      image:
        "https://images.pexels.com/photos/7689868/pexels-photo-7689868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Équipe QA analysant les indicateurs en réunion",
    },
    {
      icon: "🚀",
      title: t("Scalabilité Offshore", "Offshore Scalability"),
      d: t(
        "50 → 300+ agents, ramp-up 14 jours, coûts optimisés",
        "50 → 300+ agents, 14-day ramp-up, optimized costs",
      ),
      image:
        "https://images.pexels.com/photos/8867249/pexels-photo-8867249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Grande équipe d'agents call center mobilisée",
    },
  ];

  const why = [
    {
      t: t("Coût compétitif Afrique", "Competitive African cost"),
      d: t(
        "jusqu'à -55% vs onshore UE, qualité native FR/EN",
        "up to -55% vs EU onshore, native FR/EN quality",
      ),
    },
    {
      t: t("Fuseaux alignés", "Aligned time zones"),
      d: t(
        "UTC+1, couverture EU / UK / Afrique / East Coast US",
        "UTC+1, coverage EU / UK / Africa / US East Coast",
      ),
    },
    {
      t: t("Conformité", "Compliance"),
      d: t(
        "RGPD, enregistrements chiffrés, PCI-DSS ready",
        "GDPR, encrypted recordings, PCI-DSS ready",
      ),
    },
    {
      t: t("Montée en charge 14j", "14-day ramp-up"),
      d: t("recrutement, formation, scripting", "recruitment, training, scripting"),
    },
    {
      t: t("Tech moderne", "Modern tech"),
      d: t(
        "3CX / Genesys ready, CRM HubSpot / Zendesk / Salesforce",
        "3CX / Genesys ready, CRM HubSpot / Zendesk / Salesforce",
      ),
    },
    {
      t: t("Pilotage objectif", "Objective-driven"),
      d: "YOUR OBJECTIVE, OUR PRIORITY – KPI " + t("contractuels", "contractual"),
    },
  ];

  const countries = [
    { flag: "🇫🇷", label: "France" },
    { flag: "🇧🇪", label: "Belgique" },
    { flag: "🇨🇦", label: "Canada" },
    { flag: "🇬🇧", label: "United Kingdom" },
    { flag: "🇺🇸", label: "United States" },
    { flag: "🇨🇭", label: "Suisse" },
    { flag: "🇱🇺", label: "Luxembourg" },
    { flag: "🇩🇪", label: "Deutschland" },
    { flag: "🇨🇮", label: "Côte d'Ivoire" },
    { flag: "🇸🇳", label: "Sénégal" },
    { flag: "🇨🇲", label: "Cameroun" },
    { flag: "🇲🇦", label: "Maroc" },
  ];

  return (
    <SiteShell>
      <PageHero
        slides={HERO_SLIDES}
        badge="ETT CALL CENTER – International"
        title="ETT CALL CENTER"
        slogan="YOUR OBJECTIVE, OUR PRIORITY"
        text={t(
          "Centre d'appels multilingue 24/7, équipe Yaoundé + night shift Douala (GMT+1), conçu pour les entreprises étrangères à fort volume : support client, télévente, SAV technique, hotline. On vous accompagne, même le dimanche.",
          "24/7 multilingual call center, Yaoundé team + Douala night shift (GMT+1), built for foreign enterprises with high call volumes: customer care, telesales, tech support, hotline. We've got you covered, even on Sundays.",
        )}
        extra={
          <div className="flex flex-wrap items-center gap-4">
            <LiveBadge label={t("Agents en ligne maintenant", "Agents online now")} />
            <span className="flex items-center gap-1.5 text-2xl" aria-label="Pays couverts">
              🇫🇷 🇧🇪 🇨🇦 🇬🇧 🇺🇸
            </span>
          </div>
        }
      >
        <Link href="/devis?s=call">
          <Button size="lg">{t("Parler à un responsable", "Talk to a manager")}</Button>
        </Link>
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-300">
          {t("Langues : FR • EN • + langues sur demande", "Languages: FR • EN • + on demand")}
        </span>
      </PageHero>

      {/* COUNTRIES FLAG MARQUEE */}
      <FlagMarquee
        title={t(
          "Couverture internationale — numéros locaux & routage intelligent",
          "International coverage — local numbers & smart routing",
        )}
        items={countries}
      />

      {/* LIVE COUNTERS */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <RevealStagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { end: 300, suffix: "+", label: t("Agents mobilisables", "Deployable agents") },
            { end: 12000, suffix: "+", label: t("Appels traités / jour", "Calls handled / day") },
            { end: 14, suffix: " j", label: t("Ramp-up moyen", "Average ramp-up") },
            { end: 97, suffix: "%", label: t("Satisfaction client (CSAT)", "Customer satisfaction (CSAT)") },
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

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="font-mont text-3xl font-extrabold text-white">Services</h2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} style={i === 4 ? { transform: "translateY(6px)" } : undefined}>
              <ServiceCard
                icon={s.icon}
                title={s.title}
                description={s.d}
                image={s.image}
                imageAlt={s.imageAlt}
              />
            </div>
          ))}
        </RevealStagger>
      </section>

      {/* CASE STUDY */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <CallCaseStudy />
        </Reveal>
      </section>

      {/* HOW IT WORKS + ZONES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <HowItWorks type="call" />
        <div className="mt-12">
          <Zones />
        </div>
      </section>

      {/* TERRAIN GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <GalerieTerrain />
      </section>

      {/* CTA DEVIS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Link href="/devis?s=call">
              <Button size="lg">
                {t("Demander un devis CALL CENTER", "Request a CALL CENTER quote")}
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* WHY FOREIGN ENTERPRISES */}
      <section className="border-y border-white/[0.06] bg-ett-surface2/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-mont text-3xl font-extrabold text-white">
              {t(
                "Pourquoi les entreprises étrangères nous choisissent",
                "Why foreign enterprises choose us",
              )}
            </h2>
          </Reveal>
          <RevealStagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <StaggerItem key={w.t}>
                <Card className="h-full">
                  <p className="font-mont font-bold text-white">{w.t}</p>
                  <p className="mt-2 text-sm text-slate-400">{w.d}</p>
                </Card>
              </StaggerItem>
            ))}
          </RevealStagger>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/devis?s=call">
              <Button size="lg">
                {t("Lancer un pilote 30 jours", "Start a 30-day pilot")}
              </Button>
            </Link>
            <a href="/og-ett.jpg" download>
              <Button variant="glass" size="lg">
                {t("Télécharger la brochure", "Download brochure")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BRIEF FORM */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <Card>
            <div className="flex items-center justify-between">
              <Badge>{t("Brief Express", "Express Brief")}</Badge>
              <LiveBadge label={t("Suivi live", "Live follow-up")} />
            </div>
            <h2 className="mt-4 font-mont text-2xl font-extrabold text-white">
              {t(
                "Décrivez votre projet Call Center",
                "Describe your Call Center project",
              )}
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              {t(
                "Réponse d'un responsable en moins de 24h.",
                "A manager replies in under 24h.",
              )}
            </p>
            <div className="mt-6">
              <CallCenterBriefForm />
            </div>
          </Card>
        </Reveal>
      </section>
    </SiteShell>
  );
}

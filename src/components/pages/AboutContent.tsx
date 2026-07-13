"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Badge, Button, Card } from "@/components/ui/primitives";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Signature } from "@/components/LocalTouches";

export function AboutContent() {
  const { t } = useLang();

  const values = [
    {
      icon: "🔧",
      t: t("Fiabilité", "Reliability"),
      d: t("SLA & supervision 24/7 NOC.", "SLA & 24/7 NOC monitoring."),
    },
    {
      icon: "🛡️",
      t: t("Sécurité", "Security"),
      d: t("RGPD, ISO mindset, chiffrement.", "GDPR, ISO mindset, encryption."),
    },
    {
      icon: "🌍",
      t: t("Scalabilité", "Scalability"),
      d: t("Afrique • Europe • Amériques.", "Africa • Europe • Americas."),
    },
  ];

  return (
    <SiteShell>
      <PageHero
        slides={[
          { src: "/about-team-meeting.jpg", alt: "Réunion ETT Global Solutions – Infrastructure réseau" },
          { src: "/about-office-douala.jpg", alt: "ETT Call Center – Douala, Cameroun" },
          { src: "/news-chu-wifi.jpg", alt: "Installation WiFi ETT – CHU Yaoundé" },
        ]}
        badge={`${t("À PROPOS", "ABOUT")} – ETT GLOBAL SOLUTIONS`}
        title={t("Un hub technologique né à Yaoundé.", "A tech hub born in Yaoundé.")}
        slogan="NETWORKING-BUILDING COMMUNITIES"
        text={t(
          "ETT GLOBAL SOLUTIONS conçoit, déploie et opère vos infrastructures critiques depuis Bastos : réseaux d'entreprise, WIFI CAMPUS avec portail captif, et centres d'appels internationaux depuis notre site d'Akwa, Douala.",
          "ETT GLOBAL SOLUTIONS designs, deploys and operates your critical infrastructure from Bastos: enterprise networks, WIFI CAMPUS with captive portal, and international call centers from our Akwa site in Douala.",
        )}
      >
        <Link href="/devis">
          <Button size="lg">{t("Demander un devis", "Request a quote")}</Button>
        </Link>
      </PageHero>

      {/* PHOTO STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative h-56 overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:h-full">
              <Image
                src="/team-bastos.jpg"
                alt="Équipe ETT Global Solutions – Bastos Corporate Centre"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-mont text-sm font-bold text-white">
                  {t("L'équipe ETT — Bastos, Yaoundé", "The ETT team — Bastos, Yaoundé")}
                </p>
              </div>
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl">
              <Image
                src="/network-rack.jpg"
                alt="ETT Data Center – Yaoundé"
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl">
              <Image
                src="/callcenter-akwa.jpg"
                alt="ETT Call Center – Akwa, Douala"
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <Badge>{t("Nos valeurs", "Our values")}</Badge>
          <h2 className="mt-4 max-w-2xl font-mont text-3xl font-extrabold text-white">
            {t(
              "Nous connectons les utilisateurs, les lieux et les marques.",
              "We connect users, venues and brands.",
            )}
          </h2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.t}>
              <Card className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ett-orange/12 text-2xl">
                  {v.icon}
                </div>
                <p className="font-mont text-lg font-extrabold text-white">{v.t}</p>
                <p className="mt-2 text-sm text-slate-400">{v.d}</p>
              </Card>
            </StaggerItem>
          ))}
        </RevealStagger>
      </section>

      {/* TEAM */}
      <section className="border-y border-white/[0.06] bg-ett-surface2/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Badge>{t("L'équipe", "The team")}</Badge>
            <h2 className="mt-4 font-mont text-3xl font-extrabold text-white">
              {t(
                "Des visages, pas juste un logo.",
                "Real faces, not just a logo.",
              )}
            </h2>
          </Reveal>
          <div className="mt-8">
            <TeamSection />
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="border-y border-white/[0.06] bg-ett-surface2/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Badge>{t("Avis clients", "Customer reviews")}</Badge>
            <h2 className="mt-4 font-mont text-2xl font-extrabold text-white">
              {t("Ce qu'on dit de nous, à Yaoundé et Douala.", "What people say, in Yaoundé and Douala.")}
            </h2>
          </Reveal>
          <div className="mt-8">
            <TestimonialsSection />
          </div>
        </div>
      </section>

      {/* EXPERTISE CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Global Networks",
              d: t(
                "LAN/WAN, SD-WAN, télécoms, cybersécurité.",
                "LAN/WAN, SD-WAN, telecoms, cybersecurity.",
              ),
              s: "NETWORKING-BUILDING COMMUNITIES",
              href: "/contact",
            },
            {
              t: "WIFI CAMPUS",
              d: t(
                "Captive Portal, Hotspot, analytics, WiFi marketing.",
                "Captive Portal, Hotspot, analytics, WiFi marketing.",
              ),
              s: "YOUR GROWTH, OUR BUSINESS",
              href: "/wifi-campus",
            },
            {
              t: "ETT CALL CENTER",
              d: t(
                "Inbound/Outbound, multilingue FR/EN, 24/7.",
                "Inbound/Outbound, multilingual FR/EN, 24/7.",
              ),
              s: "YOUR OBJECTIVE, OUR PRIORITY",
              href: "/call-center",
            },
          ].map((c, i) => (
            <StaggerItem key={c.t}>
              <Link href={c.href}>
                <Card
                  className="h-full"
                  style={i === 1 ? { transform: "translateY(6px)" } : undefined}
                >
                  <p className="font-mont text-lg font-extrabold text-white">{c.t}</p>
                  <p className="mt-1 font-mont text-[11px] font-bold tracking-widest text-ett-orange">
                    {c.s}
                  </p>
                  <p className="mt-3 text-sm text-slate-400">{c.d}</p>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-slate-400">
              {t(
                "Un document officiel, une décision engagée.",
                "An official document, a committed decision.",
              )}
            </p>
            <Signature />
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}

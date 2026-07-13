"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { Badge, Card } from "@/components/ui/primitives";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { NEWS_POSTS } from "@/lib/company";

export function ActusContent() {
  const { t } = useLang();
  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <Badge>{t("ACTUS", "NEWS")}</Badge>
          <h1 className="mt-4 font-mont text-4xl font-extrabold text-white">
            {t("Ce qui se passe chez ETT", "What's happening at ETT")}
          </h1>
          <p className="mt-2 text-slate-400">
            {t(
              "Des nouvelles fraîches, directement de Yaoundé et Douala.",
              "Fresh updates, straight from Yaoundé and Douala.",
            )}
          </p>
        </Reveal>

        <RevealStagger className="mt-10 space-y-6">
          {NEWS_POSTS.map((post, i) => (
            <StaggerItem key={post.slug}>
              <Link href={`/actus/${post.slug}`}>
                <Card
                  className="transition hover:border-ett-orange/40"
                  style={i === 1 ? { transform: "translateX(6px)" } : undefined}
                >
                  <p className="font-mont text-xs font-bold uppercase tracking-widest text-ett-orange">
                    {post.date}
                  </p>
                  <h2 className="mt-2 font-mont text-xl font-extrabold text-white">
                    {t(post.title, post.titleEn)}
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    {t(post.excerpt, post.excerptEn)}
                  </p>
                  <span className="mt-3 inline-block font-mont text-[13px] font-bold text-ett-orange">
                    {t("Lire l'article →", "Read article →")}
                  </span>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </RevealStagger>
      </section>
    </SiteShell>
  );
}

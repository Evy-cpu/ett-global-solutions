"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SiteShell } from "@/components/SiteShell";
import { Badge, Card } from "@/components/ui/primitives";
import { Reveal } from "@/components/Reveal";
import type { NEWS_POSTS } from "@/lib/company";

type Post = (typeof NEWS_POSTS)[number];

export function ActusDetailContent({ post }: { post: Post }) {
  const { t } = useLang();
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <Link href="/actus" className="text-sm font-semibold text-ett-orange hover:underline">
            ← {t("Toutes les actus", "All news")}
          </Link>
          <Badge className="mt-6">{post.date}</Badge>
          <h1 className="mt-4 font-mont text-3xl font-extrabold text-white sm:text-4xl">
            {t(post.title, post.titleEn)}
          </h1>
          <Card className="mt-8">
            <p className="text-base leading-relaxed text-slate-300">
              {t(post.excerpt, post.excerptEn)}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {t(
                "L'équipe ETT continue de déployer ses solutions réseau, WIFI CAMPUS et Call Center partout au Cameroun, avec le même mot d'ordre : NETWORKING-BUILDING COMMUNITIES.",
                "The ETT team keeps deploying network, WIFI CAMPUS and Call Center solutions across Cameroon, guided by one motto: NETWORKING-BUILDING COMMUNITIES.",
              )}
            </p>
            <p className="mt-6 font-mont text-sm font-bold tracking-widest text-ett-orange">
              — La Direction, ETT GLOBAL SOLUTIONS
            </p>
          </Card>
        </Reveal>
      </section>
    </SiteShell>
  );
}

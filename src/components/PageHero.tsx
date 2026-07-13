"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/primitives";
import { HeroCarousel, type HeroSlide } from "@/components/HeroCarousel";

export function PageHero({
  slides,
  badge,
  title,
  slogan,
  text,
  children,
  extra,
}: {
  slides: HeroSlide[];
  badge: string;
  title: string;
  slogan?: string;
  text: string;
  children?: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden py-24">
      <HeroCarousel slides={slides} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto w-full max-w-7xl px-6"
      >
        <Badge>{badge}</Badge>
        <h1 className="mt-5 font-mont text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {slogan && (
          <p className="mt-3 font-mont text-lg font-bold tracking-widest text-ett-orange">
            {slogan}
          </p>
        )}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {text}
        </p>
        {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        {extra && <div className="mt-6">{extra}</div>}
      </motion.div>
    </section>
  );
}

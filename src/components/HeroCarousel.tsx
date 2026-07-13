"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/lib/theme";

export type HeroSlide = { src: string; alt: string };

const OVERLAY_DARK =
  "linear-gradient(90deg, rgba(8,18,34,.94) 0%, rgba(8,18,34,.72) 45%, rgba(8,18,34,.30) 100%), radial-gradient(80% 120% at 80% 50%, rgba(233,78,27,.08), transparent)";
const OVERLAY_LIGHT =
  "linear-gradient(90deg, rgba(248,250,252,.92) 0%, rgba(248,250,252,.7) 45%, rgba(248,250,252,.25) 100%), radial-gradient(80% 120% at 80% 50%, rgba(233,78,27,.06), transparent)";

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const { resolved } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 5200);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-hidden="true"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0" style={{ background: resolved === "dark" ? OVERLAY_DARK : OVERLAY_LIGHT }} />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-2 rounded-full transition-all " +
              (i === index ? "w-7 bg-ett-orange" : "w-2 bg-white/40 hover:bg-white/70")
            }
          />
        ))}
      </div>
    </div>
  );
}

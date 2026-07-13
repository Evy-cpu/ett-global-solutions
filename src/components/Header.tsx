"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { LangToggle } from "@/components/LangToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/", label: t("ACCUEIL", "HOME") },
    { href: "/wifi-campus", label: "WIFI CAMPUS" },
    { href: "/call-center", label: "CALL CENTER" },
    { href: "/about", label: t("À PROPOS", "ABOUT") },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="ett-header fixed inset-x-0 top-0 z-50 h-[78px] border-b border-white/5 bg-ett-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo_header.png"
              alt="ETT Global Solutions"
              width={260}
              height={78}
              priority
              className="h-14 w-auto sm:h-[68px]"
            />
          <span className="hidden sm:block">
            <span className="block font-mont text-[15px] font-extrabold tracking-tight text-white">
              ETT GLOBAL <span className="text-ett-orange">SOLUTIONS</span>
            </span>
            <span className="block font-mont text-[10px] font-semibold tracking-widest text-ett-orange">
              NETWORKING-BUILDING COMMUNITIES
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "ett-nav-link relative font-mont text-[13px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300",
                  active
                    ? "text-white bg-ett-orange/15"
                    : "text-[#9fb2c8] hover:text-white hover:bg-white/6",
                )}
              >
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-ett-orange animate-pulse" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LangToggle />
          <button
            type="button"
            className="lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg bg-white/[0.06]">
              <span
                className={cn(
                  "h-0.5 w-5 bg-white transition",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn("h-0.5 w-5 bg-white transition", open && "opacity-0")}
              />
              <span
                className={cn(
                  "h-0.5 w-5 bg-white transition",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="ett-mobile-menu border-b border-white/5 bg-ett-dark/98 px-6 py-5 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "ett-nav-link font-mont text-sm font-semibold rounded-lg px-3 py-2 transition-all",
                      active
                        ? "text-white bg-ett-orange/15 border-l-2 border-ett-orange"
                        : "text-[#9fb2c8] hover:text-white hover:bg-white/6",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

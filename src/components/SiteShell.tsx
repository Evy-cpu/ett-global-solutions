"use client";

import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-center bg-no-repeat opacity-[0.045]"
        style={{ backgroundImage: "url(/watermark.png)", backgroundAttachment: "fixed", backgroundSize: "50%" }}
        aria-hidden
      />
      <main id="main" className="relative z-10 pt-[78px]">
        {children}
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "À propos / About",
  description:
    "ETT GLOBAL SOLUTIONS – un hub technologique africain, tourné vers le monde. NETWORKING-BUILDING COMMUNITIES.",
};

export default function Page() {
  return <AboutContent />;
}

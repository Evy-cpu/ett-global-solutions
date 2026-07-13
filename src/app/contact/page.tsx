import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez ETT GLOBAL SOLUTIONS – réseaux, WiFi Campus & Call Center.",
};

export default function Page() {
  return <ContactContent />;
}

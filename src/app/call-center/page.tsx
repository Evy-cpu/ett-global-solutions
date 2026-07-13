import type { Metadata } from "next";
import { CallContent } from "@/components/pages/CallContent";

export const metadata: Metadata = {
  title: "ETT CALL CENTER – YOUR OBJECTIVE, OUR PRIORITY",
  description:
    "Centre d'appels multilingue 24/7 pour entreprises étrangères : customer care, télémarketing, tech support, hotline internationale.",
};

export default function Page() {
  return <CallContent />;
}

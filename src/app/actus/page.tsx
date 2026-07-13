import type { Metadata } from "next";
import { ActusContent } from "@/components/pages/ActusContent";

export const metadata: Metadata = {
  title: "Actus",
  description: "Les actualités d'ETT Global Solutions à Yaoundé et Douala.",
};

export default function Page() {
  return <ActusContent />;
}

import type { Metadata } from "next";
import { RecrutementContent } from "@/components/pages/RecrutementContent";

export const metadata: Metadata = {
  title: "Recrutement",
  description: "Rejoignez l'équipe ETT Global Solutions à Yaoundé ou Douala.",
};

export default function Page() {
  return <RecrutementContent />;
}

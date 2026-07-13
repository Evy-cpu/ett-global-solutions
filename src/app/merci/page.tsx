import type { Metadata } from "next";
import { MerciContent } from "@/components/pages/MerciContent";

export const metadata: Metadata = {
  title: "Merci / Thank you",
  robots: { index: false },
};

export default function Page() {
  return <MerciContent />;
}

import type { Metadata } from "next";
import { WifiContent } from "@/components/pages/WifiContent";

export const metadata: Metadata = {
  title: "WIFI CAMPUS – YOUR GROWTH, OUR BUSINESS",
  description:
    "WIFI CAMPUS by ETT : portails captifs, hotspots, WiFi marketing & analytics temps réel.",
};

export default function Page() {
  return <WifiContent />;
}

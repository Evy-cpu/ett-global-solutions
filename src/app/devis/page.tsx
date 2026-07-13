import type { Metadata } from "next";
import { DevisContent } from "@/components/pages/DevisContent";

export const metadata: Metadata = {
  title: "Demande de devis / Get a quote",
  description:
    "Demandez votre devis gratuit ETT GLOBAL SOLUTIONS : réseaux, WIFI CAMPUS, ETT CALL CENTER.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s } = await searchParams;
  return <DevisContent preset={s} />;
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider, type Lang } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { ToastProvider } from "@/components/ui/toast";
import { Tracker } from "@/components/Tracker";
import { StickyWhatsApp } from "@/components/LocalTouches";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ettglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | ETT GLOBAL SOLUTIONS",
    default: "ETT GLOBAL SOLUTIONS – NETWORKING-BUILDING COMMUNITIES",
  },
  description:
    "ETT Global Solutions – Réseaux, WiFi Campus & Call Center international. Networking-Building Communities.",
  keywords: [
    "ETT Global Solutions",
    "WiFi Campus",
    "Call Center",
    "Réseaux",
    "Networking",
    "Captive Portal",
    "Afrique",
  ],
  openGraph: {
    title: "ETT GLOBAL SOLUTIONS – NETWORKING-BUILDING COMMUNITIES",
    description:
      "Réseaux, WiFi Campus & Call Center international. Networking-Building Communities.",
    url: siteUrl,
    siteName: "ETT GLOBAL SOLUTIONS",
    images: [{ url: "/og-ett.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETT GLOBAL SOLUTIONS",
    description: "NETWORKING-BUILDING COMMUNITIES",
    images: ["/og-ett.svg"],
  },
  icons: { icon: "/logo_header.png" },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const store = await cookies();
  const lang = (store.get("ett_lang")?.value as Lang) || "fr";

  return (
    <html lang={lang} className={`dark ${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ett-theme");var d=t==="light"?"light":t==="dark"?"dark":window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";document.documentElement.className=document.documentElement.className.replace(/\\b(dark|light)\\b/g,"")+" "+d}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen font-inter antialiased">
        <ThemeProvider>
          <LangProvider initialLang={lang}>
            <ToastProvider>
              <a href="#main" className="skip-link">
                Aller au contenu / Skip to content
              </a>
              <Tracker />
              {children}
              <StickyWhatsApp />
            </ToastProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

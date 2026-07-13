"use client";

import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { Card } from "@/components/ui/primitives";

const routes = [
  { path: "/", label: "Accueil" },
  { path: "/wifi-campus", label: "WIFI CAMPUS" },
  { path: "/call-center", label: "ETT CALL CENTER" },
  { path: "/about", label: "À propos" },
  { path: "/contact", label: "Contact" },
  { path: "/devis", label: "Devis" },
  { path: "/merci", label: "Page Merci" },
  { path: "/actus", label: "Actus" },
  { path: "/recrutement", label: "Recrutement" },
  { path: "/mentions-legales", label: "Mentions légales" },
  { path: "/politique-confidentialite", label: "Confidentialité" },
  { path: "/admin", label: "Admin Dashboard" },
  { path: "/admin/login", label: "Admin Login" },
];

export default function DebugRoutes() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Card>
          <h1 className="font-mont text-xl font-extrabold text-white mb-6">
            Navigation Rapide (Debug)
          </h1>
          <ul className="grid gap-3">
            {routes.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-semibold text-ett-orange hover:bg-white/[0.06]"
                >
                  {r.label} <span className="text-slate-500 text-sm">({r.path})</span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </SiteShell>
  );
}

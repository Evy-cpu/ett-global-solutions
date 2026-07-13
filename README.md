# ETT GLOBAL SOLUTIONS — Site vitrine + WIFI CAMPUS + ETT CALL CENTER

**NETWORKING-BUILDING COMMUNITIES**

Site corporate dark premium avec :

- 🏠 Accueil ETT GLOBAL SOLUTIONS (hero carrousel 4 images, 3 pôles)
- 📶 Mini-site **WIFI CAMPUS** — *YOUR GROWTH, OUR BUSINESS*
- 🎧 Mini-site **ETT CALL CENTER** — *YOUR OBJECTIVE, OUR PRIORITY* (brief express)
- 🌐 FR par défaut + toggle EN (cookie `ett_lang` 30 jours, `?lang=fr|en`)
- 📝 Formulaires devis / contact / brief call center → base de données
- 📡 Tracking visiteurs live (hit au mount + ping 30 s)
- 🔐 Dashboard admin temps réel (`/admin`, mot de passe `ett2026`)

## Stack

- Next.js (App Router) + TypeScript strict
- Tailwind CSS 4 + framer-motion
- Drizzle ORM + PostgreSQL
- react-hook-form + zod

## Démarrage local

```bash
npm install
# créer .env à partir de .env.example puis :
npx drizzle-kit push       # applique le schéma (tables visits + leads)
npm run dev                # http://localhost:3000
```

## Admin

- URL : http://localhost:3000/admin
- Login : mot de passe `ett2026` (variable `ADMIN_PASS`)
- KPI : visiteurs live 5 min, visites 24 h, leads total, leads 7 j
- Tableau visiteurs (IP, page, dernière vue, hits) + liste 50 derniers leads
- Bouton « Marquer traité » (PATCH `/api/lead/:id`) — auto-refresh 30 s

## Build production

```bash
npm run build
npm start
```

## Déploiement Vercel

1. Push le repo sur GitHub → « Import Project » sur Vercel.
2. Ajouter une base Postgres (Vercel Postgres / Neon) et renseigner `DATABASE_URL`.
3. Variables d'env : `DATABASE_URL`, `ADMIN_PASS=ett2026`, `NEXT_PUBLIC_SITE_URL`.
4. `npx drizzle-kit push` (une fois, contre la base de prod) puis Deploy.

## Déploiement Hostinger (Node.js)

Option A — Vercel + domaine pointé chez Hostinger (recommandé).

Option B — Hébergement Node.js Hostinger :

```bash
# sur le serveur
npm ci --production
npx drizzle-kit push
npm run build
npm start
```

`.env` sur le serveur :

```
DATABASE_URL=postgresql://user:pass@host:5432/ettdb
ADMIN_PASS=ett2026
NEXT_PUBLIC_SITE_URL=https://www.ettglobal.com
```

## À personnaliser

- WhatsApp : remplacer `https://wa.me/0000000000` (Header CTA / Footer / Contact)
- Email : `contact@ettglobal.com`
- Coordonnées placeholders : `[Adresse complète], [Ville], [Pays]`, `Tél : +___ __ __ __ __`, `RCCM : [N°] • NIF : [N°]`
- Logo : `public/logo.png` + `public/logo.svg`
- Images hero : `public/hero/*.jpg`, OG : `public/og-ett.jpg`

---

© 2026 ETT GLOBAL SOLUTIONS — **YOUR GLOBAL TECHNOLOGY PARTNER**

*La Direction – ETT GLOBAL SOLUTIONS*

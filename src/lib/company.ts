// Source unique de vérité — coordonnées réelles ETT GLOBAL SOLUTIONS (Cameroun)
export const COMPANY = {
  name: "ETT GLOBAL SOLUTIONS",
  legalForm: "SARL au capital de 10.000.000 FCFA",
  addressHQ: "Immeuble ETT, Rue 1.847 Bastos, BP 12 547 Yaoundé – Centre – Cameroun",
  addressDouala: "Antenne Douala – Quartier Akwa, Douala – Littoral – Cameroun",
  phonePrimary: "+237 6 22 14 56 78",
  phoneWhatsapp: "+237 6 76 07 65 75",
  whatsappLink: "https://wa.me/237676076575",
  email: "contact@ettglobal.com",
  emailRecrutement: "recrutement@ettglobal.com",
  web: "www.ettglobal.com",
  rccm: "RC/YAE/2024/B/1847",
  nif: "M082416785432Q",
  art: "ART/DG/2024-112",
  capital: "10.000.000 FCFA",
  directrice: "Marie-Claire Ngo Bika",
  hebergeur: "Hostinger — 61 Lordou Vironos Street, 6023 Larnaca, Chypre",
  gps: {
    yaounde: { lat: 3.848, lng: 11.5021 },
    douala: { lat: 4.0483, lng: 9.7043 },
  },
  timezone: "GMT+1",
  updated: "3 juillet 2026",
} as const;

export const TEAM = [
  {
    name: "Marie-Claire Ngo Bika",
    role: "Directrice Générale",
    roleEn: "Chief Executive Officer",
    bio: "15 ans dans les télécoms, basée à Yaoundé.",
    bioEn: "15 years in telecoms, based in Yaoundé.",
    city: "Yaoundé",
    photo:
      "https://images.pexels.com/photos/5955104/pexels-photo-5955104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640",
  },
  {
    name: "Alain Tchoumi",
    role: "CTO Networks",
    roleEn: "CTO Networks",
    bio: "CCNA/CCNP, ex-CAMTEL, spécialiste infrastructures.",
    bioEn: "CCNA/CCNP, ex-CAMTEL, infrastructure specialist.",
    city: "Yaoundé",
    photo:
      "https://images.pexels.com/photos/31647492/pexels-photo-31647492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640",
  },
  {
    name: "Fatima Abdoul",
    role: "Head of Call Center",
    roleEn: "Head of Call Center",
    bio: "FR/EN/AR, pilote une équipe de 180 agents.",
    bioEn: "FR/EN/AR, leads a team of 180 agents.",
    city: "Douala",
    photo:
      "https://images.pexels.com/photos/8154425/pexels-photo-8154425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640",
  },
  {
    name: "Serge Mbarga",
    role: "WiFi Campus Lead",
    roleEn: "WiFi Campus Lead",
    bio: "Certifié Ubiquiti / Mikrotik, terrain avant tout.",
    bioEn: "Ubiquiti / Mikrotik certified, field-first mindset.",
    city: "Douala",
    photo:
      "https://images.pexels.com/photos/28426641/pexels-photo-28426641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640",
  },
] as const;

export const CLIENTS = [
  "Hôtel La Falaise — Bonanjo, Douala",
  "Université Yaoundé I — Ngoa-Ekellé",
  "Clinique La Cathédrale — Yaoundé",
  "UBA Cameroon",
  "Tradex",
  "Canal+ Afrique",
  "Santa Lucia — Akwa",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "L'équipe ETT a installé notre WiFi campus en 3 jours, propre, sans coupure.",
    quoteEn:
      "The ETT team installed our campus WiFi in 3 days, clean, no downtime.",
    author: "Dr. Ndongo",
    context: "UY1, Yaoundé",
    date: "12 juin 2026",
  },
  {
    quote:
      "Nos clients Canal+ au +237 6xx… décrochés en moins de 4 secondes, même à 2h du matin.",
    quoteEn:
      "Our Canal+ customers on +237 6xx… picked up in under 4 seconds, even at 2am.",
    author: "Aïssatou",
    context: "Superviseure, Douala",
    date: "20 juin 2026",
  },
  {
    quote: "Enfin un partenaire qui répond sur WhatsApp le dimanche.",
    quoteEn: "Finally a partner who replies on WhatsApp on Sundays.",
    author: "P. Kamdem",
    context: "Santa Lucia Akwa",
    date: "25 juin 2026",
  },
] as const;

export const NEWS_POSTS = [
  {
    slug: "chu-yaounde-wifi",
    date: "15 juin 2026",
    title: "ETT déploie le WiFi au CHU de Yaoundé",
    titleEn: "ETT rolls out WiFi at Yaoundé University Hospital",
    excerpt:
      "Portail captif, couverture des blocs et supervision 24/7 pour le personnel et les familles.",
    excerptEn:
      "Captive portal, ward coverage and 24/7 monitoring for staff and families.",
  },
  {
    slug: "42-teleconseillers-douala",
    date: "02 juin 2026",
    title: "42 nouveaux téléconseillers formés à Douala",
    titleEn: "42 new call agents trained in Douala",
    excerpt:
      "Une nouvelle promotion rejoint le site Akwa pour renforcer le pôle Call Center.",
    excerptEn: "A new class joins the Akwa site to strengthen our Call Center hub.",
  },
  {
    slug: "partenariat-ubiquiti",
    date: "18 mai 2026",
    title: "Partenariat Ubiquiti Afrique Centrale",
    titleEn: "Ubiquiti Central Africa partnership",
    excerpt:
      "ETT devient intégrateur privilégié Ubiquiti pour accélérer les déploiements WIFI CAMPUS.",
    excerptEn: "ETT becomes a preferred Ubiquiti integrator to speed up WIFI CAMPUS rollouts.",
  },
] as const;

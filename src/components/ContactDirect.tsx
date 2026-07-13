"use client";

import { COMPANY } from "@/lib/company";
import { useLang } from "@/lib/i18n";

export function ContactDirect() {
  const { t } = useLang();
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <a
        href={`tel:${COMPANY.phonePrimary.replace(/\s/g, "")}`}
        className="rounded-full border border-white/15 px-4 py-2 font-semibold hover:bg-white/5"
      >
        {COMPANY.phonePrimary}
      </a>
      <a
        href={COMPANY.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#25D366] px-4 py-2 font-bold text-white"
      >
        WhatsApp {COMPANY.phoneWhatsapp}
      </a>
      <span className="text-xs text-slate-500">
        {t("Siège Yaoundé • Antenne Douala", "HQ Yaoundé • Douala branch")}
      </span>
    </div>
  );
}

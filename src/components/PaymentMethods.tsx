"use client";

import { useLang } from "@/lib/i18n";

export function PaymentMethods() {
  const { t } = useLang();
  return (
    <div className="text-xs text-slate-400">
      <span className="font-semibold text-slate-300">{t("Paiements acceptés", "Accepted payments")} :</span>{" "}
      Orange Money • MTN MoMo • Virement bancaire • Chèque
    </div>
  );
}

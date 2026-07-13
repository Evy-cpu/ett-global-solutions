"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { useToast } from "@/components/ui/toast";
import { Button, Input, Label, Select, Textarea } from "@/components/ui/primitives";

const schema = z.object({
  company: z.string().min(2),
  country: z.string().optional(),
  volume: z.string().min(1),
  langues: z.string().min(1),
  objective: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  _gotcha: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function CallCenterBriefForm() {
  const { t } = useLang();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "call-center",
          company: values.company,
          email: values.email,
          phone: values.phone,
          service: "ETT CALL CENTER",
          message: values.objective,
          meta: {
            country: values.country,
            volume: values.volume,
            langues: values.langues,
          },
          _gotcha: values._gotcha,
        }),
      });
      if (!res.ok) throw new Error("fail");
      toast({
        variant: "success",
        title: t("Demande envoyée !", "Request sent!"),
        description: "YOUR OBJECTIVE, OUR PRIORITY",
      });
      router.push("/merci");
    } catch {
      toast({
        variant: "error",
        title: t("Erreur", "Error"),
        description: t("Réessayez.", "Try again."),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("_gotcha")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">{t("Entreprise", "Company")} *</Label>
          <Input id="company" {...register("company")} />
          {errors.company && (
            <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
          )}
        </div>
        <div>
          <Label htmlFor="country">{t("Pays cible", "Target country")}</Label>
          <Input id="country" {...register("country")} placeholder="France, Canada, UK…" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="volume">{t("Volume appels / jour", "Calls / day")} *</Label>
          <Select id="volume" {...register("volume")}>
            <option value="">{t("Choisir…", "Choose…")}</option>
            <option value="50-200">50-200</option>
            <option value="200-1000">200-1000</option>
            <option value="1000+">1000+</option>
          </Select>
          {errors.volume && (
            <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
          )}
        </div>
        <div>
          <Label htmlFor="langues">{t("Langues", "Languages")} *</Label>
          <Select id="langues" {...register("langues")}>
            <option value="">{t("Choisir…", "Choose…")}</option>
            <option value="FR">FR</option>
            <option value="EN">EN</option>
            <option value="FR+EN">FR+EN</option>
            <option value="Autre">{t("Autre", "Other")}</option>
          </Select>
          {errors.langues && (
            <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="objective">{t("Objectif principal", "Main objective")} *</Label>
        <Textarea
          id="objective"
          rows={3}
          {...register("objective")}
          placeholder={t(
            "Support client 24/7, télémarketing B2B…",
            "24/7 customer support, B2B telemarketing…",
          )}
        />
        {errors.objective && (
          <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="cc-email">Email *</Label>
          <Input id="cc-email" type="email" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">
              {t("Email invalide", "Invalid email")}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="cc-phone">{t("WhatsApp / Tél", "WhatsApp / Phone")}</Label>
          <Input id="cc-phone" {...register("phone")} />
        </div>
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full">
        {loading
          ? t("Envoi…", "Sending…")
          : t(
              "Envoyer ma demande → un admin vous suit en live",
              "Send → a manager follows you live",
            )}
      </Button>
      <p className="text-center text-xs text-slate-500">
        <span className="text-ett-orange">YOUR OBJECTIVE, OUR PRIORITY</span> –{" "}
        {t("réponse < 24h", "reply < 24h")}
      </p>
    </form>
  );
}

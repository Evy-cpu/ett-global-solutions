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
  name: z.string().min(2, "requis"),
  company: z.string().min(2, "requis"),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  pays: z.string().optional(),
  message: z.string().optional(),
  rgpd: z.literal(true),
  _gotcha: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const SERVICE_MAP: Record<string, string> = {
  wifi: "WIFI CAMPUS",
  call: "ETT CALL CENTER",
};

export function LeadForm({ preset }: { preset?: string }) {
  const { t } = useLang();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: preset ? SERVICE_MAP[preset] ?? "" : "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "devis",
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          service: values.service,
          message: values.message,
          meta: { pays: values.pays, rgpd: true },
          _gotcha: values._gotcha,
        }),
      });
      if (!res.ok) throw new Error("fail");
      toast({
        variant: "success",
        title: t("Demande envoyée !", "Request sent!"),
        description: t(
          "Un ingénieur ETT vous répond sous 24h.",
          "An ETT engineer replies within 24h.",
        ),
      });
      router.push("/merci");
    } catch {
      toast({
        variant: "error",
        title: t("Erreur", "Error"),
        description: t("Réessayez dans un instant.", "Please try again."),
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
          <Label htmlFor="name">{t("Nom complet", "Full name")} *</Label>
          <Input id="name" {...register("name")} placeholder="Jean Dupont" />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
          )}
        </div>
        <div>
          <Label htmlFor="company">{t("Entreprise", "Company")} *</Label>
          <Input id="company" {...register("company")} placeholder="Acme Corp" />
          {errors.company && (
            <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="contact@entreprise.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">
              {t("Email invalide", "Invalid email")}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">{t("Téléphone / WhatsApp", "Phone / WhatsApp")}</Label>
          <Input id="phone" {...register("phone")} placeholder="+237 6__ __ __ __" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="service">Service</Label>
          <Select id="service" {...register("service")}>
            <option value="">{t("Choisir…", "Choose…")}</option>
            <option value="WIFI CAMPUS">WIFI CAMPUS</option>
            <option value="ETT CALL CENTER">ETT CALL CENTER</option>
            <option value="Global Solutions – Réseaux">
              Global Solutions – {t("Réseaux", "Networks")}
            </option>
            <option value="Autre">{t("Autre", "Other")}</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="pays">{t("Pays", "Country")}</Label>
          <Input id="pays" {...register("pays")} placeholder="Cameroun, France…" />
        </div>
      </div>

      <div>
        <Label htmlFor="message">{t("Décrivez votre besoin", "Describe your need")}</Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          placeholder={t(
            "Volumes, sites, langues, délais…",
            "Volumes, sites, languages, timelines…",
          )}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-300">
        <input
          type="checkbox"
          {...register("rgpd")}
          className="mt-1 h-4 w-4 accent-ett-orange"
        />
        <span>
          {t(
            "J'accepte d'être recontacté par ETT GLOBAL SOLUTIONS",
            "I agree to be contacted by ETT GLOBAL SOLUTIONS",
          )}{" "}
          *
        </span>
      </label>
      {errors.rgpd && (
        <p className="text-xs text-red-400">
          {t("Consentement requis", "Consent required")}
        </p>
      )}

      <Button type="submit" size="lg" disabled={loading} className="w-full">
        {loading ? t("Envoi…", "Sending…") : t("Envoyer la demande →", "Send request →")}
      </Button>
      <p className="text-center text-xs text-slate-500">
        {t(
          "Un administrateur suit votre visite en temps réel",
          "An administrator follows your visit in real time",
        )}{" "}
        • <span className="text-ett-orange">YOUR OBJECTIVE, OUR PRIORITY</span>
      </p>
    </form>
  );
}

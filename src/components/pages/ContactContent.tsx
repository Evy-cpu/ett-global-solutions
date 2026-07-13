"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { COMPANY } from "@/lib/company";
import { SiteShell } from "@/components/SiteShell";
import { useToast } from "@/components/ui/toast";
import { Badge, Button, Card, Input, Label, Select, Textarea } from "@/components/ui/primitives";
import { Reveal } from "@/components/Reveal";
import { LeafletMap } from "@/components/LeafletMap";
import { Agrements } from "@/components/Agrements";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  sujet: z.string().min(1),
  message: z.string().min(3),
  _gotcha: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

export function ContactContent() {
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
          source: "contact",
          name: values.name,
          email: values.email,
          service: values.sujet,
          message: values.message,
          _gotcha: values._gotcha,
        }),
      });
      if (!res.ok) throw new Error();
      toast({
        variant: "success",
        title: t("Message envoyé !", "Message sent!"),
        description: t("Nous revenons vers vous vite.", "We'll get back to you soon."),
      });
      router.push("/merci");
    } catch {
      toast({ variant: "error", title: t("Erreur", "Error") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <Badge>CONTACT</Badge>
          <h1 className="mt-4 font-mont text-4xl font-extrabold text-white">
            {t("Parlons de votre projet", "Let's talk about your project")}
          </h1>
          <p className="mt-2 text-slate-400">
            {t(
              "Chez nous à Yaoundé, on répond vite — même le week-end.",
              "Here in Yaoundé, we reply fast — even on weekends.",
            )}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <Reveal>
            <Card>
              <p className="font-mont text-lg font-extrabold text-white">
                ETT GLOBAL SOLUTIONS
              </p>
              <p className="mt-1 font-mont text-[11px] font-bold tracking-widest text-ett-orange">
                NETWORKING-BUILDING COMMUNITIES
              </p>
              <div className="mt-5 space-y-2 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-slate-200">
                    {t("Siège", "HQ")} :
                  </span>{" "}
                  {COMPANY.addressHQ}
                </p>
                <p>
                  <span className="font-semibold text-slate-200">
                    {t("Antenne", "Branch")} :
                  </span>{" "}
                  {COMPANY.addressDouala}
                </p>
                <p>Tél : {COMPANY.phonePrimary}</p>
                <p>
                  WhatsApp Business :{" "}
                  <a href={COMPANY.whatsappLink} className="text-ett-orange">
                    {COMPANY.phoneWhatsapp}
                  </a>
                </p>
                <p>
                  Email :{" "}
                  <a href={`mailto:${COMPANY.email}`} className="text-ett-orange">
                    {COMPANY.email}
                  </a>
                </p>
                <p>Web : {COMPANY.web}</p>
                <p className="pt-1 text-xs text-slate-500">
                  RCCM : {COMPANY.rccm} • NIF : {COMPANY.nif} • ART : {COMPANY.art}
                </p>
              </div>
              <div className="mt-6 rounded-xl border border-ett-orange/25 bg-ett-orange/10 p-4">
                <p className="font-mont text-sm font-bold text-white">
                  {t("Horaires Call Center", "Call Center hours")}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  24/7 – {t("équipe Yaoundé + night shift Douala", "Yaoundé team + Douala night shift")} ({COMPANY.timezone})
                </p>
              </div>
              <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-block">
                <Button variant="glass">
                  {t("Discuter sur WhatsApp", "Chat on WhatsApp")}
                </Button>
              </a>
            </Card>
          </Reveal>

          {/* Right form */}
          <Reveal delay={0.15}>
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  {...register("_gotcha")}
                />
                <div>
                  <Label htmlFor="c-name">{t("Nom", "Name")} *</Label>
                  <Input id="c-name" {...register("name")} />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="c-email">Email *</Label>
                  <Input id="c-email" type="email" {...register("email")} />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {t("Email invalide", "Invalid email")}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="c-sujet">{t("Sujet", "Subject")} *</Label>
                  <Select id="c-sujet" {...register("sujet")}>
                    <option value="">{t("Choisir…", "Choose…")}</option>
                    <option value="Global Solutions">Global Solutions</option>
                    <option value="WIFI CAMPUS">WIFI CAMPUS</option>
                    <option value="Call Center">Call Center</option>
                  </Select>
                  {errors.sujet && (
                    <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="c-message">Message *</Label>
                  <Textarea id="c-message" rows={5} {...register("message")} />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
                  )}
                </div>
                <Button type="submit" size="lg" disabled={loading} className="w-full">
                  {loading ? t("Envoi…", "Sending…") : t("Envoyer →", "Send →")}
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.1}>
          <div className="mt-10">
            <h2 className="font-mont text-lg font-extrabold text-white">
              {t("Venir à Bastos", "Getting to Bastos")}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t(
                "Siège Yaoundé + antenne Akwa, Douala — cliquez sur un marqueur pour les détails.",
                "Yaoundé HQ + Akwa branch, Douala — click a marker for details.",
              )}
            </p>
            <div className="mt-4">
              <LeafletMap />
            </div>
            <a
              href={`https://www.openstreetmap.org/directions?to=${COMPANY.gps.yaounde.lat}%2C${COMPANY.gps.yaounde.lng}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ett-orange hover:underline"
            >
              {t("Itinéraire vers Bastos →", "Directions to Bastos →")}
            </a>
          </div>
        </Reveal>

        <div className="mt-8">
          <Agrements />
        </div>
      </section>
    </SiteShell>
  );
}

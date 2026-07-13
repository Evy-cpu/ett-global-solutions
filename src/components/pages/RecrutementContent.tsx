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

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  poste: z.string().min(1),
  ville: z.string().min(1),
  langues: z.array(z.string()).optional(),
  message: z.string().optional(),
  _gotcha: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

const LANGUES = ["FR", "EN", "Fulfulde", "Ewondo"];

export function RecrutementContent() {
  const { t } = useLang();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const toggleLang = (l: string) => {
    setSelectedLangs((prev) =>
      prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l],
    );
  };

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "recrutement",
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.poste,
          message: values.message,
          meta: { ville: values.ville, langues: selectedLangs, cv: fileName },
          _gotcha: values._gotcha,
        }),
      });
      if (!res.ok) throw new Error();
      toast({
        variant: "success",
        title: t("Candidature envoyée !", "Application sent!"),
        description: t(
          "On revient vers vous rapidement.",
          "We'll get back to you shortly.",
        ),
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
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <Badge>{t("RECRUTEMENT", "CAREERS")}</Badge>
          <h1 className="mt-4 font-mont text-4xl font-extrabold text-white">
            {t("Rejoignez l'équipe ETT", "Join the ETT team")}
          </h1>
          <p className="mt-2 text-slate-400">
            {t(
              "Yaoundé, Douala ou télétravail — on recrute des talents motivés, pas des CV parfaits.",
              "Yaoundé, Douala or remote — we hire motivated talent, not perfect résumés.",
            )}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="mt-8">
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
                  <Label htmlFor="r-name">{t("Nom complet", "Full name")} *</Label>
                  <Input id="r-name" {...register("name")} />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="r-email">Email *</Label>
                  <Input id="r-email" type="email" {...register("email")} />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {t("Email invalide", "Invalid email")}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="r-phone">{t("Téléphone", "Phone")}</Label>
                  <Input id="r-phone" {...register("phone")} placeholder="+237 6__ __ __ __" />
                </div>
                <div>
                  <Label htmlFor="r-ville">{t("Ville", "City")} *</Label>
                  <Select id="r-ville" {...register("ville")}>
                    <option value="">{t("Choisir…", "Choose…")}</option>
                    <option value="Yaoundé">Yaoundé</option>
                    <option value="Douala">Douala</option>
                    <option value="Télétravail">{t("Télétravail", "Remote")}</option>
                  </Select>
                  {errors.ville && (
                    <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="r-poste">{t("Poste souhaité", "Desired position")} *</Label>
                <Select id="r-poste" {...register("poste")}>
                  <option value="">{t("Choisir…", "Choose…")}</option>
                  <option value="Téléconseiller">{t("Téléconseiller", "Call agent")}</option>
                  <option value="Technicien réseau">
                    {t("Technicien réseau", "Network technician")}
                  </option>
                  <option value="Commercial">{t("Commercial", "Sales")}</option>
                  <option value="Autre">{t("Autre", "Other")}</option>
                </Select>
                {errors.poste && (
                  <p className="mt-1 text-xs text-red-400">{t("Requis", "Required")}</p>
                )}
              </div>

              <div>
                <Label>{t("Langues parlées", "Languages spoken")}</Label>
                <div className="flex flex-wrap gap-2">
                  {LANGUES.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => toggleLang(l)}
                      className={
                        "rounded-full border px-4 py-1.5 text-sm font-semibold transition " +
                        (selectedLangs.includes(l)
                          ? "border-ett-orange bg-ett-orange/15 text-ett-orange"
                          : "border-white/15 text-slate-400 hover:text-white")
                      }
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="r-cv">{t("Votre CV (PDF)", "Your résumé (PDF)")}</Label>
                <input
                  id="r-cv"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  className="block w-full rounded-xl border border-white/[0.12] bg-white/[0.045] px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-ett-orange file:px-4 file:py-2 file:text-xs file:font-bold file:text-white"
                />
                {fileName && (
                  <p className="mt-1 text-xs text-emerald-400">✓ {fileName}</p>
                )}
                <p className="mt-1 text-xs text-slate-500">
                  {t(
                    "Vous pouvez aussi l'envoyer directement à",
                    "You can also send it directly to",
                  )}{" "}
                  <a href={`mailto:${COMPANY.emailRecrutement}`} className="text-ett-orange">
                    {COMPANY.emailRecrutement}
                  </a>
                </p>
              </div>

              <div>
                <Label htmlFor="r-message">
                  {t("Message (optionnel)", "Message (optional)")}
                </Label>
                <Textarea id="r-message" rows={4} {...register("message")} />
              </div>

              <Button type="submit" size="lg" disabled={loading} className="w-full">
                {loading
                  ? t("Envoi…", "Sending…")
                  : t("Envoyer ma candidature →", "Send my application →")}
              </Button>
            </form>
          </Card>
        </Reveal>
      </section>
    </SiteShell>
  );
}

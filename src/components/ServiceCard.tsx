"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/primitives";
import { StaggerItem } from "@/components/Reveal";

export function ServiceCard({
  icon,
  title,
  slogan,
  description,
  href,
  cta,
  image,
  imageAlt,
}: {
  icon: string;
  title: string;
  slogan?: string;
  description: string;
  href?: string;
  cta?: string;
  image?: string;
  imageAlt?: string;
}) {
  const body = (
    <Card className={"h-full " + (image ? "overflow-hidden p-0" : "")}>
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
          <div className="ett-img-overlay absolute inset-0 bg-linear-to-t from-ett-dark via-ett-dark/35 to-ett-dark/10" />
          <div className="absolute inset-0 bg-ett-navy/20 mix-blend-multiply" />
          <div className="ett-img-overlay-icon absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-ett-dark/70 text-xl backdrop-blur">
            {icon}
          </div>
        </div>
      )}
      <div className={image ? "p-6" : ""}>
        {!image && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ett-orange/12 text-2xl">
            {icon}
          </div>
        )}
        <h3 className="font-mont text-lg font-extrabold text-white">{title}</h3>
        {slogan && (
          <p className="mt-1 font-mont text-[11px] font-bold tracking-widest text-ett-orange">
            {slogan}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
        {href && cta && (
          <span className="mt-4 inline-flex items-center gap-1 font-mont text-[13px] font-bold text-ett-orange">
            {cta} <span aria-hidden>→</span>
          </span>
        )}
      </div>
    </Card>
  );

  return (
    <StaggerItem className="h-full">
      {href ? (
        <Link href={href} className="block h-full">
          {body}
        </Link>
      ) : (
        body
      )}
    </StaggerItem>
  );
}

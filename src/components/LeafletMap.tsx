"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { COMPANY } from "@/lib/company";

export function LeafletMap() {
  const ref = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !ref.current) return;
    initialized.current = true;

    let map: import("leaflet").Map | undefined;

    import("leaflet").then((L) => {
      // Fix default marker icons (webpack/next asset paths).
      const icon = L.icon({
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      if (!ref.current) return;
      map = L.map(ref.current, {
        scrollWheelZoom: false,
      }).setView([COMPANY.gps.yaounde.lat, COMPANY.gps.yaounde.lng], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      L.marker([COMPANY.gps.yaounde.lat, COMPANY.gps.yaounde.lng], { icon })
        .addTo(map)
        .bindPopup("<strong>ETT GLOBAL SOLUTIONS</strong><br/>Siège — Bastos, Yaoundé");

      L.marker([COMPANY.gps.douala.lat, COMPANY.gps.douala.lng], { icon })
        .addTo(map)
        .bindPopup("<strong>ETT GLOBAL SOLUTIONS</strong><br/>Antenne — Akwa, Douala");
    });

    return () => {
      map?.remove();
      initialized.current = false;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="h-[340px] w-full rounded-2xl border border-white/10"
      role="img"
      aria-label="Carte : ETT Global Solutions à Bastos, Yaoundé et Akwa, Douala"
    />
  );
}

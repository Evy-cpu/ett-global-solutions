"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Don't track admin views.
    if (pathname.startsWith("/admin")) return;

    const send = () => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page: pathname,
          referrer: document.referrer || null,
        }),
        keepalive: true,
      }).catch(() => {});
    };

    send();
    const interval = setInterval(send, 30_000);
    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}

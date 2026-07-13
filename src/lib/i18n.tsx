"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (fr: string, en: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function readCookieLang(): Lang {
  if (typeof document === "undefined") return "fr";
  const match = document.cookie.match(/(?:^|;\s*)ett_lang=(fr|en)/);
  return (match?.[1] as Lang) ?? "fr";
}

export function LangProvider({
  children,
  initialLang = "fr",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    setLangState(readCookieLang());
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    const maxAge = 60 * 60 * 24 * 30; // 30 days
    document.cookie = `ett_lang=${l}; path=/; max-age=${maxAge}; SameSite=Lax`;
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  }, []);

  const t = useCallback(
    (fr: string, en: string) => (lang === "en" ? en : fr),
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, setLang, t],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

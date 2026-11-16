"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/language";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
] as const;

const LanguageSwitcher = () => {
  const { locale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="no-print fixed bottom-5 right-5 z-[1000]">
      <div
          className={`${menuOpen ? "flex" : "hidden"} mb-2 min-w-36 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-1 shadow-xl`}
          role="group"
          aria-label={t("selectLanguage")}
        >
          {languages.map(({ code, label }) => (
            <Link
              key={code}
              href={code === "es" ? "/es/" : "/"}
              onClick={() => setMenuOpen(false)}
              aria-current={locale === code ? "page" : undefined}
              className={`relative overflow-hidden rounded-xl px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-softGray ${
                locale === code ? "text-primary" : "text-black"
              }`}
            >
              <span className="relative z-10">{label}</span>
              {locale === code && (
                <span className="relative z-10 float-right" aria-hidden="true">
                  ✓
                </span>
              )}
            </Link>
          ))}
      </div>
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-label={t("selectLanguage")}
        className="relative flex items-center gap-2 overflow-hidden rounded-full border border-primary bg-white px-4 py-3 text-sm font-semibold text-black shadow-lg transition-colors hover:text-white"
      >
        <span className="relative z-10" aria-hidden="true">
          🌐
        </span>
        <span className="relative z-10">{locale.toUpperCase()}</span>
        <span className="relative z-10" aria-hidden="true">
          ⌃
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;

// src/i18n/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { Locale, locales, rtlLocales } from "@/i18n";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split(".");
    let current: unknown = obj;
    for (const key of keys) {
        if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path; // Return key as fallback if translation not found
        }
    }
    return typeof current === "string" ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");

    // Load saved locale on mount
    useEffect(() => {
        const saved = localStorage.getItem("portfolio-locale") as Locale | null;
        if (saved && saved in locales) {
            setLocaleState(saved);
            applyLocaleToDOM(saved);
        }
    }, []);

    function applyLocaleToDOM(loc: Locale) {
        document.documentElement.lang = loc;
        document.documentElement.dir = rtlLocales.includes(loc) ? "rtl" : "ltr";
    }

    function setLocale(loc: Locale) {
        setLocaleState(loc);
        localStorage.setItem("portfolio-locale", loc);
        applyLocaleToDOM(loc);
    }

    const t = useCallback(
        (key: string): string => {
            return getNestedValue(locales[locale] as Record<string, unknown>, key);
        },
        [locale]
    );

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

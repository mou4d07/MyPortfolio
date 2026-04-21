// src/i18n/index.ts
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import ar from "./locales/ar.json";
import zh from "./locales/zh.json";

export type Locale = "en" | "fr" | "es" | "ar" | "zh";

export const locales: Record<Locale, Record<string, unknown>> = {
    en,
    fr,
    es,
    ar,
    zh,
};

export const localeNames: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    es: "Español",
    ar: "العربية",
    zh: "中文",
};

export const localeFlags: Record<Locale, string> = {
    en: "en",
    fr: "fr",
    es: "es",
    ar: "ar",
    zh: "zh",
};

export const rtlLocales: Locale[] = ["ar"];

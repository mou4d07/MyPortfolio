// src/components/sections/LanguageSection.tsx
"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";

const languageData = [
    { nameKey: "languages.arabic", levelKey: "languages.arabicLevel", pulse: "bg-blue-500" },
    { nameKey: "languages.french", levelKey: "languages.frenchLevel", pulse: "bg-emerald-500" },
    { nameKey: "languages.english", levelKey: "languages.englishLevel", pulse: "bg-blue-400" },
];

export function LanguageSection() {
    const { t } = useLanguage();

    return (
        <Section id="languages" className="container mx-auto px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                <span className="text-blue-400">{t("languages.title")}</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
                {languageData.map((lang, index) => (
                    <Card key={index} className="flex flex-col items-center text-center bg-card">
                        <div className={`mb-4 h-3 w-3 rounded-full ${lang.pulse} animate-pulse shadow-[0_0_10px_rgba(0,0,0,0.5)] shadow-current`} />
                        <h3 className="text-xl font-bold text-foreground">{t(lang.nameKey)}</h3>
                        <p className="text-sm font-medium text-muted mt-1">{t(lang.levelKey)}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

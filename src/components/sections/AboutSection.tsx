// src/components/sections/AboutSection.tsx
"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/i18n/LanguageContext";

function renderAccentedText(text: string) {
    // Replace <accent1>...</accent1> and <accent2>...</accent2> with styled spans
    const parts = text.split(/(<accent[12]>.*?<\/accent[12]>)/g);
    return parts.map((part, i) => {
        const accent1Match = part.match(/<accent1>(.*?)<\/accent1>/);
        if (accent1Match) {
            return <span key={i} className="text-blue-400 font-medium">{accent1Match[1]}</span>;
        }
        const accent2Match = part.match(/<accent2>(.*?)<\/accent2>/);
        if (accent2Match) {
            return <span key={i} className="text-emerald-400 font-medium">{accent2Match[1]}</span>;
        }
        return <span key={i}>{part}</span>;
    });
}

export function AboutSection() {
    const { t } = useLanguage();

    return (
        <Section id="about" className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {t("about.title")} <span className="text-blue-400">{t("about.titleAccent")}</span>
                </h2>

                <div className="space-y-6 text-lg text-muted text-justify">
                    <p className="leading-relaxed">
                        {renderAccentedText(t("about.p1"))}
                    </p>
                    <p className="leading-relaxed border-l-2 border-emerald-500 pl-4 bg-muted/5 p-4 rounded-r-lg">
                        {renderAccentedText(t("about.p2"))}
                    </p>
                    <p className="leading-relaxed">
                        {renderAccentedText(t("about.p3"))}
                    </p>
                </div>
            </div>
        </Section>
    );
}

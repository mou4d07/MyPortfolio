// src/components/sections/HobbiesSection.tsx
"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";
import { Waves, Sprout, Hexagon } from "lucide-react";

export function HobbiesSection() {
    const { t } = useLanguage();

    const hobbyIcons = {
        hobby1: <Waves className="h-8 w-8 text-blue-400" />,
        hobby2: <Sprout className="h-8 w-8 text-emerald-400" />,
        hobby3: <Hexagon className="h-8 w-8 text-yellow-500" />
    };

    const hobbyKeys = ["hobby1", "hobby2", "hobby3"];

    return (
        <Section id="hobbies" className="container mx-auto px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
                {t("hobbies.title")} <span className="text-blue-400">{t("hobbies.titleAccent")}</span>
            </h2>

            <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
                {hobbyKeys.map((key) => (
                    <Card key={key} className="flex flex-col items-center text-center p-8 bg-card hover:translate-y-[-4px] transition-all border-border/50 group">
                        <div className="mb-6 p-4 rounded-2xl bg-muted/5 group-hover:bg-muted/10 transition-colors">
                            {hobbyIcons[key as keyof typeof hobbyIcons]}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{t(`hobbies.items.${key}.name`)}</h3>
                        {t(`hobbies.items.${key}.description`) !== `hobbies.items.${key}.description` && (
                            <p className="text-sm text-muted">{t(`hobbies.items.${key}.description`)}</p>
                        )}
                    </Card>
                ))}
            </div>
        </Section>
    );
}

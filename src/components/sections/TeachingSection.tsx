// src/components/sections/TeachingSection.tsx
"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";

const teachingKeys = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9"];
const publicationKeys = ["pub1", "pub2"];

export function TeachingSection() {
    const { t } = useLanguage();

    return (
        <Section id="teaching" className="container mx-auto px-6">
            <div className="grid gap-16 lg:grid-cols-2">
                {/* Teaching Column */}
                <div>
                    <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        {t("teaching.title")} <span className="text-blue-400">{t("teaching.titleAccent")}</span>
                    </h2>
                    
                    <div className="space-y-6">
                        {teachingKeys.map((key) => (
                            <Card key={key} className="flex gap-4 p-4 bg-card/50 border-border/50 hover:border-blue-500/30 transition-all">
                                <div className="rounded-lg bg-blue-500/10 p-2 shrink-0 h-fit">
                                    <BookOpen className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-muted mb-1">
                                        <Calendar className="h-3 w-3" />
                                        {t(`teaching.items.${key}.period`)}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground leading-tight">{t(`teaching.items.${key}.title`)}</h3>
                                    <p className="text-sm text-muted mt-1">{t(`teaching.items.${key}.institution`)}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Publications Column */}
                <div className="space-y-12">
                     <div>
                        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            {t("teaching.publicationsTitle")} <span className="text-emerald-400">{t("teaching.publicationsAccent")}</span>
                        </h2>
                        
                        <div className="space-y-8">
                            {publicationKeys.map((key) => (
                                <motion.div 
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="p-6 bg-card border-emerald-500/10 hover:border-emerald-500/30 transition-all shadow-sm group">
                                        <div className="flex gap-4">
                                            <div className="rounded-lg bg-emerald-500/10 p-3 shrink-0 h-fit">
                                                <FileText className="h-6 w-6 text-emerald-400" />
                                            </div>
                                            <div className="space-y-3">
                                                <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                                                    {t(`teaching.publications.${key}.year`)}
                                                </span>
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                                                    {t(`teaching.publications.${key}.title`)}
                                                </h3>
                                                <p className="text-sm text-muted leading-relaxed italic">
                                                    {t(`teaching.publications.${key}.source`)}
                                                </p>
                                                <div className="pt-2">
                                                    <a 
                                                        href={t(`teaching.publications.${key}.doi`)} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:underline"
                                                    >
                                                        {t("nav.projects") === "Projets" ? "Voir la Publication" : "View Publication"} <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                     </div>
                </div>
            </div>
        </Section>
    );
}

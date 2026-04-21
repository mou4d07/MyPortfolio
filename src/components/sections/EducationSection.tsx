// src/components/sections/EducationSection.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";

const degreeKeys = ["phd", "masters", "bsc", "tsDiploma", "bac", "lanCert"];
const certKeys = ["cert1", "cert2", "cert3", "cert4", "cert5", "cert6", "cert7", "cert8"];

export function EducationSection() {
    const { t } = useLanguage();

    return (
        <Section id="education" className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Education Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                        <span className="text-blue-400">{t("education.title")}</span>
                    </h2>
                    <div className="space-y-4">
                        {degreeKeys.map((key, index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <Card className="flex gap-4 items-start bg-card hover:border-blue-500/30 transition-all">
                                    <div className="rounded-lg bg-blue-500/10 p-2 shrink-0">
                                        <GraduationCap className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-xs font-medium text-muted mb-1">
                                            <Calendar className="h-3 w-3" />
                                            {t(`education.degrees.${key}Period`)}
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground leading-tight">{t(`education.degrees.${key}`)}</h3>
                                        <p className="text-sm text-muted mt-1">{t(`education.degrees.${key}Institution`)}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                        <span className="text-emerald-400">{t("education.certificationsTitle")}</span>
                    </h2>
                    <div className="space-y-3">
                        {certKeys.map((key, index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                            >
                                <Card className="flex items-center gap-3 bg-card hover:border-emerald-500/30 transition-all">
                                    <Award className="h-5 w-5 text-emerald-400 shrink-0" />
                                    <span className="text-sm font-medium text-muted">{t(`education.certifications.${key}`)}</span>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

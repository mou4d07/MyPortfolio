// src/components/sections/EducationSection.tsx
"use client";

import { GraduationCap, Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";

const certifications = [
    "VMware vSphere (v6.7 & V8)",
    "Fortinet NSE 1 & 2",
    "Intel Data Center AI",
];

export function EducationSection() {
    const { t } = useLanguage();

    const education = [
        {
            degree: t("education.degrees.phd"),
            institution: t("education.degrees.phdInstitution"),
            icon: <GraduationCap className="h-6 w-6 text-blue-400" />,
        },
        {
            degree: t("education.degrees.masters"),
            institution: t("education.degrees.mastersInstitution"),
            icon: <GraduationCap className="h-6 w-6 text-blue-400" />,
        },
    ];

    return (
        <Section id="education" className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Education Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                        <span className="text-blue-400">{t("education.title")}</span>
                    </h2>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <Card key={index} className="flex gap-4 items-start bg-card">
                                <div className="rounded-lg bg-blue-500/10 p-2 shrink-0">
                                    {edu.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                                    <p className="text-muted">{edu.institution}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                        <span className="text-emerald-400">{t("education.certificationsTitle")}</span>
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {certifications.map((cert, index) => (
                            <Card key={index} className="flex items-center gap-3 bg-card">
                                <Award className="h-5 w-5 text-emerald-400 shrink-0" />
                                <span className="text-sm font-medium text-muted">{cert}</span>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

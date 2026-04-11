// src/components/sections/EducationSection.tsx
import { GraduationCap, Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const education = [
    {
        degree: "PhD Student in Computer Science (Deep Learning)",
        institution: "BADJI MOKHTAR University",
        icon: <GraduationCap className="h-6 w-6 text-blue-400" />,
    },
    {
        degree: "Master's Degree in Embedded Systems and Mobility",
        institution: "University Level", // Replace with your university name if different
        icon: <GraduationCap className="h-6 w-6 text-blue-400" />,
    },
];

const certifications = [
    "VMware vSphere (v6.7 & V8)",
    "Fortinet NSE 1 & 2",
    "Intel Data Center AI",
];

export function EducationSection() {
    return (
        <Section id="education" className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Education Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">
                        <span className="text-blue-400">Education</span>
                    </h2>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <Card key={index} className="flex gap-4 items-start">
                                <div className="rounded-lg bg-blue-500/10 p-2 shrink-0">
                                    {edu.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                                    <p className="text-slate-400">{edu.institution}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">
                        <span className="text-emerald-400">Certifications</span>
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {certifications.map((cert, index) => (
                            <Card key={index} className="flex items-center gap-3">
                                <Award className="h-5 w-5 text-emerald-400 shrink-0" />
                                <span className="text-sm font-medium text-slate-300">{cert}</span>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

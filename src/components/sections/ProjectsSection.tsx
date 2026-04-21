// src/components/sections/ProjectsSection.tsx
"use client";

import { ExternalLink, Folder } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";

const projects = [
    {
        titleKey: "projects.project1.title",
        descriptionKey: "projects.project1.description",
        tags: ["Next.js", "ASP.NET Core", "Azure DevOps"],
        link: "#",
        github: "https://github.com/mboudmagh",
    },
    {
        titleKey: "projects.project2.title",
        descriptionKey: "projects.project2.description",
        tags: ["Flutter", "ASP.NET API", "SQL Server", "Azure DevOps"],
        link: "https://www.alsolb-dz.com/",
        github: "https://github.com/mboudmagh",
    },
    {
        titleKey: "projects.project3.title",
        descriptionKey: "projects.project3.description",
        tags: ["TensorFlow", "Python", "OpenCV"],
        link: "#",
        github: "https://github.com/mboudmagh",
    },
];

export function ProjectsSection() {
    const { t } = useLanguage();

    return (
        <Section id="projects" className="container mx-auto px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t("projects.title")} <span className="text-blue-400">{t("projects.titleAccent")}</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full group bg-card">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="rounded-lg bg-blue-500/10 p-3 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                <Folder className="h-6 w-6" />
                            </div>
                            <div className="flex gap-4 text-muted">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors"
                                    aria-label="GitHub Repository"
                                >
                                    <SiGithub size={20} />
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                    aria-label="Live Project"
                                >
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors">
                            {t(project.titleKey)}
                        </h3>

                        <p className="mb-6 flex-grow text-sm leading-relaxed text-muted">
                            {t(project.descriptionKey)}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-muted/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-500/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

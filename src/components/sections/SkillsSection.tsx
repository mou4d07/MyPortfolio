// src/components/sections/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Server, Cpu, Shield } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";

const skillCategories = [
    {
        titleKey: "skills.categories.fullstack",
        icon: <Code2 className="h-8 w-8 text-blue-400" />,
        skills: ["C#", "ASP.NET Core (MVC & API)", "Next.js", "TypeScript", "Python", "Flutter", "SQL", "PHP"],
    },
    {
        titleKey: "skills.categories.devops",
        icon: <Terminal className="h-8 w-8 text-emerald-400" />,
        skills: ["Azure DevOps", "Git", "CI/CD Pipelines", "Docker", "Vagrant", "Nginx", "IIS"],
    },
    {
        titleKey: "skills.categories.infrastructure",
        icon: <Server className="h-8 w-8 text-blue-400" />,
        skills: ["VMware ESXi 7.0", "Proxmox VE", "HPE Simplivity", "Windows Server", "Active Directory", "Exchange", "SAP Basis", "Veeam", "StoreOnce", "SCCM", "Nagios", "WSUS", "WDS", "DFS"],
    },
    {
        titleKey: "skills.categories.networking",
        icon: <Shield className="h-8 w-8 text-emerald-400" />,
        skills: ["Cisco Switching", "Cisco Routing", "Fortinet NSE", "LAN/WAN", "Sophos", "DNS", "DHCP", "GPO"],
    },
    {
        titleKey: "skills.categories.ai",
        icon: <Cpu className="h-8 w-8 text-blue-400" />,
        skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Convolutional Neural Networks", "Recurrent Neural Networks", "Transformers"],
    },
];

// Parent container orchestrates the stagger timing
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

// Each card fades up individually
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
    },
};

export function SkillsSection() {
    const { t } = useLanguage();

    return (
        <Section id="skills" className="container mx-auto px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t("skills.title")} <span className="text-blue-400">{t("skills.titleAccent")}</span>
            </h2>

            <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Card className="flex flex-col gap-4 h-full bg-card">
                            <div className="mb-2">{category.icon}</div>
                            <h3 className="text-xl font-bold text-foreground">{t(category.titleKey)}</h3>
                            <ul className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-md bg-muted/10 px-2 py-1 text-xs font-medium text-muted border border-border/50"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}

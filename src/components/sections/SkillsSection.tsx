// src/components/sections/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Server, Cpu } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const skillCategories = [
    {
        title: "Full-Stack Development",
        icon: <Code2 className="h-8 w-8 text-blue-400" />,
        skills: ["ASP.NET Core (MVC & API)", "Next.js", "TypeScript", "Python", "Flutter", "SQL"],
    },
    {
        title: "DevOps & CI/CD",
        icon: <Terminal className="h-8 w-8 text-emerald-400" />,
        skills: ["Azure DevOps", "Git", "Docker", "Vagrant", "Nginx", "IIS"],
    },
    {
        title: "Infrastructure & Cloud",
        icon: <Server className="h-8 w-8 text-blue-400" />,
        skills: ["Proxmox VE", "VMware ESXi 7.0", "Windows Server", "Linux", "Active Directory", "Veeam"],
    },
    {
        title: "AI & Machine Learning",
        icon: <Cpu className="h-8 w-8 text-emerald-400" />,
        skills: ["TensorFlow", "Keras", "OpenCV", "Recurrent Neural Networks"],
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
    return (
        <Section id="skills" className="container mx-auto px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Technical <span className="text-blue-400">Skills</span>
            </h2>

            <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Card className="flex flex-col gap-4 h-full">
                            <div className="mb-2">{category.icon}</div>
                            <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            <ul className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-md bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-300 border border-slate-700/50"
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

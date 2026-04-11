// src/components/sections/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";

const experiences = [
    {
        title: "Head of Application Development Service",
        company: "Algerian Solb",
        period: "Mar 2023 – Present",
        description: [
            "Architected and deployed scalable full-stack web solutions (Next.js, ASP.NET Core).",
            "Managed Azure DevOps CI/CD pipelines for automated deployments to IIS and Nginx.",
            "Led engineering teams in end-to-end design and delivery of robust internal solutions.",
        ],
    },
    {
        title: "System Engineer",
        company: "Algerian Solb",
        period: "Feb 2018 – Mar 2023",
        description: [
            "Deployed and administered Windows Server/Linux on VMs and bare-metal servers.",
            "Optimized enterprise virtualization (VMware ESXi, vCenter).",
            "Administered Active Directory and enterprise backup solutions (Veeam).",
        ],
    },
    {
        title: "Micro-Enterprise Owner & IT Consultant",
        company: "Amayas Tech (Freelance)",
        period: "Freelance",
        description: [
            "Architected end-to-end infrastructure with Proxmox VE and complete domain deployments.",
            "Developed custom Web, Mobile, and Desktop applications for corporate clients.",
        ],
    },
];

export function ExperienceSection() {
    return (
        <Section id="experience" className="container mx-auto px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Professional <span className="text-blue-400">Experience</span>
            </h2>

            <div className="relative mx-auto max-w-4xl space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-emerald-500 md:before:mx-auto md:before:right-0 md:before:left-0">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -40 : 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: [0.25, 0.4, 0.25, 1] as const,
                        }}
                    >
                        {/* Timeline dot */}
                        <motion.div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-slate-950 bg-slate-900 text-blue-400 shadow-xl group-hover:scale-110 transition-transform duration-300 z-10 md:absolute md:left-1/2 md:-translate-x-1/2"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: index * 0.15 + 0.2,
                            }}
                        >
                            <Briefcase className="h-5 w-5" />
                        </motion.div>

                        {/* Content card */}
                        <div className="ml-8 w-[calc(100%-4rem)] rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm transition-all hover:border-slate-700 hover:bg-slate-900 md:ml-0 md:w-[45%]">
                            <div className="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-slate-400">
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-blue-400" />
                                    {exp.period}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="mb-4 font-medium text-blue-400">{exp.company}</p>
                            <ul className="space-y-2 text-sm text-slate-400">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500/60">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
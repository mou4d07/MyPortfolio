// src/components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
    return (
        <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
            {/* Subtle tech grid background */}
            <div className="hero-grid absolute inset-0 -z-10" />

            {/* Background glowing orb — now animated with slow drift */}
            <motion.div
                className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[120px]"
                animate={{
                    x: ["-50%", "-45%", "-55%", "-50%"],
                    y: ["-50%", "-55%", "-45%", "-50%"],
                    scale: [1, 1.08, 0.95, 1],
                }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ translateX: "-50%", translateY: "-50%" }}
            />

            {/* Secondary orb for depth — emerald colored */}
            <motion.div
                className="absolute top-1/3 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-600/10 blur-[100px]"
                animate={{
                    x: ["0%", "5%", "-5%", "0%"],
                    y: ["0%", "-8%", "5%", "0%"],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 16,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
                        Mounir{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Boudmagh
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <h2 className="mb-8 text-xl font-medium text-slate-300 md:text-2xl">
                        Full-Stack Developer <span className="text-blue-500">|</span> DevOps Engineer{" "}
                        <span className="text-blue-500">|</span> IT Systems Architect
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                    className="mx-auto mb-10 max-w-2xl text-lg text-slate-400"
                >
                    Bridging the gap between scalable software engineering and robust IT infrastructure.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button asAnchor href="#projects" variant="primary">
                        View Projects
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button asAnchor href="/cv.pdf" variant="secondary">
                        Download CV
                        <Download className="h-4 w-4" />
                    </Button>
                </motion.div>
            </div>

            {/* Scroll-down indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors">
                    <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="h-5 w-5 animate-bounce-slow" />
                </a>
            </motion.div>
        </section>
    );
}

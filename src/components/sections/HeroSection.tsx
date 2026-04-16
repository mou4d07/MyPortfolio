// src/components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
    return (
        <section id="hero" className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-80 dark:opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
            </div>

            <div className="hero-grid absolute inset-0 -z-10" />

            {/* Animated Background Orbs */}
            <motion.div
                className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[120px]"
                animate={{
                    x: ["-50%", "-45%", "-55%", "-50%"],
                    y: ["-50%", "-55%", "-45%", "-50%"],
                    scale: [1, 1.08, 0.95, 1],
                }}
                transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
                style={{ translateX: "-50%", translateY: "-50%" }}
            />

            <div className="container relative z-10 mx-auto px-6 max-w-6xl lg:pl-10">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* LEFT COLUMN: TEXT CONTENT */}
                    <div className="text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl">
                                Mounir{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    Boudmagh
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <h2 className="mb-8 text-xl font-medium text-muted md:text-2xl">
                                Full-Stack Developer <span className="text-blue-500">|</span> DevOps Engineer{" "}
                                <span className="text-blue-500">|</span> IT Systems Architect
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                            className="mb-10 max-w-2xl text-lg text-muted"
                        >
                            Bridging the gap between scalable software engineering and robust IT infrastructure.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <Button asAnchor href="#projects" variant="primary">
                                View Projects
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button asAnchor href="/cv.pdf" variant="secondary" download="Mounir_Boudmagh_CV.pdf">
                                Download CV
                                <Download className="h-4 w-4" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                        className="relative mx-auto max-w-[350px] lg:ml-auto lg:mr-0 order-1 lg:order-2"
                    >
                        {/* Glow effect behind image */}
                        <div className="absolute inset-x-0 -bottom-10 -z-10 h-1/2 bg-blue-500/20 blur-3xl opacity-50" />

                        <div className="relative">
                            <img
                                src="/me.png" // Place your photo at public/me.png
                                alt="Mounir Boudmagh"
                                className="h-auto w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 z-20"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-muted hover:text-blue-400 transition-colors">
                    <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="h-5 w-5 animate-bounce-slow" />
                </a>
            </motion.div>
        </section>
    );
}

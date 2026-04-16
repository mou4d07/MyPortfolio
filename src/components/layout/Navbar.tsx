// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track which section is currently in the viewport
    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: "-40% 0px -55% 0px", // Triggers when section is roughly centered
                }
            );
            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 py-4 backdrop-blur-md border-b border-border"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <a href="#hero" className="text-xl font-bold tracking-tighter text-foreground">
                    M<span className="text-blue-500">B</span>.
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-200"
                                )}
                            >
                                {/* Animated pill indicator */}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-lg bg-blue-500/10 border border-blue-500/20"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/10 text-slate-400 transition-all hover:bg-slate-100/20 hover:text-blue-400 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                            aria-label="Toggle theme"
                        >
                            {/* Sun Icon (Visible in Light Mode) */}
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: theme === "light" ? 1 : 0,
                                    rotate: theme === "light" ? 0 : -90,
                                    opacity: theme === "light" ? 1 : 0,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute"
                            >
                                <Sun className="h-5 w-5" />
                            </motion.div>
                            {/* Moon Icon (Visible in Dark Mode) */}
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: theme === "dark" ? 1 : 0,
                                    rotate: theme === "dark" ? 0 : 90,
                                    opacity: theme === "dark" ? 1 : 0,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute"
                            >
                                <Moon className="h-5 w-5" />
                            </motion.div>
                        </button>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="text-slate-400 md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full border-b border-slate-900 bg-slate-950/95 backdrop-blur-md px-6 py-8 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace("#", "");
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "rounded-lg px-4 py-3 text-lg font-medium transition-all",
                                            isActive
                                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                                : "text-slate-400 hover:text-blue-400 hover:bg-slate-900/50"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

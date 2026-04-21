// src/components/ui/LanguageSwitcher.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Locale, localeNames, localeFlags } from "@/i18n";

const localeList: Locale[] = ["en", "fr", "es", "ar", "zh"];

export function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex h-10 items-center gap-2 rounded-xl bg-slate-100/10 px-3 text-sm font-medium text-muted transition-all hover:bg-slate-100/20 hover:text-blue-400 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                aria-label="Change language"
            >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{localeFlags[locale]}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-border bg-card shadow-xl backdrop-blur-md z-50"
                    >
                        {localeList.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => {
                                    setLocale(loc);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                                    locale === loc
                                        ? "bg-blue-500/10 text-blue-400"
                                        : "text-muted hover:bg-muted/10 hover:text-foreground"
                                }`}
                            >
                                <span className="text-lg">{localeFlags[loc]}</span>
                                <span>{localeNames[loc]}</span>
                                {locale === loc && (
                                    <motion.div
                                        layoutId="activeLang"
                                        className="ml-auto h-2 w-2 rounded-full bg-blue-400"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

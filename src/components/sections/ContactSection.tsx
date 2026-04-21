// src/components/sections/ContactSection.tsx
"use client";

import { Mail, Send, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
    const { t } = useLanguage();

    return (
        <Section id="contact" className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center text-balance">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                        {t("contact.title")} <span className="text-blue-400">{t("contact.titleAccent")}</span>
                    </h2>
                    <p className="text-lg text-muted">
                        {t("contact.subtitle")}
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-foreground">{t("contact.email")}</h4>
                                <p className="text-muted">boudmaghmounir@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-emerald-500/10 p-4 text-emerald-400">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-foreground">{t("contact.location")}</h4>
                                <p className="text-muted">{t("contact.locationValue")}</p>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-6">
                            <a href="https://github.com/MounirBoudmagh" className="text-muted hover:text-foreground transition-colors">
                                <SiGithub size={32} />
                            </a>
                            <a href="www.linkedin.com/in/mounir-boudmagh-9b81a5168" className="text-muted hover:text-blue-400 transition-colors">
                                <FaLinkedin size={32} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">{t("contact.formName")}</label>
                                <input className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-muted/50" placeholder={t("contact.formNamePlaceholder")} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">{t("contact.formEmail")}</label>
                                <input className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-muted/50" placeholder={t("contact.formEmailPlaceholder")} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted">{t("contact.formMessage")}</label>
                            <textarea rows={4} className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-muted/50" placeholder={t("contact.formMessagePlaceholder")} />
                        </div>
                        <Button type="button" className="w-full sm:w-auto">
                            {t("contact.sendButton")}
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}

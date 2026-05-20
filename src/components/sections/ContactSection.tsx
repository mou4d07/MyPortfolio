// src/components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { Mail, Send, MapPin, Loader2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.error || t("contact.errorMessage"));
            }
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message || t("contact.errorMessage"));
        }
    };

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
                            <a href="https://github.com/mou4d07" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                                <SiGithub size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/mounir-boudmagh-9b81a5168" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-blue-400 transition-colors">
                                <FaLinkedin size={32} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">{t("contact.formName")}</label>
                                <input
                                    type="text"
                                    required
                                    disabled={status === "loading"}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-muted/50 disabled:opacity-50"
                                    placeholder={t("contact.formNamePlaceholder")}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted">{t("contact.formEmail")}</label>
                                <input
                                    type="email"
                                    required
                                    disabled={status === "loading"}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-muted/50 disabled:opacity-50"
                                    placeholder={t("contact.formEmailPlaceholder")}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted">{t("contact.formMessage")}</label>
                            <textarea
                                rows={4}
                                required
                                disabled={status === "loading"}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-muted/50 disabled:opacity-50"
                                placeholder={t("contact.formMessagePlaceholder")}
                            />
                        </div>

                        {status === "success" && (
                            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm transition-all animate-in fade-in">
                                {t("contact.successMessage")}
                            </div>
                        )}

                        {status === "error" && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm transition-all animate-in fade-in">
                                {errorMessage}
                            </div>
                        )}

                        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
                            {status === "loading" ? (
                                <>
                                    {t("contact.sending")}
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                </>
                            ) : (
                                <>
                                    {t("contact.sendButton")}
                                    <Send className="h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}

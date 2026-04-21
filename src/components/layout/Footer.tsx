// src/components/layout/Footer.tsx
"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-slate-900 py-12 text-center">
            <div className="container mx-auto px-6">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Mounir Boudmagh. {t("footer.builtWith")} <span className="text-blue-500">Next.js</span> {t("footer.and")} <span className="text-emerald-500">Tailwind CSS</span>.
                </p>
            </div>
        </footer>
    );
}

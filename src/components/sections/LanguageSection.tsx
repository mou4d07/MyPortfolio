// src/components/sections/LanguageSection.tsx
//import { Languages } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const languages = [
    { name: "Arabic", level: "Native", pulse: "bg-blue-500" },
    { name: "French", level: "Full Professional", pulse: "bg-emerald-500" },
    { name: "English", level: "Professional Working", pulse: "bg-blue-400" },
];

export function LanguageSection() {
    return (
        <Section id="languages" className="container mx-auto px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">
                <span className="text-blue-400">Languages</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
                {languages.map((lang, index) => (
                    <Card key={index} className="flex flex-col items-center text-center">
                        <div className={`mb-4 h-3 w-3 rounded-full ${lang.pulse} animate-pulse shadow-[0_0_10px_rgba(0,0,0,0.5)] shadow-current`} />
                        <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                        <p className="text-sm font-medium text-slate-400 mt-1">{lang.level}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

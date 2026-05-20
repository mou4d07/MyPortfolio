// src/components/sections/EducationSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Calendar, ChevronDown, X, ZoomIn, FileImage } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/LanguageContext";

const degreeKeys = ["phd", "masters", "bsc", "tsDiploma"];
const certKeys = ["cert1", "cert2", "cert3", "cert4", "cert6", "cert7"];

// Define which keys have physical certificates uploaded in public/certificates/
const itemsWithCertificates = new Set<string>([
    "masters", // HPE Simplivity System Administration
]);

export function EducationSection() {
    const { t } = useLanguage();
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Section id="education" className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Education Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                        <span className="text-blue-400">{t("education.title")}</span>
                    </h2>
                    <div className="space-y-4">
                        {degreeKeys.map((key, index) => {
                            const isExpanded = expandedId === key;
                            const detailsText = t(`education.degrees.${key}Details`);
                            const hasDetails = detailsText && detailsText.trim() !== "" && !detailsText.includes("Details will be added here");
                            const hasImage = itemsWithCertificates.has(key);
                            const isExpandable = hasDetails || hasImage;

                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                >
                                    <Card
                                        className={`overflow-hidden transition-all ${isExpandable
                                            ? `cursor-pointer ${isExpanded ? 'border-blue-500/50' : 'hover:border-blue-500/30'}`
                                            : 'cursor-default border-white/5'
                                            }`}
                                        onClick={() => isExpandable && toggleExpand(key)}
                                    >
                                        <div className="flex gap-4 items-start p-4 bg-card">
                                            <div className="rounded-lg bg-blue-500/10 p-2 shrink-0">
                                                <GraduationCap className="h-6 w-6 text-blue-400" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-xs font-medium text-muted mb-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {t(`education.degrees.${key}Period`)}
                                                    </div>
                                                    {isExpandable && (
                                                        <ChevronDown className={`h-4 w-4 text-muted transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-bold text-foreground leading-tight">{t(`education.degrees.${key}`)}</h3>
                                                <p className="text-sm text-muted mt-1">{t(`education.degrees.${key}Institution`)}</p>
                                            </div>
                                        </div>

                                        {/* EXPANDABLE CONTENT */}
                                        <AnimatePresence>
                                            {isExpandable && isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="border-t border-white/5 bg-white/5"
                                                >
                                                    <div className="p-4 flex flex-col sm:flex-row gap-6">
                                                        {hasDetails && (
                                                            <div className="flex-1 text-sm text-muted/90">
                                                                <p className="leading-relaxed whitespace-pre-wrap">
                                                                    {t(`education.degrees.${key}Details`)}
                                                                </p>
                                                            </div>
                                                        )}
                                                        {hasImage && (
                                                            <div
                                                                className={`h-24 shrink-0 rounded-md border border-white/10 bg-black/20 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 transition-all group overflow-hidden relative ${hasDetails ? 'w-full sm:w-32' : 'w-32'
                                                                    }`}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedImage(`/certificates/${key}.png`);
                                                                }}
                                                            >
                                                                {!failedImages[key] ? (
                                                                    <>
                                                                        <img
                                                                            src={`/certificates/${key}.png`}
                                                                            alt="Certificate Thumbnail"
                                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                            onError={() => {
                                                                                setFailedImages(prev => ({ ...prev, [key]: true }));
                                                                            }}
                                                                        />
                                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                                                                            <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <FileImage className="h-6 w-6 text-muted group-hover:text-blue-400 mb-1 transition-colors" />
                                                                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted group-hover:text-blue-400 transition-colors">Certificate</span>
                                                                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                            <ZoomIn className="h-8 w-8 text-white drop-shadow-md" />
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                        <span className="text-emerald-400">{t("education.certificationsTitle")}</span>
                    </h2>
                    <div className="space-y-3">
                        {certKeys.map((key, index) => {
                            const isExpanded = expandedId === key;
                            const detailsText = t(`education.certifications.${key}Details`);
                            const hasDetails = detailsText && detailsText.trim() !== "" && !detailsText.includes("Details will be added here");
                            const hasImage = itemsWithCertificates.has(key);
                            const isExpandable = hasDetails || hasImage;

                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                >
                                    <Card
                                        className={`overflow-hidden transition-all ${isExpandable
                                            ? `cursor-pointer ${isExpanded ? 'border-emerald-500/50' : 'hover:border-emerald-500/30'}`
                                            : 'cursor-default border-white/5'
                                            }`}
                                        onClick={() => isExpandable && toggleExpand(key)}
                                    >
                                        <div className="flex items-center gap-3 p-4 bg-card">
                                            <Award className="h-5 w-5 text-emerald-400 shrink-0" />
                                            <span className="text-sm font-medium text-muted flex-1">{t(`education.certifications.${key}`)}</span>
                                            {isExpandable && (
                                                <ChevronDown className={`h-4 w-4 text-muted transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                                            )}
                                        </div>

                                        {/* EXPANDABLE CONTENT */}
                                        <AnimatePresence>
                                            {isExpandable && isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="border-t border-white/5 bg-white/5"
                                                >
                                                    <div className="p-4 flex flex-col sm:flex-row gap-6">
                                                        {hasDetails && (
                                                            <div className="flex-1 text-sm text-muted/90">
                                                                <p className="leading-relaxed whitespace-pre-wrap">
                                                                    {t(`education.certifications.${key}Details`)}
                                                                </p>
                                                            </div>
                                                        )}
                                                        {hasImage && (
                                                            <div
                                                                className={`h-24 shrink-0 rounded-md border border-white/10 bg-black/20 flex flex-col items-center justify-center cursor-pointer hover:bg-black/40 hover:border-emerald-500/50 transition-all group overflow-hidden relative ${hasDetails ? 'w-full sm:w-32' : 'w-32'
                                                                    }`}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedImage(`/certificates/${key}.png`);
                                                                }}
                                                            >
                                                                {!failedImages[key] ? (
                                                                    <>
                                                                        <img
                                                                            src={`/certificates/${key}.png`}
                                                                            alt="Certificate Thumbnail"
                                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                            onError={() => {
                                                                                setFailedImages(prev => ({ ...prev, [key]: true }));
                                                                            }}
                                                                        />
                                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                                                                            <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <FileImage className="h-6 w-6 text-muted group-hover:text-emerald-400 mb-1 transition-colors" />
                                                                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted group-hover:text-emerald-400 transition-colors">Certificate</span>
                                                                        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                            <ZoomIn className="h-8 w-8 text-white drop-shadow-md" />
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
                        >
                            {/* We use an img tag with an onError fallback in case the image hasn't been uploaded yet */}
                            <img
                                src={selectedImage}
                                alt="Certificate"
                                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
                                onError={(e) => {
                                    // Fallback if image not found
                                    const target = e.target as HTMLImageElement;
                                    target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect fill='%231f2937' width='800' height='600'/><text fill='%239ca3af' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%' y='50%' text-anchor='middle'>Image Not Uploaded Yet</text><text fill='%236b7280' font-family='sans-serif' font-size='16' dy='40' x='50%' y='50%' text-anchor='middle'>Please add the image file to the public/certificates folder</text></svg>";
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}

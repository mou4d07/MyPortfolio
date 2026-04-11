// src/components/ui/Section.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("py-20 md:py-32", className)}
        >
            {children}
        </motion.section>
    );
}

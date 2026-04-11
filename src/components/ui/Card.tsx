// src/components/ui/Card.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                "group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-blue-500/10",
                className
            )}
        >
            {children}
        </div>
    );
}

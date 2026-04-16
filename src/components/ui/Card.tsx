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
                "group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10",
                className
            )}
        >
            {children}
        </div>
    );
}

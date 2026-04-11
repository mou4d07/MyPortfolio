// src/components/ui/Button.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: ReactNode;
    asAnchor?: boolean;
    href?: string;
}

export function Button({ variant = "primary", className, children, asAnchor, href, ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/40",
        secondary: "border border-slate-700 bg-transparent text-slate-300 hover:border-slate-500 hover:text-white"
    };

    const combinedClasses = cn(baseStyles, variants[variant], className);

    if (asAnchor && href) {
        return (
            <a href={href} className={combinedClasses}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
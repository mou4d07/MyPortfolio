// src/components/layout/Footer.tsx
export function Footer() {
    return (
        <footer className="border-t border-slate-900 py-12 text-center">
            <div className="container mx-auto px-6">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Mounir Boudmagh. Built with <span className="text-blue-500">Next.js</span> and <span className="text-emerald-500">Tailwind CSS</span>.
                </p>
            </div>
        </footer>
    );
}

// src/components/sections/AboutSection.tsx
import { Section } from "@/components/ui/Section";

export function AboutSection() {
    return (
        <Section id="about" className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl">
                    About <span className="text-blue-400">Me</span>
                </h2>

                <div className="space-y-6 text-lg text-slate-300">
                    <p className="leading-relaxed">
                        Highly adaptable IT professional and development leader with over 8 years of enterprise experience bridging software engineering and IT infrastructure. Currently serving as Head of Application Development, specializing in Full-Stack Web Development (<span className="text-blue-400 font-medium">Next.js, ASP.NET Core</span>) and DevOps methodologies.
                    </p>
                    <p className="leading-relaxed border-l-2 border-emerald-500 pl-4 bg-slate-900/30 p-4 rounded-r-lg">
                        Proven track record of architecting scalable applications, orchestrating automated deployments to high-availability web servers (<span className="text-emerald-400 font-medium">IIS, Nginx</span>), and managing CI/CD pipelines in Azure DevOps.
                    </p>
                    <p className="leading-relaxed">
                        Brings deep foundational expertise in optimizing enterprise virtualization, deploying Windows Server and Linux environments across VMs and bare-metal servers, and AI Deep Learning research.
                    </p>
                </div>
            </div>
        </Section>
    );
}

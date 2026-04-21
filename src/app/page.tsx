// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LanguageSection } from "@/components/sections/LanguageSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <TeachingSection />
      <LanguageSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mounir Boudmagh | Portfolio",
  description: "IT Systems Architect, DevOps Engineer & Full-Stack Developer blending software engineering and robust infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

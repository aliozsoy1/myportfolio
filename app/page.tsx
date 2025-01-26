"use client";

import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
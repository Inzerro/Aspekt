"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handler = () => {
      setLoaded(true);
    };

    window.addEventListener("preloaderDone", handler);

    return () => {
      window.removeEventListener("preloaderDone", handler);
    };
  }, []);

  return (
    <main>
      <Navbar />

      <HeroSection loaded={loaded} />

      <ProjectsSection />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

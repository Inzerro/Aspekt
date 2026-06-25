"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

function ContactScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scrollTo") === "contact") {
      const element = document.getElementById("contact");

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          setTimeout(() => {
            window.scrollBy(0, -100);
          }, 500);
        }, 300);
      }
    }
  }, [searchParams]);

  return null;
}

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
      <ContactScrollHandler />

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

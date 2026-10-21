"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { aboutAnimation } from "@/hooks/pages/aboutAnimation";
import { mountVistalInteractions } from "@/hooks/vistal/interactions";
import { useAboutAnimation } from "@/hooks/pages/useAboutAnimation";
import Navbar from "@/components/VistalNavbar";
import Footer from "@/components/VistalFooter";
import AboutAboutHero from "@/components/sections/AboutAboutHero";
import AboutPurpose from "@/components/sections/AboutPurpose";
import AboutSustainability from "@/components/sections/AboutSustainability";
import AboutTeam from "@/components/sections/AboutTeam";
import AboutFaq from "@/components/sections/AboutFaq";
import AboutCta from "@/components/sections/AboutCta";
export default function AboutView() {
  const rootRef = useRef<HTMLDivElement>(null);
  useAboutAnimation(rootRef);
  usePageAnimation(rootRef, aboutAnimation, mountVistalInteractions);
  return (
    <div
      ref={rootRef}
      className="page-wrapper vistal-reference vistal-about-page"
    >
      <Navbar light />
      <main className="main-wrapper">
        <div className="reference-fragment">
          <AboutAboutHero />
        </div>
        <div className="reference-fragment">
          <AboutPurpose />
        </div>
        <div className="reference-fragment">
          <AboutSustainability />
        </div>
        <div className="reference-fragment">
          <AboutTeam />
        </div>
        <div className="reference-fragment">
          <AboutFaq />
        </div>
        <div className="reference-fragment">
          <AboutCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}

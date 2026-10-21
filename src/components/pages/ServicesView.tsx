"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { servicesAnimation } from "@/hooks/pages/servicesAnimation";
import { mountVistalInteractions } from "@/hooks/vistal/interactions";
import { useServicesAnimation } from "@/hooks/pages/useServicesAnimation";
import Navbar from "@/components/VistalNavbar";
import Footer from "@/components/VistalFooter";
import ServicesServicesHero from "@/components/sections/ServicesServicesHero";
import ServicesServices from "@/components/sections/ServicesServices";
import ServicesHowWeWork from "@/components/sections/ServicesHowWeWork";
import ServicesProjects from "@/components/sections/ServicesProjects";
import ServicesCta from "@/components/sections/ServicesCta";
export default function ServicesView() {
  const rootRef = useRef<HTMLDivElement>(null);
  useServicesAnimation(rootRef);
  usePageAnimation(rootRef, servicesAnimation, mountVistalInteractions);
  return (
    <div
      ref={rootRef}
      className="page-wrapper vistal-reference vistal-services-page"
    >
      <Navbar />
      <main className="main-wrapper">
        <div className="reference-fragment">
          <ServicesServicesHero />
        </div>
        <div className="reference-fragment">
          <ServicesServices />
        </div>
        <div className="reference-fragment">
          <ServicesHowWeWork />
        </div>
        <div className="reference-fragment">
          <ServicesProjects />
        </div>
        <div className="reference-fragment">
          <ServicesCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}

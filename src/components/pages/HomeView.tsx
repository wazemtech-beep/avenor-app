"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { homeAnimation } from "@/hooks/pages/homeAnimation";
import { mountVistalInteractions } from "@/hooks/vistal/interactions";
import { useHomeAnimation } from "@/hooks/pages/useHomeAnimation";
import Navbar from "@/components/VistalNavbar";
import Footer from "@/components/VistalFooter";
import HomeHero from "@/components/sections/HomeHero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeProjects from "@/components/sections/HomeProjects";
import HomeServices from "@/components/sections/HomeServices";
import HomeAboutTwo from "@/components/sections/HomeAboutTwo";
import HomeBlogs from "@/components/sections/HomeBlogs";
import HomeFaq from "@/components/sections/HomeFaq";
import HomeCta from "@/components/sections/HomeCta";
export default function HomeView() {
  const rootRef = useRef<HTMLDivElement>(null);
  useHomeAnimation(rootRef);
  usePageAnimation(rootRef, homeAnimation, mountVistalInteractions);
  return (
    <div ref={rootRef} className="page-wrapper vistal-reference">
      <Navbar />
      <main className="main-wrapper">
        <div className="reference-fragment">
          <HomeHero />
        </div>
        <div className="reference-fragment">
          <HomeAbout />
        </div>
        <div className="reference-fragment">
          <HomeProjects />
        </div>
        <div className="reference-fragment">
          <HomeServices />
        </div>
        <div className="reference-fragment">
          <HomeAboutTwo />
        </div>
        <div className="reference-fragment">
          <HomeBlogs />
        </div>
        <div className="reference-fragment">
          <HomeFaq />
        </div>
        <div className="reference-fragment">
          <HomeCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}

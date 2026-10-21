"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { page404Animation } from "@/hooks/pages/page404Animation";
import { mountVistalInteractions } from "@/hooks/vistal/interactions";
import { usePage404Animation } from "@/hooks/pages/usePage404Animation";
import Navbar from "@/components/VistalNavbar";
import Footer from "@/components/VistalFooter";
import Page404NotFound from "@/components/sections/Page404NotFound";
export default function Page404View() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePage404Animation(rootRef);
  usePageAnimation(rootRef, page404Animation, mountVistalInteractions);
  return (
    <div
      ref={rootRef}
      className="page-wrapper vistal-reference vistal-not-found-page"
    >
      <Navbar light />
      <main className="main-wrapper">
        <div className="reference-fragment">
          <Page404NotFound />
        </div>
      </main>
      <Footer staticFooter />
    </div>
  );
}

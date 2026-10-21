"use client";
import { useRef } from "react";
import { usePageAnimation } from "@/hooks/usePageAnimation";
import { contactAnimation } from "@/hooks/pages/contactAnimation";
import { mountVistalInteractions } from "@/hooks/vistal/interactions";
import { useContactAnimation } from "@/hooks/pages/useContactAnimation";
import Navbar from "@/components/VistalNavbar";
import Footer from "@/components/VistalFooter";
import ContactContact from "@/components/sections/ContactContact";
export default function ContactView() {
  const rootRef = useRef<HTMLDivElement>(null);
  useContactAnimation(rootRef);
  usePageAnimation(rootRef, contactAnimation, mountVistalInteractions);
  return (
    <div
      ref={rootRef}
      className="page-wrapper vistal-reference vistal-contact-page"
    >
      <Navbar />
      <main className="main-wrapper">
        <div className="reference-fragment">
          <ContactContact />
        </div>
      </main>
      <Footer staticFooter />
    </div>
  );
}

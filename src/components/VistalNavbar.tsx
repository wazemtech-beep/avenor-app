"use client";

import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import { siteConfig } from "@/data/siteConfig";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function VistalNavbar({ light = false }: { light?: boolean }) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const breakpoint = matchMedia("(max-width: 991px)");
    const resize = () => {
      setMobile(breakpoint.matches);
      if (!breakpoint.matches) setOpen(false);
    };
    const scroll = () => setSolid(window.scrollY > 80);
    resize();
    scroll();
    breakpoint.addEventListener("change", resize);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      breakpoint.removeEventListener("change", resize);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    headerRef.current?.querySelector<HTMLAnchorElement>(".nav_mobile a[href]")?.focus();
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`navbar w-nav vistal-clean-navbar${light ? " vistal-navbar-light" : ""}${solid ? " vistal-nav-solid" : ""}${open ? " vistal-menu-open" : ""}`}
      data-collapse="medium"
      data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="padding-global is-navbar">
        <div className="container-large">
          <div className="navbar_content">
            <Link
              href="/"
              className="navbar_logo-link w-nav-brand"
              aria-label={siteConfig.brand.homeLabel}
              onClick={() => setOpen(false)}
            >
              <BrandLogo light={!light} />
            </Link>
            <div className="nav_wrap">
              <nav
                className={`nav_mobile w-nav-menu${open ? " w--open" : ""}`}
                aria-label="Main navigation"
                id="vistal-navigation"
                aria-hidden={mobile ? !open : undefined}
                inert={mobile && !open}
                data-lenis-prevent
              >
                <div className="navbar_list">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="nav_links w-inline-block"
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="nav_links vistal-mobile-contact"
                    aria-current={pathname === "/contact" ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    Contact us
                  </Link>
                </div>
              </nav>
              <div className="nav_buttons-wrap">
                <div className="login-wrap hide-mobile-landscape">
                  <Link
                    href="/contact"
                    className="vistal-nav-contact"
                    aria-current={pathname === "/contact" ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    Contact us
                  </Link>
                </div>
                <button
                  type="button"
                  ref={toggleRef}
                  className={`menu-button w-nav-button${open ? " w--open" : ""}`}
                  aria-label={open ? "Close navigation" : "Open navigation"}
                  aria-controls="vistal-navigation"
                  aria-expanded={open}
                  onClick={() => setOpen((value) => !value)}
                >
                  <Menu
                    size={24}
                    className="vistal-menu-icon"
                    aria-hidden="true"
                  />
                  <X
                    size={24}
                    className="vistal-close-icon"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

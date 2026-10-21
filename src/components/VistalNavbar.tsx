"use client";

import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import { siteConfig } from "@/data/siteConfig";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function VistalNavbar({ light = false }: { light?: boolean }) {
  const pathname = usePathname();

  return (
    <header
      className={`navbar w-nav vistal-clean-navbar${light ? " vistal-navbar-light" : ""}`}
      data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"
    >
      <div className="padding-global is-navbar">
        <div className="container-large">
          <div className="navbar_content">
            <Link
              href="/"
              className="navbar_logo-link w-nav-brand"
              aria-label={siteConfig.brand.homeLabel}
            >
              <BrandLogo light={!light} />
            </Link>
            <div className="nav_wrap">
              <nav
                className="nav_mobile w-nav-menu"
                aria-label="Main navigation"
                id="vistal-navigation"
              >
                <div className="navbar_list">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="nav_links w-inline-block"
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="nav_links vistal-mobile-contact"
                    aria-current={pathname === "/contact" ? "page" : undefined}
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
                  >
                    Contact us
                  </Link>
                </div>
                <button
                  type="button"
                  className="menu-button w-nav-button"
                  aria-label="Open navigation"
                  aria-controls="vistal-navigation"
                  aria-expanded="false"
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

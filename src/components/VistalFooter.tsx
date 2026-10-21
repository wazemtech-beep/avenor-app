import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import { siteConfig } from "@/data/siteConfig";

export default function VistalFooter({
  staticFooter = false,
}: {
  staticFooter?: boolean;
}) {
  return (
    <footer
      id="footer"
      className={`footer vistal-clean-footer${staticFooter ? " vistal-footer-static" : ""}`}
    >
      <div className="padding-section-small" />
      <div className="padding-global">
        <div className="container-large">
          <div className="footer_top">
            <div className="footer_content">
              <Link
                href="/"
                className="footer_logo w-inline-block"
                data-w-id="29195cd6-0b13-b0f5-5299-292d509a464a"
                aria-label={siteConfig.brand.homeLabel}
              >
                <BrandLogo light />
              </Link>
              <div
                className="max-description is-32rem"
                data-w-id="b17d349c-e135-835c-b2a6-fc529f7bd4f6"
              >
                <p className="text-color-tertiary">
                  {siteConfig.brand.footerDescription}
                </p>
              </div>
            </div>
            <nav
              className="footer_column"
              aria-label="Footer pages"
              data-w-id="29195cd6-0b13-b0f5-5299-292d509a464e"
            >
              <Link href="/" className="footer_link is-footer">
                Home
              </Link>
              <Link href="/projects" className="footer_link is-footer">
                Projects
              </Link>
              <Link href="/services" className="footer_link is-footer">
                Services
              </Link>
            </nav>
            <nav
              className="footer_column"
              aria-label="Footer studio"
              data-w-id="29195cd6-0b13-b0f5-5299-292d509a4659"
            >
              <Link href="/about" className="footer_link is-footer">
                About
              </Link>
              <Link href="/contact" className="footer_link is-footer">
                Contact
              </Link>
            </nav>
          </div>
          <div className="vistal-footer-spacer" />
          <div className="footer_bottom animation">
            <div className="avenor-display-wordmark" aria-label={siteConfig.name}>
              <span>{siteConfig.name}</span><sup aria-hidden="true">&copy;</sup>
            </div>
            <p className="text-color-tertiary" style={{ fontSize: "0.875rem", marginTop: "0.75rem", opacity: 0.8 }}>
              &copy; 2026 {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="padding-section-small" />
    </footer>
  );
}

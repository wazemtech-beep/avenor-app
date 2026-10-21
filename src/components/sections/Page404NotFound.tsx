"use client";
import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
export default function Page404NotFound() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.page404NotFound;
  return (
    <section id="not-found" className="main-wrapper" ref={sectionRef}>
      <div className="section_not-found">
        <div
          data-w-id="933ed1a1-8392-905a-859b-fe75811699d0"
          className="not-found_wrapper"
          data-motion="page404NotFound-element-2"
        >
          <div className="not-found_content">
            <div className="not-found_header">
              <h1
                data-w-id="933ed1a1-8392-905a-859b-fe75811699d3"
                className="text-5xl text-font-gambetta"
                data-motion="page404NotFound-element-5"
              >
                {content.title}
                <em>{content.found}</em>
              </h1>
            </div>
            <div data-wf--button--variant="secondary">
              <Link
                data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"
                href={content.goBackHomeHref}
                className="button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 w-inline-block"
                data-motion="page404NotFound-element-8"
              >
                <div>{content.goBackHome}</div>
                <div
                  data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"
                  className="icon_button w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                  data-motion="page404NotFound-element-10"
                >
                  <div className="icon_wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon-1x1-small w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2 is-hide"
                    >
                      <path
                        d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon-1x1-small w-variant-ded5bb62-3369-f5a8-9275-858f0e614de2"
                    >
                      <path
                        d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

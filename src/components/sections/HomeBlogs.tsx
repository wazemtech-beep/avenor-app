"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
export default function HomeBlogs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = siteConfig.sections.homeBlogs;
  return (
    <section id="blogs" className="section_blogs" ref={sectionRef}>
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical_center">
            <div
              data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c13"
              data-motion="homeBlogs-element-5"
            >
              <div data-wf--tag--variant="base" className="tag">
                <div className="icon-1x1-extrasmall bg-secondary"></div>
                <div className="text-sm text-style-allcaps">
                  {content.aboutVistal}
                </div>
              </div>
            </div>
            <div className="spacer-huge"></div>
            <h2
              data-w-id="ca44d9f3-8cba-b6dc-f9be-b68a43aa6c17"
              className="h2-large"
              data-motion="homeBlogs-element-10"
            >
              {content.heading}
            </h2>
          </div>
          <div className="spacer">
            <div style={{ height: "4rem" }} className="spacer-desktop"></div>
            <div style={{ height: "3.5rem" }} className="spacer-tablet"></div>
            <div style={{ height: "3rem" }} className="spacer-mobile"></div>
          </div>
          <div
            data-delay="4000"
            data-animation="slide"
            className="slider animation w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="slider-mask w-slider-mask">
              {content.slides.map((item, index) => (
                <div className="slide-item w-slide" key={index}>
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <a
                          data-wf--blog-card--variant="base"
                          data-w-id="f8d3cc71-f643-c083-3ab4-23d400b2595f"
                          href={item.href}
                          className="blog_card w-inline-block"
                          data-motion="homeBlogs-element-91"
                        >
                          <div className="blog_img">
                            <Image
                              src={item.image}
                              alt={content.Alt}
                              className="img"
                              width={100}
                              height={100}
                              sizes="100px"
                            />
                          </div>
                          <div className="blog_description">
                            <div className="blog_text">
                              <div className="text-color-secondary">
                                {content.october42024}
                              </div>
                              <div className="text-2xl text-style-2lines">
                                {item.label}
                              </div>
                            </div>
                            <div className="learn_button">
                              <div className="text-sm text-style-allcaps">
                                {content.learnMore}
                              </div>
                              <div className="line_underline"></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="arrow w-slider-arrow-left"
              aria-label={content.previousArticlesAriaLabel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="icon-1x1-medium"
              >
                <path
                  d="M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="arrow is-right w-slider-arrow-right"
              aria-label={content.nextArticlesAriaLabel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="icon-1x1-medium"
              >
                <path
                  d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div className="hide w-slider-nav w-round"></div>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  );
}

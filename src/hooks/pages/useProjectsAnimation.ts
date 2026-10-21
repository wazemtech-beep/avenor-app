"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  bindReveal,
  bindHover,
  bindScrollTimeline,
  bindControlEvent,
  type AnimationSetup,
} from "@/hooks/useSectionAnimation";
const setup: AnimationSetup = (section, reduced, cleanup) => {
  // Navbar - menu opens
  for (const element of elements(
    section,
    '[data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".nav-button_line.is-first"), {
      yPercent: -350,
    });
    gsap.set(elements(element, ".nav-button_line.is-third"), { yPercent: 350 });
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-second"),
      { ...{ scaleX: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      {
        ...{ rotation: -45 },
        duration: reduced ? 0 : 0.25,
        ease: "power1.out",
      },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      { ...{ rotation: 45 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0.25,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:navbar_open"));
  }

  // Navbar - menu closes
  for (const element of elements(
    section,
    '[data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.25, ease: "power1.out" },
      0,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-second"),
      { ...{ scaleX: 1 }, duration: reduced ? 0 : 0, ease: "none" },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-first"),
      {
        ...{ yPercent: -350 },
        duration: reduced ? 0 : 0.25,
        ease: "power1.out",
      },
      0.25,
    );
    timeline.to(
      elements(element, ".nav-button_line.is-third"),
      {
        ...{ yPercent: 350 },
        duration: reduced ? 0 : 0.25,
        ease: "power1.out",
      },
      0.25,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:navbar_close"));
  }

  // slideInTop
  for (const element of elements(
    section,
    '[data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: -100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0,
          loop: false,
        }),
      );
  }

  // growIn
  for (const element of elements(section, ".animation")) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      {
        ...{ scaleX: 0.7500000000000001, scaleY: 0.7500000000000001 },
        duration: reduced ? 0 : 0,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 1,
        ease: "power3.out",
      },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 10,
          unit: "%",
          delay: 0,
          loop: false,
        }),
      );
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-w-id="b65fb2c5-1d51-2882-83fd-de7a556a59ab"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc75"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc78"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc7b"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464a"], [data-w-id="b17d349c-e135-835c-b2a6-fc529f7bd4f6"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464e"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a4659"], [data-w-id="86e71fe3-3335-e9a6-3439-5a0f329f221b"], [data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e7a"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1b"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"], [data-w-id="2bf79452-5f36-658a-fe5f-8432f39d9f1d"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: -100, y: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0.1,
          loop: false,
        }),
      );
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="7f0a6481-70a3-1728-0b14-19cb6a2061a4"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: 100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0.1,
          loop: false,
        }),
      );
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e54"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: 100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0.2,
          loop: false,
        }),
      );
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e58"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: 100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0.3,
          loop: false,
        }),
      );
  }

  // Image Reveal
  for (const element of elements(
    section,
    '[data-w-id="ea2d9ac0-8df7-f4c5-583f-9b6731cbd6ff"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".img-wrapper"), {
      xPercent: 0,
      yPercent: -100,
    });
    gsap.set(elements(element, ".img"), { yPercent: 100 });
    gsap.set(elements(element, ".img"), { scaleX: 1.5, scaleY: 1.5 });
    gsap.set(elements(element, ".img"), { filter: "blur(10px)" });
    timeline.to(
      elements(element, ".img-wrapper"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 1.6, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 1.6, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 1.6,
        ease: "power3.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      {
        ...{ filter: "blur(0px)" },
        duration: reduced ? 0 : 1.6,
        ease: "power3.out",
      },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindReveal(element, timeline, {
          offset: 0,
          unit: "%",
          delay: 0,
          loop: false,
        }),
      );
  }

  // Header stick
  for (const element of elements(
    section,
    '[data-w-id="da4f4464-cff4-9d8a-1066-1fa1708f5e4c"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(element, ".hero_image-full"), { scaleX: 1 });
    timeline.fromTo(
      elements(element, ".hero_image-full"),
      { scaleX: 1 },
      { scaleX: 1.3, duration: 0.85, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".hero_image-full"), { scaleY: 1 });
    timeline.fromTo(
      elements(element, ".hero_image-full"),
      { scaleY: 1 },
      { scaleY: 1.3, duration: 0.85, ease: "none", immediateRender: false },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.5,
          startsEntering: true,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Button icon - hover on 2
  for (const element of elements(
    section,
    '[data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ rotation: -15 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0.5,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Button icon - hover off 2
  for (const element of elements(
    section,
    '[data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [element],
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Floating Image
  for (const element of elements(section, ".img-parallax")) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set([element], { yPercent: 0 });
    timeline.fromTo(
      [element],
      { yPercent: 0 },
      { yPercent: 10, duration: 1, ease: "none", immediateRender: false },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.5,
          startsEntering: true,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Button - hover on
  for (const element of elements(
    section,
    '[data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { scaleX: 1, scaleY: 1 });
    gsap.set(elements(element, ".icon-1x1-small"), { x: 0 });
    gsap.set(elements(element, ".icon-1x1-small.is-hide"), { x: 0 });
    timeline.to(
      [element],
      {
        ...{ scaleX: 0.93, scaleY: 0.93 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small.is-hide"),
      { ...{ x: 30 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ x: 30 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Button - Hover Off
  for (const element of elements(
    section,
    '[data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [element],
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small"),
      { ...{ x: 0 }, duration: reduced ? 0 : 0.5, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".icon-1x1-small.is-hide"),
      { ...{ x: 0 }, duration: reduced ? 0 : 0.5, ease: "power3.out" },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }
};
export function useProjectsAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}

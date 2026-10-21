"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  bindReveal,
  bindHover,
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
    '[data-w-id="29195cd6-0b13-b0f5-5299-292d509a464a"], [data-w-id="b17d349c-e135-835c-b2a6-fc529f7bd4f6"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464e"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a4659"]',
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
    '[data-w-id="7cd64e5a-5661-56c1-988b-e937bd2026ec"]',
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

  // Button - hover on
  for (const element of elements(
    section,
    '[data-w-id="47cd453f-ba4b-5f0c-6f12-51fdf852f0b3"]',
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
    '[data-w-id="47cd453f-ba4b-5f0c-6f12-51fdf852f0b3"]',
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
export function useContactAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}

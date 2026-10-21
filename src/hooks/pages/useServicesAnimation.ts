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
    '[data-w-id="b65fb2c5-1d51-2882-83fd-de7a556a59ab"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc75"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc78"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc7b"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464a"], [data-w-id="b17d349c-e135-835c-b2a6-fc529f7bd4f6"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464e"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a4659"], [data-w-id="42db87dd-7b97-6d37-2880-aa17112ec666"], [data-w-id="42db87dd-7b97-6d37-2880-aa17112ec66a"], [data-w-id="2e84e2a2-6a20-a45a-0de3-755fa9b3dbf1"], [data-w-id="6211d1cf-d19a-ae29-b38b-2debbcb9dbe2"], [data-w-id="47c2d06d-2619-6674-b8ca-ceba8df3d039"], [data-w-id="a6acc1a0-ed12-3e40-d4f0-c7c130df5f48"]',
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

  // Project Card Hover
  for (const element of elements(
    section,
    '[data-w-id="42db87dd-7b97-6d37-2880-aa17112ec697"], [data-w-id="42db87dd-7b97-6d37-2880-aa17112ec68a"], [data-w-id="42db87dd-7b97-6d37-2880-aa17112ec67d"], [data-w-id="f7f47fd4-b9af-4197-a22e-7a3d6dcb88c1"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { backgroundColor: "rgba(0,0,0,1)" });
    gsap.set([], { display: "none" });
    gsap.set(elements(element, ".text-2xl"), { color: "rgba(239,213,86,1)" });
    gsap.set(elements(element, ".img-wrapper"), { opacity: 0 });
    timeline.to(
      [],
      { ...{ display: "flex" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".img-wrapper"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.2, ease: "power1.in" },
      0,
    );
    timeline.to(
      elements(element, ".text-2xl"),
      {
        ...{ color: "rgba(255,255,255,1)" },
        duration: reduced ? 0 : 0.2,
        ease: "power1.in",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Project Card Off
  for (const element of elements(
    section,
    '[data-w-id="42db87dd-7b97-6d37-2880-aa17112ec697"], [data-w-id="42db87dd-7b97-6d37-2880-aa17112ec68a"], [data-w-id="42db87dd-7b97-6d37-2880-aa17112ec67d"], [data-w-id="f7f47fd4-b9af-4197-a22e-7a3d6dcb88c1"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [],
      { ...{ display: "none" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".img-wrapper"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.2, ease: "power1.out" },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ backgroundColor: "rgba(0,0,0,1)" },
        duration: reduced ? 0 : 0.2,
        ease: "power1.out",
      },
      0,
    );
    timeline.to(
      elements(element, ".text-2xl"),
      {
        ...{ color: "rgba(239,213,86,1)" },
        duration: reduced ? 0 : 0.2,
        ease: "power1.out",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-w-id="e01a7a99-7033-2656-9959-7734f05a22bd"]',
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
          delay: 0.2,
          loop: false,
        }),
      );
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-w-id="06256fa4-9e26-704e-ae86-4527f3c9047d"]',
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
          delay: 0.3,
          loop: false,
        }),
      );
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-w-id="b52ce493-a889-d108-10d9-6763dfb134eb"]',
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
          delay: 0.4,
          loop: false,
        }),
      );
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="9b86beb1-aeae-5cd8-ae28-37f16b8c0105"], [data-w-id="840acf3a-9451-b0a4-570c-7af30449bf50"], [data-w-id="840acf3a-9451-b0a4-570c-7af30449bf53"]',
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

  // Stage
  for (const element of elements(
    section,
    '[data-w-id="2a244f6a-6480-188b-31bb-63e780952010"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(element, ".line_grid"), { height: "0%" });
    timeline.fromTo(
      elements(element, ".line_grid"),
      { height: "0%" },
      { height: "68%", duration: 0.45, ease: "none", immediateRender: false },
      0.3,
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

  // Scale Img In
  for (const element of elements(
    section,
    '[data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".img"), { scaleX: 1, scaleY: 1 });
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1.2, scaleY: 1.2 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Scale Img Off
  for (const element of elements(
    section,
    '[data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Button icon - hover on 2
  for (const element of elements(
    section,
    '[data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"]',
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
    '[data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"], [data-w-id="90ffc106-0ebf-3b98-682b-1933d505af65"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [element],
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Button - hover on
  for (const element of elements(
    section,
    '[data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"]',
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
    '[data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"], [data-w-id="d7408f9f-42c3-ccc7-a7b2-8a5ecd2901d2"]',
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
export function useServicesAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}

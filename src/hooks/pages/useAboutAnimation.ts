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

  // Accordion Open
  for (const element of elements(
    section,
    '[data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".answer"), { height: "0px" });
    gsap.set(elements(element, ".line-vertical"), { display: "block" });
    gsap.set(elements(element, ".line-vertical"), { scaleX: 1, scaleY: 1 });
    timeline.to(
      elements(element, ".answer"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      { ...{ display: "none" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      {
        ...{ scaleX: 0, scaleY: 0 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:open"));
  }

  // Accordion Close
  for (const element of elements(
    section,
    '[data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".answer"),
      { ...{ height: "0px" }, duration: reduced ? 0 : 0.5, ease: "power3.out" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      { ...{ display: "block" }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".line-vertical"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      },
      0,
    );
    cleanup.push(bindControlEvent(element, timeline, "vistal:close"));
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
  for (const element of elements(
    section,
    '[data-w-id="d95589ae-5f9c-c8d5-d218-f9bf3b3422bc"], [data-w-id="d95589ae-5f9c-c8d5-d218-f9bf3b3422bc"], [data-w-id="d95589ae-5f9c-c8d5-d218-f9bf3b3422bc"], [data-w-id="d95589ae-5f9c-c8d5-d218-f9bf3b3422bc"], [data-w-id="d95589ae-5f9c-c8d5-d218-f9bf3b3422bc"], [data-w-id="d95589ae-5f9c-c8d5-d218-f9bf3b3422bc"], [data-w-id="aef2e555-1f3c-f360-2fee-7f1b94f74bea"]',
  )) {
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
    '[data-w-id="9a0336c4-01ce-8792-d4e0-15670227d5de"], [data-w-id="12725902-ec9f-de87-a0f5-e3e0d32cb427"], [data-w-id="12725902-ec9f-de87-a0f5-e3e0d32cb429"], [data-w-id="b65fb2c5-1d51-2882-83fd-de7a556a59ab"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc75"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc78"], [data-w-id="fc6f6cbe-a517-8333-268d-1f28c022dc7b"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464a"], [data-w-id="b17d349c-e135-835c-b2a6-fc529f7bd4f6"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a464e"], [data-w-id="29195cd6-0b13-b0f5-5299-292d509a4659"], [data-w-id="57eacece-90ca-7fc4-4a7a-ed336abac437"], [data-w-id="8215988f-43ca-a395-d8ce-78e2e216f7b3"], [data-w-id="98ec34b1-438a-59e4-5ebc-501b92b2c061"], [data-w-id="5284a558-dab3-6b38-0308-12e7f14e4cfc"], [data-w-id="e74a7d9f-679c-5021-338f-ce2c1425a39b"], [data-w-id="84de6248-44a4-29c6-cef8-1381e4a48f17"], [data-w-id="f5ea8184-3544-6bef-929d-24cc594c5f7f"], [data-w-id="987a29bf-4144-7536-d132-326345999fef"]',
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
    '[data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="24780478-fc31-77bc-db2c-936db5928959"], [data-w-id="a642875b-dfd0-2c0f-cf3f-8d963116fba9"], [data-w-id="b0e8c478-7802-dc22-ec1b-3435ebd40d92"], [data-w-id="843e9ae5-ece6-5cb2-f095-0eda0c587bd2"]',
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
    '[data-w-id="3e869994-65c3-5094-e2c3-0228f50f7f21"]',
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
    '[data-w-id="f5237b94-3f88-8a4e-d0f9-ce23664ce2e6"]',
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

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="a809410e-9f01-ad2e-3962-a3d63baf1fb8"]',
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
          delay: 0.4,
          loop: false,
        }),
      );
  }

  // Image Reveal
  for (const element of elements(
    section,
    '[data-w-id="5188f9e9-4a25-c550-e0b2-79039146fc48"]',
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

  // Card Hover In
  for (const element of elements(
    section,
    '[data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { backgroundColor: "rgba(255,255,255,1)" });
    gsap.set(elements(element, ".img"), { scaleX: 1, scaleY: 1 });
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1.1, scaleY: 1.1 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ backgroundColor: "rgba(239,213,86,1)" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Card Hover Off
  for (const element of elements(
    section,
    '[data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"], [data-w-id="5923031f-4f57-afca-8146-3f89a204d2d1"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      [element],
      {
        ...{ backgroundColor: "rgba(255,255,255,1)" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".img"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Scale Img In
  for (const element of elements(
    section,
    '[data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"]',
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
    '[data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"], [data-w-id="2d7c76f3-48c7-ef7f-a835-5f26770b9e22"]',
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

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="bdbd3ff9-172e-50fa-d885-065212807129"]',
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
          delay: 0.5,
          loop: false,
        }),
      );
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="bdbd3ff9-172e-50fa-d885-06521280712b"]',
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
          delay: 0.6,
          loop: false,
        }),
      );
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-w-id="bdbd3ff9-172e-50fa-d885-06521280712f"]',
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
          delay: 0.7,
          loop: false,
        }),
      );
  }
};
export function useAboutAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}

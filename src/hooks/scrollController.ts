"use client";
import type Lenis from "lenis";
let current: Lenis | undefined;
export const setSmoothScroll = (instance: Lenis | undefined) => {
  current = instance;
};
export const scrolling = {
  start: () => current?.start(),
  stop: () => current?.stop(),
  resize: () => current?.resize(),
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { duration?: number; immediate?: boolean; offset?: number },
  ) => {
    if (current) current.scrollTo(target, options);
    else if (typeof target === "number")
      window.scrollTo({ top: target, behavior: "instant" });
  },
};

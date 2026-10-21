"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setSmoothScroll } from "@/hooks/scrollController";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const instance = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const lenis = new Lenis({
      autoRaf: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      lerp: 0.1,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      smoothWheel: !preference.matches,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
      prevent: (element) =>
        element.tagName === "TEXTAREA" || element.hasAttribute("data-native-scroll"),
    });
    instance.current = lenis;
    setSmoothScroll(lenis);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const unsubscribe = lenis.on("scroll", ScrollTrigger.update);
    const resize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", resize, { passive: true });
    const changePreference = () => {
      lenis.options.smoothWheel = !preference.matches;
    };
    const anchor = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        "a[href]",
      );
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download"))
        return;
      const url = new URL(link.href, location.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        (!url.hash && !link.getAttribute("href")?.endsWith("#"))
      )
        return;
      let target: HTMLElement | number;
      if (!url.hash || url.hash === "#top") target = 0;
      else {
        try {
          const element = document.getElementById(decodeURIComponent(url.hash.slice(1)));
          if (!element) return;
          target = element;
        } catch {
          return;
        }
      }
      event.preventDefault();
      lenis.scrollTo(target, {
        offset: typeof target === "number" ? 0 : -90,
        duration: 1.2,
        immediate: preference.matches,
      });
      history.replaceState(null, "", url.hash);
    };
    document.addEventListener("click", anchor);
    preference.addEventListener("change", changePreference);
    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", anchor);
      preference.removeEventListener("change", changePreference);
      unsubscribe();
      gsap.ticker.remove(tick);
      setSmoothScroll(undefined);
      instance.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Discard the previous page's wheel momentum without overriding Next's scroll restoration.
    const frame = requestAnimationFrame(() => {
      const lenis = instance.current;
      if (!lenis) return;
      lenis.start();
      lenis.resize();
      lenis.scrollTo(window.scrollY, { immediate: true, force: true });
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return children;
}

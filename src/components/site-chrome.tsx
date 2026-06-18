"use client";

import { useEffect } from "react";

/**
 * Client-side visual chrome shared across every page:
 *  - custom green cursor (dot + ring that expands over interactive elements)
 *  - reveal-on-scroll via IntersectionObserver for any `.reveal` element
 *  - adds `.js-loaded` so reveal styling only hides content when JS is active
 *
 * Renders the fixed noise overlay + cursor nodes; everything is pointer-events:none.
 */
export default function SiteChrome() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-loaded");

    // ---- Reveal on scroll ----
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealEls.forEach((el) => observer.observe(el));

    // ---- Custom cursor (fine pointers only) ----
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let dot: HTMLElement | null = null;
    let ring: HTMLElement | null = null;
    let rafId = 0;
    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      root.classList.add("cursor-ready");
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], select, input, .lift-card",
      );
      root.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    if (finePointer) {
      dot = document.querySelector(".cursor-dot");
      ring = document.querySelector(".cursor-ring");
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseover", onOver, { passive: true });
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
      root.classList.remove("cursor-ready", "cursor-hover");
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
    </>
  );
}

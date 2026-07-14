"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const field = document.querySelector<HTMLElement>(".flow-field");

    if (!hero || !field) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;

    const resetTilt = () => {
      cancelAnimationFrame(frame);
      hero.style.setProperty("--field-shift-x", "0px");
      hero.style.setProperty("--field-shift-y", "0px");
      hero.style.setProperty("--field-tilt-x", "0deg");
      hero.style.setProperty("--field-tilt-y", "0deg");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || !finePointer.matches) return;

      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero.style.setProperty("--field-shift-x", `${(x * 10).toFixed(2)}px`);
        hero.style.setProperty("--field-shift-y", `${(y * 7).toFixed(2)}px`);
        hero.style.setProperty("--field-tilt-x", `${(-y * 2.2).toFixed(2)}deg`);
        hero.style.setProperty("--field-tilt-y", `${(x * 3.2).toFixed(2)}deg`);
      });
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        field.dataset.active = String(entry.isIntersecting);
      },
      { threshold: 0.04 },
    );

    const handleMotionPreference = () => {
      if (reducedMotion.matches) resetTilt();
    };

    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", resetTilt);
    reducedMotion.addEventListener("change", handleMotionPreference);
    visibilityObserver.observe(field);

    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", resetTilt);
      reducedMotion.removeEventListener("change", handleMotionPreference);
      visibilityObserver.disconnect();
    };
  }, []);

  return null;
}

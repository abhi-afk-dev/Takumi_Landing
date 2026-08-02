import { useEffect, useRef } from "react";

export function useHeroTilt() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const tiltRefs = useRef([]); // array of elements to tilt

  const registerTilt = (el) => {
    if (el && !tiltRefs.current.includes(el)) tiltRefs.current.push(el);
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const section = sectionRef.current;
    if (!section || reduceMotion) return;

    function onMove(e) {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (glowRef.current) {
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      tiltRefs.current.forEach((el) => {
        el.style.transition = "transform 0.1s ease-out";
        el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;
      });
    }

    function onLeave() {
      tiltRefs.current.forEach((el) => {
        el.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.transform =
          "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      });
    }

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return { sectionRef, glowRef, registerTilt };
}

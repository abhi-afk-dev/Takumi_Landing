import { useEffect, useRef } from "react";

export function useTextScramble(finalString, delay = 400) {
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const el = ref.current;
    if (!el || reduceMotion) return;

    const chars = "!<>-_\\/[]{}—=+*^?#_010101110";
    let iteration = 0;
    let interval;

    const timeout = setTimeout(() => {
      const width = el.offsetWidth;
      el.style.minWidth = `${width}px`;

      interval = setInterval(() => {
        el.innerText = finalString
          .split("")
          .map((char, index) => {
            if (index < iteration) return finalString[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iteration >= finalString.length) {
          clearInterval(interval);
          el.style.minWidth = "auto";
        }
        iteration += 1 / 2.5;
      }, 28);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [finalString, delay]);

  return ref;
}

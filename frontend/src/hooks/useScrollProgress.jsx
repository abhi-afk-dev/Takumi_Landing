import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const scrolled =
        h.scrollHeight > h.clientHeight
          ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
          : 0;
      setProgress(scrolled);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}

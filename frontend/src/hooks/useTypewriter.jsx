import { useEffect, useRef, useState } from "react";

export function useTypewriter(lines, speed = 20, lineGap = 260) {
  const triggerRef = useRef(null);
  const [typedLines, setTypedLines] = useState(lines.map(() => ""));
  const [doneLines, setDoneLines] = useState(lines.map(() => false));
  const startedRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const el = triggerRef.current;
    if (!el) return;

    function start() {
      if (startedRef.current) return;
      startedRef.current = true;

      if (reduceMotion) {
        setTypedLines(lines);
        setDoneLines(lines.map(() => true));
        return;
      }

      let li = 0;
      function nextLine() {
        if (li >= lines.length) return;
        const full = lines[li];
        let ci = 0;
        const iv = setInterval(() => {
          ci++;
          setTypedLines((prev) => {
            const next = [...prev];
            next[li] = full.slice(0, ci);
            return next;
          });
          if (ci >= full.length) {
            clearInterval(iv);
            setDoneLines((prev) => {
              const next = [...prev];
              next[li] = true;
              return next;
            });
            li++;
            setTimeout(nextLine, lineGap);
          }
        }, speed);
      }
      nextLine();
    }

    if (!("IntersectionObserver" in window)) {
      start();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { triggerRef, typedLines, doneLines };
}

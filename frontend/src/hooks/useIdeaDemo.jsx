import { useRef, useState } from "react";

export function useIdeaDemo() {
  const [idea, setIdea] = useState("");
  const [lines, setLines] = useState([]);
  const [showCta, setShowCta] = useState(false);
  const [running, setRunning] = useState(false);
  const timeouts = useRef([]);

  function run() {
    if (running) return;
    const value = idea.trim() || "your idea";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const stagger = reduceMotion ? 0 : 1;

    setRunning(true);
    setLines([]);
    setShowCta(false);

    const steps = [
      { text: `> Reading brief: "${value}"`, delay: 0 },
      { text: `> Tech Lead scoping the architecture...`, delay: 900 * stagger },
      {
        text: `> Assigning Frontend, Backend & DevOps agents...`,
        delay: 1800 * stagger,
      },
      {
        text: `> Estimated first build: tonight`,
        delay: 2700 * stagger,
        ok: true,
      },
    ];

    steps.forEach((s) => {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, s]);
      }, s.delay);
      timeouts.current.push(t);
    });

    const finalT = setTimeout(() => {
      setShowCta(true);
      setRunning(false);
    }, 3400 * stagger);
    timeouts.current.push(finalT);
  }

  return {
    idea,
    setIdea,
    lines,
    showCta,
    running,
    run,
    resolvedIdea: idea.trim() || "your idea",
  };
}

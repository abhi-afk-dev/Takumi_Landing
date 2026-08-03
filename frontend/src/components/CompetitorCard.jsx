import { useState, useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";

// --- PRE-COMPUTED GEOMETRY & DATA (Calculated once outside render cycle) ---
const SIZE = 440;
const CENTER = SIZE / 2;
const RADIUS = 140;
const NODE_R = 40;

const COMPETITORS = [
  {
    name: "Claude Code",
    angle: -45,
    line: "One generalist agent you steer yourself. Takumi is a team that already knows its job.",
  },
  {
    name: "Cursor",
    angle: 45,
    line: "Built for developers driving an IDE. Takumi is for builders who'd rather describe the product.",
  },
  {
    name: "Lovable",
    angle: 135,
    line: "One AI, one long conversation. Takumi splits the work across specialists who don't lose context.",
  },
  {
    name: "Rork",
    angle: -135,
    line: "Ships native iOS and Android. Takumi stays on the web — dashboards, tools, and APIs.",
  },
].map((item) => {
  const rad = (item.angle * Math.PI) / 180;
  const x = CENTER + RADIUS * Math.cos(rad);
  const y = CENTER + RADIUS * Math.sin(rad);
  return {
    ...item,
    x,
    y,
    shortName: item.name.split(" ")[0],
    path: `M${x},${y} L${CENTER},${CENTER}`,
  };
});

// --- STYLES EXTRACTED OUTSIDE COMPONENT ---
const Styles = () => (
  <style>{`
    @keyframes cc-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-7px); }
    }
    @keyframes cc-core-breathe {
      0%, 100% { filter: drop-shadow(0 0 8px rgba(255,255,255,0.25)); transform: scale(1); }
      50% { filter: drop-shadow(0 0 22px rgba(255,255,255,0.6)); transform: scale(1.02); }
    }
    @keyframes cc-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes cc-spin-reverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    @keyframes cc-ring-expand {
      0% { transform: scale(0.8); opacity: 0; }
      25% { opacity: 1; }
      100% { transform: scale(1.7); opacity: 0; }
    }
    @keyframes cc-data-flow {
      to { stroke-dashoffset: -36; }
    }
    @keyframes cc-packet-shoot {
      0% { offset-distance: 0%; opacity: 0; transform: scale(0.5); }
      20%, 80% { opacity: 1; transform: scale(1.2); }
      100% { offset-distance: 100%; opacity: 0; transform: scale(0.5); }
    }

    .cc-node-g { transform-box: fill-box; transform-origin: center; }
    .cc-float { animation: cc-float 5s ease-in-out infinite; }
    .cc-core { transform-box: fill-box; transform-origin: center; animation: cc-core-breathe 4s ease-in-out infinite; }
    .cc-spin-slow { transform-box: fill-box; transform-origin: center; animation: cc-spin 14s linear infinite; }
    .cc-spin-fast-rev { transform-box: fill-box; transform-origin: center; animation: cc-spin-reverse 8s linear infinite; }
    .cc-active-target { transform-box: fill-box; transform-origin: center; animation: cc-spin 4s linear infinite; }
    .cc-active-ring { transform-box: fill-box; transform-origin: center; animation: cc-ring-expand 2.2s cubic-bezier(0.1,0.8,0.3,1) infinite; }
    .cc-stream-active { animation: cc-data-flow 0.75s linear infinite; }
    .cc-comet { fill: url(#comet-gradient); transform-box: fill-box; transform-origin: center; animation: cc-packet-shoot 1.4s cubic-bezier(0.4,0,0.2,1) infinite; }
  `}</style>
);

export default function CompetitorCompare() {
  const [titleRef, titleInView] = useReveal();
  const [diagramRef, diagramInView] = useReveal(0.3);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  ).current;

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % COMPETITORS.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  const activeComp = COMPETITORS[active];

  return (
    <section
      className="relative bg-black overflow-hidden py-[clamp(64px,9vw,112px)] select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Styles />

      {/* Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "center top",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-7">
        {/* Header Tag */}
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 mb-4 font-semibold flex items-center gap-2.5">
          <span className="w-3.5 h-[1.5px] bg-white/70 block" />
          HOW TAKUMI COMPARES
        </p>

        {/* Header Title */}
        <h2
          ref={titleRef}
          className={`font-display font-extrabold text-[clamp(28px,3.6vw,44px)] tracking-[-0.01em] leading-[1.12] text-white transition-all duration-700 ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          Same category, different unit of work.
        </h2>

        <div className="mt-14 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ORBIT DIAGRAM CANVAS */}
          <div
            ref={diagramRef}
            className={`relative w-full max-w-[420px] flex-shrink-0 transition-all duration-700 ${
              diagramInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              width="100%"
              className="overflow-visible"
            >
              <defs>
                <filter
                  id="core-glow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient
                  id="comet-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Connecting Lines */}
              {COMPETITORS.map((c, i) => {
                const isActive = active === i;
                return (
                  <g key={`line-${c.name}`}>
                    <line
                      x1={CENTER}
                      y1={CENTER}
                      x2={c.x}
                      y2={c.y}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={CENTER}
                      y1={CENTER}
                      x2={c.x}
                      y2={c.y}
                      stroke="#fff"
                      strokeWidth={isActive ? 2 : 0}
                      strokeDasharray="4 8"
                      className={`transition-opacity duration-300 ${isActive ? "opacity-40 cc-stream-active" : "opacity-0"}`}
                    />
                  </g>
                );
              })}

              {/* Active Traveling Packet */}
              <ellipse
                key={`comet-${active}`}
                rx="10"
                ry="3"
                className="cc-comet"
                style={{ offsetPath: `path("${activeComp.path}")` }}
              />

              {/* CENTER NODE: TAKUMI */}
              <g className="cc-core">
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r="62"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1"
                  strokeDasharray="2 6"
                  className="cc-spin-slow"
                />
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r="52"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="12 8"
                  className="cc-spin-fast-rev"
                />
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r="44"
                  fill="rgba(15,15,18,0.95)"
                  stroke="#fff"
                  strokeWidth="2"
                  filter="url(#core-glow)"
                />
                <text
                  x={CENTER}
                  y={CENTER + 4}
                  textAnchor="middle"
                  className="font-mono"
                  style={{
                    fill: "#fff",
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                  }}
                >
                  TAKUMI
                </text>
              </g>

              {/* COMPETITOR NODES */}
              {COMPETITORS.map((c, i) => {
                const isActive = active === i;
                return (
                  <g
                    key={c.name}
                    className="cc-node-g cc-float"
                    style={{ animationDelay: `${i * 0.6}s`, cursor: "pointer" }}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") && setActive(i)
                    }
                    role="button"
                    tabIndex={0}
                    aria-label={`Compare with ${c.name}`}
                  >
                    {isActive && (
                      <g aria-hidden="true">
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r={NODE_R}
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.5"
                          className="cc-active-ring"
                        />
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r={NODE_R + 6}
                          fill="none"
                          stroke="rgba(255,255,255,0.35)"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          className="cc-active-target"
                        />
                      </g>
                    )}
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={NODE_R}
                      fill={
                        isActive
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(10,10,10,0.85)"
                      }
                      stroke={isActive ? "#fff" : "rgba(255,255,255,0.2)"}
                      strokeWidth={isActive ? 2 : 1}
                      className="transition-all duration-300"
                    />
                    <text
                      x={c.x}
                      y={c.y + 4}
                      textAnchor="middle"
                      className="font-mono transition-colors duration-300"
                      style={{
                        fill: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                        fontSize: 11,
                        fontWeight: isActive ? 700 : 500,
                      }}
                    >
                      {c.shortName}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* TEXT COMPARISON CARD (Zero Layout-Shift Stack) */}
          <div className="flex-1 w-full flex flex-col justify-between">
            {/* CSS Grid Overlay Trick: Fits height naturally to content */}
            <div className="grid grid-cols-1 grid-rows-1 w-full">
              {COMPETITORS.map((c, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={`card-${c.name}`}
                    className={`col-start-1 row-start-1 transition-all duration-500 cubic-bezier(0.16,1,0.3,1) ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto blur-none z-10"
                        : "opacity-0 translate-y-4 pointer-events-none blur-xs z-0"
                    }`}
                  >
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-white/40 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                      VS {c.name}
                    </div>
                    <p className="font-display font-medium text-[clamp(21px,2.4vw,30px)] leading-[1.38] text-white mt-3">
                      {c.line}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Accessible Progress Switcher */}
            <div className="flex items-center gap-2.5 mt-8">
              {COMPETITORS.map((c, i) => (
                <button
                  key={`btn-${c.name}`}
                  onClick={() => setActive(i)}
                  aria-label={`Show comparison with ${c.name}`}
                  aria-pressed={i === active}
                  className="group relative py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                >
                  <span
                    className={`block h-1 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        : "w-4 bg-white/20 group-hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useReveal } from "../hooks/useReveal";
import { useHeroTilt } from "../hooks/useHeroTilt";
import { useTextScramble } from "../hooks/useTextScramble";
import { useIdeaDemo } from "../hooks/useIdeaDemo";

const nodes = [
  {
    cx: 70,
    cy: 170,
    r: 8,
    label: "Idea",
    labelY: 200,
    dur: "3.4s",
    floatDelay: "-0.2s",
    pingDelay: "0.3s",
  },
  {
    cx: 210,
    cy: 170,
    r: 8,
    label: "Tech Lead",
    labelY: 200,
    dur: "3.8s",
    floatDelay: "-1.1s",
    pingDelay: "1.4s",
  },
  {
    cx: 380,
    cy: 80,
    r: 7,
    label: "Frontend",
    labelY: 60,
    dur: "3.2s",
    floatDelay: "-0.6s",
    pingDelay: "2.6s",
  },
  {
    cx: 380,
    cy: 170,
    r: 7,
    label: "Backend",
    labelY: 200,
    dur: "4s",
    floatDelay: "-2s",
    pingDelay: "2.65s",
  },
  {
    cx: 380,
    cy: 260,
    r: 7,
    label: "DevOps",
    labelY: 290,
    dur: "3.6s",
    floatDelay: "-1.5s",
    pingDelay: "2.7s",
  },
];

const paths = [
  {
    d: "M70,170 C140,170 140,170 210,170",
    delay: "0.15s",
    packetDelay: "0.4s",
  },
  { d: "M210,170 C280,170 300,80 380,80", delay: "0.35s", packetDelay: "1.6s" },
  {
    d: "M210,170 C280,170 280,170 380,170",
    delay: "0.45s",
    packetDelay: "1.65s",
  },
  {
    d: "M210,170 C280,170 300,260 380,260",
    delay: "0.55s",
    packetDelay: "1.7s",
  },
  { d: "M380,80 C460,80 480,166 560,166", delay: "0.85s", packetDelay: "2.9s" },
  {
    d: "M380,170 C460,170 460,166 560,166",
    delay: "0.95s",
    packetDelay: "2.95s",
  },
  { d: "M380,260 C460,260 480,166 560,166", delay: "1.05s", packetDelay: "3s" },
];

function HeroVisual() {
  return (
    <div className="max-w-[760px] mx-auto px-2.5" aria-hidden="true">
      <svg viewBox="0 0 640 340" width="100%">
        {paths.map((p, i) => (
          <path
            key={i}
            className="flow-path"
            d={p.d}
            style={{ animationDelay: p.delay }}
          />
        ))}
        {paths.map((p, i) => (
          <circle
            key={i}
            className="flow-packet"
            r="3.5"
            style={{
              offsetPath: `path("${p.d}")`,
              animationDelay: p.packetDelay,
            }}
          />
        ))}
        {nodes.map((n, i) => (
          <g
            key={i}
            className="flow-node"
            style={{ animationDuration: n.dur, animationDelay: n.floatDelay }}
          >
            <circle
              className="node-ping"
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              style={{ animationDelay: n.pingDelay }}
            />
            <circle
              className="node-core"
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              style={{ animationDelay: n.pingDelay }}
            />
            <text x={n.cx} y={n.labelY} textAnchor="middle">
              {n.label}
            </text>
          </g>
        ))}
        <g
          className="flow-node"
          style={{ animationDuration: "4.2s", animationDelay: "-0.9s" }}
        >
          <ellipse
            className="cube-ring ring-1"
            cx="560"
            cy="166"
            rx="22"
            ry="11"
          />
          <ellipse
            className="cube-ring ring-2"
            cx="560"
            cy="166"
            rx="30"
            ry="15"
          />
          <g className="final-cube">
            <polygon
              className="cube-face top"
              points="560,150 574,158 560,166 546,158"
            />
            <polygon
              className="cube-face left"
              points="546,158 560,166 560,182 546,174"
            />
            <polygon
              className="cube-face right"
              points="560,166 574,158 574,174 560,182"
            />
          </g>
          <text x="560" y="210" textAnchor="middle">
            Shipped
          </text>
        </g>
      </svg>
      <p className="text-center mt-6 sm:mt-8 font-mono text-[11px] sm:text-xs font-semibold text-ash-dim tracking-wide px-4">
        One idea in → four agents build → one product ships
      </p>
    </div>
  );
}

export default function Hero() {
  const [revealRef, inView] = useReveal();
  const { sectionRef, glowRef, registerTilt } = useHeroTilt();
  const scrambleRef = useTextScramble("dev team", 400);
  const { idea, setIdea, lines, showCta, running, run, resolvedIdea } =
    useIdeaDemo();

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      run();
    }
  }

  return (
    <section
      ref={sectionRef}
      id="heroSection"
      className="relative overflow-hidden pt-8 md:pt-12 lg:pt-28 pb-8 sm:pb-10"
      style={{ perspective: "1200px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.3) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "center top",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <div
        ref={glowRef}
        className="hidden sm:block absolute w-[600px] h-[600px] rounded-full pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 60%)",
        }}
      />

      <div
        aria-hidden="true"
        className="breathe-glow absolute -top-[10%] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[400px] sm:h-[500px] md:h-[600px] blur-[40px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, transparent 70%)",
        }}
      />

      <div
        ref={revealRef}
        className={`relative z-[2] text-center max-w-[760px] mx-auto px-5 sm:px-7 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
        }`}
      >
        <p className="font-mono text-[10px] sm:text-[11.5px] tracking-[0.16em] uppercase text-ash mb-3 sm:mb-4 font-bold">
          AI ENGINEERING, ORCHESTRATED
        </p>

        <h1 className="font-display font-extrabold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[74px] tracking-[-0.03em] leading-[1.06] sm:leading-[1.04] text-paper mb-4 sm:mb-5">
          Hire an AI{" "}
          <span
            ref={scrambleRef}
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(100deg, #000 12%, #666 88%)",
            }}
          >
            dev team
          </span>
        </h1>

        <p className="text-[15px] sm:text-[17px] md:text-[19px] text-ash max-w-[600px] mx-auto mb-6 sm:mb-8 leading-relaxed font-medium px-2">
          Cursor is for developers. Takumi is for builders. Describe your app,
          and your AI team handles the full tech stack.
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <a
            href="https://app.takumi.run/login"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-2 bg-black text-white font-mono font-semibold uppercase tracking-wide text-[13px] sm:text-sm px-6 sm:px-[30px] py-3 sm:py-[15px] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-6px_rgba(0,0,0,0.35)] hover:bg-[#222] transition-all duration-300"
          >
            Join Alpha
          </a>
          <a
            href="#squad"
            className="font-mono text-[13px] font-semibold text-ash inline-flex items-center gap-1.5 hover:text-paper hover:gap-2.5 transition-all"
          >
            Meet the team ↓
          </a>
        </div>

        <div
          ref={registerTilt}
          className="mt-7 sm:mt-9 max-w-[560px] mx-auto"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <p className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wide uppercase text-ash-dim text-center mb-2.5">
            Try it — no signup needed
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:bg-white sm:p-2 sm:rounded-xl sm:shadow-md sm:border sm:border-hairline">
            <input
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onKeyDown={onKeyDown}
              maxLength={64}
              placeholder="e.g. a marketplace for vintage cameras"
              aria-label="Describe your app idea"
              className="flex-1 min-w-0 bg-white sm:bg-transparent border border-hairline sm:border-none rounded-lg sm:rounded-none shadow-sm sm:shadow-none px-4 py-3 sm:py-[13px] font-mono text-[13px] sm:text-[13.5px] font-medium text-paper placeholder:text-ash-dim focus:outline-none"
            />
            <button
              type="button"
              disabled={running}
              onClick={run}
              className="w-full sm:w-auto justify-center flex-shrink-0 px-[18px] py-3 sm:py-[13px] text-[11px] sm:text-xs bg-black text-white font-mono font-semibold uppercase tracking-wide rounded-lg disabled:opacity-70 disabled:cursor-default transition-all inline-flex items-center gap-2"
            >
              {running
                ? "Assembling…"
                : lines.length
                  ? "Try another idea →"
                  : "Assemble my team →"}
            </button>
          </div>

          {lines.length > 0 && (
            <div className="mt-3 text-left">
              {lines.map((l, i) => (
                <p
                  key={i}
                  className={`font-mono text-[12px] sm:text-[13px] font-medium pt-1.5 px-0.5 break-words ${
                    l.ok ? "text-black font-bold" : "text-ash"
                  }`}
                >
                  {l.text}
                </p>
              ))}

              {showCta && (
                <div className="mt-3.5 p-4 bg-white border border-hairline rounded-lg shadow-sm font-mono text-[12px] sm:text-[13px] font-medium text-ash flex items-center gap-3.5 flex-wrap text-left">
                  <span className="break-words">
                    Your team is ready to build{" "}
                    <strong className="text-paper font-bold break-words">
                      {resolvedIdea}
                    </strong>
                    .
                  </span>
                  <a
                    href="https://app.takumi.run/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-[11px] bg-black text-white font-mono font-semibold uppercase tracking-wide rounded-lg"
                  >
                    Join Alpha to start →
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mt-6 sm:mt-7 font-mono text-[11px] sm:text-[12.5px] font-semibold tracking-wide text-ash-dim">
          <span>4 AI agents</span>
          <span className="text-hairline-strong">·</span>
          <span>Own your code</span>
          <span className="text-hairline-strong">·</span>
          <span>Free to start</span>
        </div>
      </div>

      <div ref={registerTilt} className="relative z-[2] mt-6 md:mt-10 px-2">
        <HeroVisual />
      </div>
    </section>
  );
}

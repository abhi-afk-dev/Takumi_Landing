import { useReveal } from "../hooks/useReveal";

const cards = [
  {
    icon: "◇",
    title: "# No-code builders",
    status: "STATUS: NO OWNERSHIP",
    statusClass: "text-[#888]",
    copy: "Great for landing pages. Breaks down the moment your logic gets real.",
  },
  {
    icon: "▤",
    title: "# AI coding assistants",
    status: "STATUS: HIGH FRICTION",
    statusClass: "text-[#555]",
    copy: "You own the code — but you're still the engineer managing the build, alone.",
  },
  {
    icon: "◈",
    title: "# Takumi",
    status: "STATUS: FULL ORCHESTRATION",
    statusClass: "text-black",
    copy: "Production-ready code, managed like a team, in plain English. You're the architect.",
    highlight: true,
  },
];

function CompareCard({ card, delay }) {
  const [ref, inView] = useReveal();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`flex-1 w-full rounded-2xl border p-[30px_26px_34px] transition-all duration-700 shadow-md hover:-translate-y-1.5 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
      } ${
        card.highlight
          ? "relative border-hairline-strong bg-gradient-to-b from-[#f0f0ec] to-[#e8e8e5] before:content-[''] before:absolute before:top-0 before:left-6 before:right-6 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-black before:to-transparent"
          : "border-hairline bg-gradient-to-b from-white to-[#fafafa]"
      }`}
    >
      <div className="w-[42px] h-[42px] flex items-center justify-center border border-hairline-strong rounded-[10px] text-lg font-bold text-black bg-gradient-to-br from-white to-[#e8e8e8] shadow-sm mb-[22px]">
        {card.icon}
      </div>
      <h3 className="font-mono text-xl lg:text-lg font-bold text-paper mb-2.5">
        {card.title}
      </h3>
      <p
        className={`font-mono text-sm lg:text-xs font-bold tracking-wide uppercase mb-4 flex items-center gap-1.5 ${card.statusClass}`}
      >
        {card.highlight && <span className="dot-pulse" />}
        {card.status}
      </p>
      <p className="text-ash text-lg lg:text-sm font-medium leading-relaxed">
        {card.copy}
      </p>
    </article>
  );
}

export default function Compare() {
  const [titleRef, titleInView] = useReveal();

  return (
    <section
      id="compare"
      className="bg-white border-y border-hairline shadow-[0_10px_40px_-10px_rgba(0,0,0,0.02)] py-[clamp(60px,9vw,108px)]"
    >
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="font-mono text-sm md:text-xs tracking-[0.16em] uppercase text-ash mb-4 font-bold flex items-center gap-2 before:content-[''] before:w-3.5 before:h-0.5 before:bg-black">
          COMPARISON
        </p>
        <h2
          ref={titleRef}
          className={`font-display text-4xl font-extrabold md:text-[clamp(28px,3.6vw,44px)] tracking-[-0.01em] leading-[1.12] text-paper transition-all duration-700 ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[22px]"
          }`}
        >
          Why Takumi?
        </h2>
        <div className="flex flex-col lg:flex-row gap-[18px] mt-10">
          {cards.map((card, i) => (
            <CompareCard key={card.title} card={card} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

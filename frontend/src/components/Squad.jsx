import { useReveal } from "../hooks/useReveal";
import { useTypewriter } from "../hooks/useTypewriter";

const logLines = [
  "> Analyzing market fit...",
  "> Translating vision to specs...",
  "> Writing API documentation...",
  "> Orchestrating build agents...",
];

const squadMembers = [
  {
    icon: "▦",
    title: "The Builder",
    copy: "Specialized React and Python agents that write your UI and backend logic simultaneously, line by line. Frontend and backend, at the same time.",
  },
  {
    icon: "⌁",
    title: "The Fixer",
    copy: "Intercepts stack traces and patches bugs autonomously. You never even see the error. Ships clean. Stays clean.",
  },
];

function SquadCard({ member, delay }) {
  const [ref, inView] = useReveal();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      // Added flex-1 and w-full so the cards share the row equally on desktop
      className={`flex-1 w-full rounded-2xl border border-hairline bg-gradient-to-b from-white to-[#fafafa] shadow-md p-[34px] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-lg ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
      }`}
    >
      <div className="w-[42px] h-[42px] flex items-center justify-center border border-hairline-strong rounded-[10px] text-lg font-bold text-black bg-gradient-to-br from-white to-[#e8e8e8] shadow-sm mb-[22px]">
        {member.icon}
      </div>
      <h3 className="font-display font-extrabold text-2xl mb-3">
        {member.title}
      </h3>
      <p className="text-ash text-md font-medium leading-relaxed">
        {member.copy}
      </p>
    </article>
  );
}

export default function Squad() {
  const [titleRef, titleInView] = useReveal();
  const [leadRef, leadInView] = useReveal();
  const { triggerRef, typedLines } = useTypewriter(logLines, 20, 260);

  return (
    <section id="squad" className="py-[clamp(60px,9vw,108px)]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-ash mb-4 font-bold flex items-center gap-2 before:content-[''] before:w-3.5 before:h-0.5 before:bg-black">
          THE TEAM
        </p>
        <h2
          ref={titleRef}
          className={`font-display font-extrabold text-[clamp(28px,3.6vw,44px)] tracking-[-0.01em] leading-[1.12] text-paper transition-all duration-700 mb-[18px] ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[22px]"
          }`}
        >
          Meet the squad.
        </h2>

        <article
          ref={(el) => {
            leadRef.current = el;
            triggerRef.current = el;
          }}
          // Swapped grid for flex flex-col md:flex-row
          className={`rounded-2xl border border-hairline bg-gradient-to-b from-white to-[#fafafa] shadow-md p-[34px] flex flex-col md:flex-row gap-10 items-center mb-[18px] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-lg ${
            leadInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[22px]"
          }`}
        >
          {/* Added flex-[1.1] w-full to replace the 1.1fr grid column */}
          <div className="flex-[1.1] w-full">
            <div className="w-[42px] h-[42px] flex items-center justify-center border border-hairline-strong rounded-[10px] text-lg font-bold text-black bg-gradient-to-br from-white to-[#e8e8e8] shadow-sm mb-[22px]">
              ◈
            </div>
            <h3 className="font-display font-extrabold text-2xl mb-3">
              The Tech Lead
            </h3>
            <p className="text-ash text-md font-medium leading-relaxed">
              From raw idea to deployed product. They research, spec, and
              orchestrate the entire build. Think of them as your CTO.
            </p>
          </div>

          {/* Added flex-1 w-full to replace the 1fr grid column */}
          <div className="flex-1 w-full font-mono text-[13px] font-semibold text-ash bg-[#f4f4f4] border border-hairline rounded-lg p-[20px_22px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            {logLines.map((_, i) => (
              <p key={i} className="opacity-70 mb-2.5 last:mb-0 min-h-[1.4em]">
                {typedLines[i]}
              </p>
            ))}
          </div>
        </article>

        {/* Swapped grid for flex flex-col md:flex-row */}
        <div className="flex flex-col md:flex-row gap-[18px]">
          {squadMembers.map((member, i) => (
            <SquadCard key={member.title} member={member} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

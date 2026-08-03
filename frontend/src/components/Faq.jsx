export default function Faq() {
  const faqs = [
    {
      q: "How is this different from Claude Code / Cursor / Devin?",
      a: "Short answer: see the comparison above. Long answer: most tools give you one strong generalist you direct. Takumi gives you a team that already knows its own job.",
    },
    {
      q: "So it's just multiple prompts wrapped in a UI?",
      a: "Fair question for any agent product. Each agent stays scoped to its own role with persistent context, so a backend change doesn't get lost two hours into a frontend conversation.",
    },
    {
      q: "Why would I pay for this over just using Claude/GPT directly?",
      a: "You wouldn't, for small one-off tasks. Takumi is for when you want a persistent, role-divided team on one project over time — not a chat window you coordinate manually.",
    },
    {
      q: "Do I own the code?",
      a: "Yes. Every file Takumi writes lands in your own repository, not a black box you're locked into. Export or self-host whenever you want.",
    },
    {
      q: "What's actually free vs paid?",
      a: "Free gets you all 4 agents, 3 MVP builds/month, and 20 tasks/day per agent on lighter models — a sandbox to test the workflow. Pro (coming soon) unlocks stronger models and higher limits; hit your free limit and you're auto-added to the waitlist, no extra signup.",
    },
    {
      q: "Is this just for coding, or does it help with the actual startup building?",
      a: "Today the core is building the product itself. The longer-term vision is a fuller team for the whole solo-founder workload, but that's roadmap, not shipped yet.",
    },
  ];

  return (
    <section id="faq" className="py-[clamp(60px,9vw,108px)]">
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="font-mono text-[11.5px] tracking-widest uppercase text-[var(--ash)] mb-4 font-bold flex items-center justify-center gap-2">
          QUESTIONS
        </p>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.6vw,44px)] tracking-tight text-[var(--paper)] text-center mb-8">
          Before you jump in.
        </h2>

        <div className="max-w-[760px] mx-auto bg-white border border-[var(--hairline)] rounded-xl shadow-md px-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-[var(--hairline)] last:border-none"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-5 px-0.5 font-display font-extrabold text-[16.5px] text-[var(--paper)] [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex-shrink-0 font-mono font-medium text-[20px] text-black transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[var(--ash)] text-[14.5px] font-medium leading-[1.7] px-0.5 pb-6 max-w-[620px]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

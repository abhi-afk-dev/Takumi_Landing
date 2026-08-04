export default function StackMarquee() {
  const stack = [
    { glyph: "▲", name: "Next.js" },
    { glyph: "TS", name: "TypeScript" },
    { glyph: "≈", name: "Tailwind" },
    { glyph: "⬡", name: "Node.js" },
    { glyph: "◆", name: "Django" },
    { glyph: "▽", name: "Vue" },
    { glyph: "PG", name: "PostgreSQL" },
    { glyph: "◧", name: "MySQL" },
    { glyph: "⚡", name: "FastAPI" },
    { glyph: "▦", name: "Docker" },
    { glyph: "⑂", name: "Git" },
    { glyph: "⚛", name: "React" },
  ];

  // Doubled for seamless infinite scroll
  const marqueeItems = [...stack, ...stack];

  return (
    <section className="py-11 border-y border-hairline bg-white">
      <div className="max-w-[1180px] mx-auto px-7 text-center mb-7">
        <p className="font-mono text-sm md:text-xs tracking-widest uppercase text-ash mb-4 font-bold flex items-center justify-center gap-2">
          THE STACK
        </p>
        <p className="text-ash-dim text-md md:text-md font-semibold font-mono max-w-[440px] mx-auto">
          The same production tools your engineering team would choose by hand.
        </p>
      </div>

      <div className="overflow-hidden group [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[scroll-left_32s_linear_infinite] group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2.5 mr-3.5 border border-hairline rounded-full font-mono text-md md:text-sm font-semibold text-ash bg-white shadow-sm whitespace-nowrap"
            >
              <span className="text-black font-bold text-md md:text-sm">
                {item.glyph}
              </span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const navItems = [
  { href: "#compare", label: "Compare" },
  { href: "#squad", label: "Team" },
  { href: "#ship", label: "Ship" },
  { href: "#faq", label: "FAQ" },
  { href: "/docs", label: "Docs" },
];

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-[100] bg-ink/85 backdrop-blur-xl border-b border-hairline">
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[72px]">
        <a
          href="/"
          className="flex items-center gap-2.5 font-mono font-bold text-xl lg:text-lg text-paper"
        >
          <span className="w-[26px] h-[26px] flex items-center justify-center border-2 border-black rounded-md text-black text-xl md:text-lg font-extrabold">
            匠
          </span>
          takumi
        </a>

        <div className="flex items-center gap-7">
          <div className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-lg lg:text-sm font-semibold text-ash hover:text-paper transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="https://app.takumi.run/login"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-2 bg-black text-white font-mono font-semibold uppercase tracking-wide text-md md:text-sm px-5 py-[11px] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-6px_rgba(0,0,0,0.35)] hover:bg-[#222] transition-all duration-300 group"
          >
            <span
              className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-[20deg] transition-[left] duration-[650ms] ease-out group-hover:left-[125%] pointer-events-none"
              aria-hidden="true"
            />
            Join Alpha
          </a>
        </div>
      </div>
    </header>
  );
}

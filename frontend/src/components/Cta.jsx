export default function Cta() {
  return (
    <section className="relative text-center overflow-hidden py-[clamp(80px,11vw,130px)] border-t border-[var(--hairline)] bg-white">
      <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_70%)] blur-[50px] opacity-80 pointer-events-none animate-[breathe_7s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-7">
        <h2 className="font-display font-extrabold text-[clamp(32px,5vw,54px)] mb-4">
          Your team is ready<span className="text-black">.</span>
        </h2>
        <p className="text-[var(--ash)] text-[14.5px] font-medium mb-8">
          Ready to build{" "}
          <span className="font-bold text-[var(--paper)]">your idea</span>? Wake
          up to a working build.
        </p>

        <a
          href="/login"
          className="inline-flex bg-black text-white font-mono text-[14px] font-semibold uppercase tracking-wide py-3.5 px-8 rounded-md shadow-[0_4px_12px_var(--ember-glow)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-6px_rgba(0,0,0,0.35)] transition-all duration-250"
        >
          Join Alpha
        </a>

        <div className="flex items-center justify-center gap-2.5 flex-wrap mt-7 font-mono text-[12.5px] font-semibold tracking-wide text-[var(--ash-dim)]">
          <span>4 AI agents</span>
          <span className="text-[var(--hairline-strong)]">·</span>
          <span>Own your code</span>
          <span className="text-[var(--hairline-strong)]">·</span>
          <span>Free to start</span>
        </div>
      </div>
    </section>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="bg-white border-b border-hairline shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1180px] mx-auto flex items-center justify-center gap-3.5 flex-wrap px-7 py-2.5 text-center font-mono text-xs text-ash font-semibold">
        <span>
          Alpha is open — we onboard in small batches to keep build quality
          high.
        </span>
        <a
          href="https://app.takumi.run/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-bold whitespace-nowrap underline hover:text-ash-dim transition-colors"
        >
          Join now →
        </a>
      </div>
    </div>
  );
}

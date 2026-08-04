import { RxCross1 } from "react-icons/rx";

export default function LoginHeader() {
  return (
    <header className="w-full max-w-[1180px] mx-auto flex items-center justify-between px-5 sm:px-7 py-6">
      <a
        href="/"
        className="flex items-center gap-2.5 font-mono font-bold text-xl lg:text-lg text-paper"
      >
        <span className="w-[26px] h-[26px] flex items-center justify-center border-2 border-black rounded-md text-black text-xl md:text-lg font-extrabold">
          匠
        </span>
        takumi
      </a>
      <a
        href="https://takumi.run"
        aria-label="Close"
        className="w-12 h-12 flex items-center justify-center rounded-lg border border-hairline text-ash hover:text-paper hover:border-hairline-strong transition-colors"
      >
        <RxCross1 size={18} />
      </a>
    </header>
  );
}

import { PiShareNetwork } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { IoTerminalOutline } from "react-icons/io5";

function Why_Takumi() {
  return (
    <div className="flex flex-col border border-[#F4F4F5]/10 md:border-[#F4F4F5]/10 px-10 py-10 w-full justify-center items-center gap-15">
      {/* Header Section */}
      <div className="flex items-baseline gap-1">
        <h1 className="text-white text-start md:text-center text-4xl jet font-bold tracking-tight">
          Why Takumi<span className="text-[#F59E0B]">{"?"}</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        {/* CARD 1: No-Code */}
        <div className="group flex flex-col w-full xl:w-100 opacity-80 xl:min-h-[340px] bg-[#121212] border border-white/5 py-16 p-8 transition-colors duration-300">
          <div className="mb-6">
            <IoExtensionPuzzleOutline
              size={50}
              className="text-[#F4F4F5]/80  transition-colors duration-300"
            />
          </div>
          <h2 className="group jet text-2xl font-black mb-0.5 text-[#F4F4F5]/80 transition-colors duration-300">
            # Bubble / Emergent
          </h2>
          <span className="text-red-500/60 font-mono text-sm mb-4">
            STATUS: NO OWNERSHIP
          </span>
          <p className="text-[#F4F4F5]/60 text-lg leading-relaxed">
            Great for landing pages. Terrible for custom logic and scaling.
          </p>
        </div>

        {/* CARD 2: Coding Assistant */}
        <div className="group flex flex-col opacity-80 w-full xl:w-100 xl:min-h-[340px] bg-[#121212] border border-white/5 py-16 p-8 transition-colors duration-300">
          <div className="mb-6">
            <IoTerminalOutline
              size={50}
              className="text-[#F4F4F5]/80 transition-colors duration-300"
            />
          </div>
          <h2 className="group jet text-2xl font-black mb-0.5 text-[#F4F4F5]/80 transition-colors duration-300">
            # Cursor / Claude
          </h2>
          <span className="text-yellow-500/60 font-mono text-sm mb-4">
            STATUS: HIGH FRICTION
          </span>
          <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
            You own the code, but you still have to be an engineer to manage the
            build.{" "}
          </p>
        </div>

        {/* CARD 3: Takumi */}
        <div className="group flex flex-col w-full xl:w-100 xl:min-h-[340px] bg-[#121212] border-t-4 border-[#F59E0B]/25 hover:border-[#F59E0B] py-16 p-8 transition-colors duration-300">
          <div className="mb-6">
            <PiShareNetwork
              size={48}
              className="text-[#F4F4F5] group-hover:text-[#F59E0B] transition-colors duration-300"
            />
          </div>
          <h2 className="group jet text-2xl font-black mb-0.5 text-[#F4F4F5] transition-colors duration-300">
            <span className="text-[#F59E0B]">{"#"}</span> Takumi
          </h2>
          <span className="text-green-500/60 font-mono text-sm mb-4">
            STATUS: FULL ORCHESTRATION
          </span>
          <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
            Production-ready code, managed in plain English. You are the
            Architect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why_Takumi;

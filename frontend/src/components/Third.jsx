import { GiEdgedShield } from "react-icons/gi";
import { IoHammerOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

function Third() {
  return (
    <div className="flex flex-col border border-[#F4F4F5]/10 md:border-[#F4F4F5]/10 px-10 py-10 w-full justify-center items-center gap-15">
      {/* Header Section */}
      <div className="flex items-baseline gap-1">
        <h1 className="text-white text-center text-4xl jet font-bold tracking-tight">
          Meet The Squad<span className="text-[#F59E0B]">{"."}</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="flex px-0 xl:px-60 flex-col justify-center gap-10 md:gap-4">
        {/* CARD 1: MVP_ORCHESTRATOR */}
        <div className="group flex flex-col md:flex-row w-full justify-start md:justify-center gap-20 items-center min-h-[340px] bg-[#121212] border border-white/5 hover:border-[#F59E0B] p-8 transition-colors duration-300">
          <div className="group flex flex-col w-full md:w-1/2">
            <div className="mb-6">
              <LuBrain
                size={48}
                className="text-[#F4F4F5]/80 group-hover:text-[#F59E0B] transition-colors duration-300"
              />
            </div>
            <h2 className="text-white jet text-2xl font-bold mb-4">
              // The Tech Lead
            </h2>
            <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
              From raw idea to deployed product. They research, spec, and
              orchestrate the entire build. Think of them as your CTO.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-end items-start">
            <h1 className="text-[#F4F4F5]/70 group-hover:text-[#F4F4F5] text-start text-lg jet tracking-tight">
              <span className="text-[#F59E0B]">{">"}</span> Analyzing market
              fit...
            </h1>{" "}
            <h1 className="text-[#F4F4F5]/70 group-hover:text-[#F4F4F5] text-start text-lg jet tracking-tight">
              <span className="text-[#F59E0B]">{">"}</span> Translating vision
              to specs...
            </h1>{" "}
            <h1 className="text-[#F4F4F5]/70 group-hover:text-[#F4F4F5] text-start text-lg jet tracking-tight">
              <span className="text-[#F59E0B]">{">"}</span> Writing API
              documentation...
            </h1>{" "}
            <h1 className="text-[#F4F4F5]/70 group-hover:text-[#F4F4F5] text-start text-lg jet tracking-tight">
              <span className="text-[#F59E0B]">{">"}</span> Orchestrating build
              agents...
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center gap-10 md:gap-4">
          {/* CARD 2: BUILDER */}
          <div className="group flex flex-col w-full md:w-1/2 min-h-[340px] bg-[#121212] border border-white/5 hover:border-[#F59E0B] p-8 transition-colors duration-300">
            <div className="mb-6">
              <IoHammerOutline
                size={48}
                className="text-[#F4F4F5]/80 group-hover:text-[#F59E0B] transition-colors duration-300"
              />
            </div>
            <h2 className="text-white jet text-2xl font-bold mb-4">
              // The Builder
            </h2>
            <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
              Specialized React and Python agents that write your UI and backend
              logic simultaneously, line by line. Frontend and backend, at the
              same time.
            </p>
          </div>

          {/* CARD 3: AUTONOMOUS_OPS */}
          <div className="group flex flex-col w-full md:w-1/2 min-h-[340px] bg-[#121212] border border-white/5 hover:border-[#F59E0B] p-8 transition-colors duration-300">
            <div className="mb-6">
              <GiEdgedShield
                size={48}
                className="text-[#F4F4F5]/80 group-hover:text-[#F59E0B] transition-colors duration-300"
              />
            </div>
            <h2 className="text-white jet text-2xl font-bold mb-4">
              // The Fixer
            </h2>
            <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
              Intercepts stack traces and patches bugs autonomously. You never
              even see the error. Ships clean. Stays clean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;

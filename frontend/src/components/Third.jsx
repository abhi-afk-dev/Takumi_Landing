import { GiEdgedShield } from "react-icons/gi";
import { IoHammerOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

function Third() {
  return (
    <div className="flex flex-col border border-[#F4F4F5]/10 md:border-[#F4F4F5]/15 px-10 py-10 w-full justify-center items-center gap-15">
      {/* Header Section */}
      <div className="flex items-baseline gap-1">
        <h1 className="text-white text-start md:text-center text-4xl jet font-bold tracking-tight">
          Meet The Squad<span className="text-[#F59E0B]">{"."}</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        {/* CARD 1: MVP_ORCHESTRATOR */}
        <div className="group flex flex-col w-80 min-h-[340px] bg-[#121212] border border-white/5 hover:border-[#F59E0B] p-8 transition-colors duration-300">
          <div className="mb-6">
            <LuBrain
              size={48}
              className="text-[#F4F4F5]/80 group-hover:text-[#F59E0B] transition-colors duration-300"
            />
          </div>
          <h2 className="text-white jet text-xl font-bold mb-4">
            // MVP_ORCHESTRATOR
          </h2>
          <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
            The project lead. Converts ideas into technical specs, schemas, and
            API endpoints. It initializes the repo and delegates tasks to the
            specialist agents.
          </p>
        </div>

        {/* CARD 2: BUILDER */}
        <div className="group flex flex-col w-80 min-h-[340px] bg-[#121212] border border-white/5 hover:border-[#F59E0B] p-8 transition-colors duration-300">
          <div className="mb-6">
            <IoHammerOutline
              size={48}
              className="text-[#F4F4F5]/80 group-hover:text-[#F59E0B] transition-colors duration-300"
            />
          </div>
          <h2 className="text-white jet text-xl font-bold mb-4">// BUILDER</h2>
          <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
            Expert agents in React, Node, and Python. They write clean, modular
            code for both the UI and the server-side logic simultaneously.
          </p>
        </div>

        {/* CARD 3: AUTONOMOUS_OPS */}
        <div className="group flex flex-col w-80 min-h-[340px] bg-[#121212] border border-white/5 hover:border-[#F59E0B] p-8 transition-colors duration-300">
          <div className="mb-6">
            <GiEdgedShield
              size={48}
              className="text-[#F4F4F5]/80 group-hover:text-[#F59E0B] transition-colors duration-300"
            />
          </div>
          <h2 className="text-white jet text-xl font-bold mb-4">
            // AUTONOMOUS_OPS
          </h2>
          <p className="text-[#F4F4F5]/80 text-lg leading-relaxed">
            Handles Docker, deployment, and self-healing. If a build fails, this
            agent analyzes the stack trace and patches the code automatically.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Third;

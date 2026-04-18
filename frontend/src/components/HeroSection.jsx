import { useState, useRef } from "react";
import Interface from "../assets/interface.png";
import Button from "./Button.jsx";

function HeroSection({ onJoinClick }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x: `${x}px`, y: `${y}px` });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: "50%", y: "50%" });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-120 md:h-240 flex border border-[#F4F4F5]/10 md:border-[#F4F4F5]/10 flex-col items-center pt-12 md:pt-20 overflow-hidden"
    >
      <div className="absolute top-100 left-1/2 -translate-x-1/2 w-800 h-500 bg-[#F59E0B]/40 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div
        className="absolute w-50 h-50 bg-[#F59E0B]/60 blur-[100px] rounded-full pointer-events-none ease-out z-0"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          transitionDuration: isHovering ? "75ms" : "1500ms",
          transitionProperty: "left, top",
        }}
      ></div>
      <div className="z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto gap-4 md:gap-6 pointer-events-none">
        <h1 className="text-[#F4F4F5] text-3xl md:text-5xl jet text-center font-bold tracking-tight leading-tight">
          Hire an AI dev team{" "}
        </h1>

        <p className="text-[#F4F4F5]/80 text-lg md:text-2xl jet leading-relaxed max-w-4xl">
          Cursor is for developers. Takumi is for builders. Describe your app,
          and your AI team handles the full Tech stack.
        </p>

        <div className="flex flex-col items-center gap-3 mt-6 pointer-events-auto">
          <div onClick={onJoinClick} className="cursor-pointer">
            <Button />
          </div>
        </div>
      </div>

      <div className="z-10 mt-10 md:mt-16 w-full max-w-6xl px-4 pointer-events-auto">
        <div className="relative rounded-lg border border-white/10 bg-[#121212] overflow-hidden shadow-2xl shadow-black/50">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>

          <img
            src={Interface}
            alt="Takumi Interface"
            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
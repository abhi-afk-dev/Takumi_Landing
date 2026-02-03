import { useState, useRef } from "react";
import Button from "./Button";

function Fifth({ onJoinClick }) {
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
      className="relative overflow-hidden flex flex-col border border-[#F4F4F5]/10 md:border-[#F4F4F5]/15 py-20 w-full justify-center items-center gap-10 md:gap-20 group"
    >
      <div
        className="absolute w-[200px] h-[200px] bg-[#F59E0B]/80 rounded-full blur-[100px] pointer-events-none transition-all ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          transitionDuration: isHovering ? "75ms" : "500ms",
        }}
      ></div>

      <div className="flex justify-center z-10 relative pointer-events-none">
        <h1 className="w-full text-[#F4F4F5] text-center px-2 text-4xl jet font-bold ">
          Your team is ready<span className="text-[#F59E0B]">{"."}</span>
        </h1>
      </div>

      <div onClick={onJoinClick} className="cursor-pointer z-10 relative">
        <Button />
      </div>
    </div>
  );
}

export default Fifth;

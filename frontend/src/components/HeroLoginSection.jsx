import LiquidEther from '../components/LiquidEther';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { supabase } from "./supabaseClient";
import { useState, useRef } from "react";

function HeroLoginSection() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [isHovering, setIsHovering] = useState(false);

  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) console.error("GitHub login error:", error.message);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    if (error) console.error("Google login error:", error.message);
  };

  return (
    <div
      className="relative w-full h-160 md:h-240 flex border border-[#F4F4F5]/5 md:border-[#F4F4F5]/15 flex-col items-center md:pt-20 overflow-hidden"
    >
    {/* //   <div
    //     className="absolute w-50 h-50 bg-[#F59E0B]/40 blur-[100px] rounded-full pointer-events-none ease-out z-0"
    //     style={{
    //       left: position.x,
    //       top: position.y,
    //       transform: "translate(-50%, -50%)",
    //       transitionDuration: isHovering ? "75ms" : "1500ms",
    //       transitionProperty: "left, top",
    //     }}
      //   ></div> */}
        
    <div className="relative w-100 h-150 flex border border-[#F4F4F5]/10 md:border-[#F4F4F5]/15 flex-col items-center pt-12 md:pt-20 overflow-hidden">
      <div className="absolute top-6 right-6 w-full flex justify-end cursor-pointer">
        <a href="/">
          <RxCross1 size={30} />
        </a>
      </div>
      <div className="w-full flex flex-col px-8 items-center gap-10">
        <div className="flex items-end justify-center gap-2 cursor-pointer">
          <h2 className="text-2xl">Sign in to </h2>
          <h1 className="flex text-[#F59E0B] jet text-2xl md:text-3xl font-bold">
            匠
          </h1>
          <h1 className="text-2xl md:text-3xl jet tracking-tighter">takumi</h1>
        </div>
        <button
          onClick={handleGitHubLogin}
          className="px-10 w-full flex items-center text-xl py-2 gap-4 cursor-pointer text-[#F4F4F5] border border-[#F4F4F5]/40 md:border-[#F4F4F5]/45 hover:bg-[#F4F4F5] hover:text-[#0A0A0C] "
        >
          <FaGithub size={24} />
          Continue with GitHub
        </button>

        <button
          onClick={handleGoogleLogin}
          className="px-10 w-full flex items-center text-xl py-2 gap-4 cursor-pointer text-[#F4F4F5] border border-[#F4F4F5]/40 md:border-[#F4F4F5]/45 hover:bg-[#F4F4F5] hover:text-[#0A0A0C] "
        >
          <FaGoogle size={24} />
          Continue with Google
        </button>
      </div>
    </div>
  </div>
  );
}

export default HeroLoginSection;

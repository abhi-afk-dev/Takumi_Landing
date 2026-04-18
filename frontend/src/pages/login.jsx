import LiquidEther from "../components/LiquidEther.jsx";
import HeroLoginSection from "../components/HeroLoginSection.jsx";
import Header from "../components/Header.jsx";

export default function Login() {
  return (
    <div className="relative overflow-hidden flex flex-col p-2 md:p-10 gap-4 md:gap-8 items-center justify-start bg-[#0A0A0C] min-h-screen text-white">
      <Header />
      <div className="absolute top-120 left-1/2 -translate-x-1/2 w-800 h-[500px] bg-[#F59E0B]/40 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LiquidEther
          colors={["#f59f0b", "#0a0a0c", "#f59f0b"]}
          mouseForce={20}
          cursorSize={60}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="relative z-10 w-full flex justify-center">
        <HeroLoginSection />
      </div>
    </div>
  );
}

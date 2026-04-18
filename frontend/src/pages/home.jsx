import { useState } from "react";
import CommandPalette from "../components/CommandPalette.jsx";
import HearoSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer.jsx";
import Fourth from "../components/Fourth.jsx";
import Header from "../components/Header.jsx";
import Logo from "../components/Logo.jsx";
import Third from "../components/Third.jsx";
import Fifth from "../components/Fifth.jsx";
import Why_Takumi from "../components/Why_Takumi.jsx";
import What from "../components/What.jsx";

function home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const openWaitlist = () => setIsWaitlistOpen(true);
  return (
    <>
      <div className="flex flex-col p-4 md:p-10 gap-4 md:gap-8 items-center justify-start bg-[#0A0A0C] min-h-screen text-white">
        {/* <Header onJoinClick={openWaitlist} /> */}
        <Header />
        {/* <HearoSection onJoinClick={openWaitlist} /> */}
        <HearoSection />
        <Why_Takumi />
        <What/>
        <Third />
        <Logo />
        <Fourth />
        {/* <Fifth onJoinClick={openWaitlist} /> */}
        <Fifth />
        <Footer />
      </div>
      {/* <CommandPalette
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      /> */}
    </>
  );
}

export default home;

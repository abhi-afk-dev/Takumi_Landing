import "./App.css";
import Fifth from "./components/Fifth.jsx";
import HearoSection from "./components/HeroSection.jsx";
import Footer from "./components/Footer.jsx";
import Fourth from "./components/Fourth.jsx";
import Header from "./components/Header.jsx";
import Second from "./components/Second.jsx";
import Third from "./components/Third.jsx";
import { useState } from "react";
import CommandPalette from "./components/CommandPalette.jsx";
function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const openWaitlist = () => setIsWaitlistOpen(true);
  return (
    <>
      <div className="flex flex-col p-4 md:p-10 gap-4 md:gap-8 items-center justify-start bg-black min-h-screen text-white">
        <Header onJoinClick={openWaitlist} />
        <HearoSection onJoinClick={openWaitlist} />
        <Second />
        <Third />
        <Fourth />
        <Fifth onJoinClick={openWaitlist} />
        <Footer />
      </div>
      <CommandPalette
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}

export default App;

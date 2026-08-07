import ProgressBar from "../components/ProgressBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Compare from "../components/Compare";
import Squad from "../components/Squad";
import Ship from "../components/Ship";
import StackMarquee from "../components/StackMarquee";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import "../index.css";
import AnnouncementBar from "../components/AnnouncementBar";
import CompetitorCompare from "../components/CompetitorCard";

export default function App() {
  return (
    <>
      <ProgressBar />
      {/* <AnnouncementBar /> */}
      <Header />
      <main>
        <Hero />
        <Compare />
        <CompetitorCompare />
        <Squad />
        <Ship />
        <StackMarquee />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

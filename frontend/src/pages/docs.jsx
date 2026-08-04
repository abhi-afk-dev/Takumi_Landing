import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Headerdocs";
import Docs from "../components/Docs";
import Footer from "../components/Footer";

export default function DocsPage() {
  return (
    <div className="flex flex-col justify-between bg-ink text-paper h-screen w-full">
      <div className="w-full">
        <AnnouncementBar />
        <Header />
        <Docs />
      </div>
      <Footer />
    </div>
  );
}

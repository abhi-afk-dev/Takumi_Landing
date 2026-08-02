import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Headerdocs";
import Docs from "../components/Docs";
import Footer from "../components/Footer";

export default function DocsPage() {
  return (
    <div className="bg-ink text-paper min-h-screen w-full">
      <AnnouncementBar />
      <Header />
      <Docs />
      <Footer />
    </div>
  );
}

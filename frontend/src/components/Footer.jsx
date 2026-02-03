import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-wrap border border-[#F4F4F5]/10 md:border-[#F4F4F5]/15 px-10 py-6 w-full justify-between items-center gap-5">
      <div className="flex justify-center items-center gap-1">
        <FaRegCopyright color="#F4F4F5" size="20" />
        <h1 className="text-lg jet text-[#F4F4F5]">2026 Takumi</h1>
      </div>
      <div className="gap-6 flex">
        <a
          className="text-lg text-[#F4F4F5] jet hover:text-[#F59E0B]"
          href="https://x.com/hiretakumi"
        >
          X
        </a>
        <a
          className="text-lg text-[#F4F4F5] jet hover:text-[#F59E0B]"
          href="https://discord.gg/zdvvMUKC/"
          target="_blank"
          // rel="noopener noreferrer"
        >
          Discord
        </a>
        <a
          className="text-lg text-[#F4F4F5] jet hover:text-[#F59E0B]"
          href="mailto:contact.takumi.run@gmail.com"
        >
          Email
        </a>
      </div>
      <h1 className="text-md text-[#F4F4F5] jet hover:text-[#F59E0B]">
        ● All Systems Operational
      </h1>
    </div>
  );
}

export default Footer;

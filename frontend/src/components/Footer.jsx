// import { FaRegCopyright } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="flex flex-wrap border border-[#F4F4F5]/10 md:border-[#F4F4F5]/10 px-10 py-6 w-full justify-between items-center gap-5">
//       <div className="flex justify-center items-center gap-1">
//         <FaRegCopyright color="#F4F4F5" size="20" />
//         <h1 className="text-lg jet text-[#F4F4F5]">2026 Takumi</h1>
//       </div>
//       <div className="gap-6 flex">
//         <a
//           className="text-lg text-[#F4F4F5] jet hover:text-[#F59E0B]"
//           href="https://x.com/hiretakumi"
//         >
//           X
//         </a>
//         <a
//           className="text-lg text-[#F4F4F5] jet hover:text-[#F59E0B]"
//           href="https://discord.gg/spe79aHC9W"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Discord
//         </a>
//         <a
//           className="text-lg text-[#F4F4F5] jet hover:text-[#F59E0B]"
//           href="mailto:hiretakumi.run@gmail.com"
//         >
//           Email
//         </a>
//       </div>
//       <h1 className="text-md text-[#F4F4F5] jet hover:text-[#F59E0B]">
//         ● All Systems Operational
//       </h1>
//     </div>
//   );
// }

// export default Footer;
export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] py-7 bg-white">
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between flex-wrap gap-4">
        <p className="font-mono text-[12.5px] font-semibold text-[var(--ash-dim)]">
          © 2026 Takumi
        </p>

        <div className="flex gap-5">
          {/* <a
            href="https://x.com/hiretakumi"
            className="font-mono text-[12.5px] font-semibold text-[var(--ash)] hover:text-black transition-colors"
          >
            X
          </a> */}
          <a
            href="https://discord.gg/spe79aHC9W"
            className="font-mono text-[12.5px] font-semibold text-[var(--ash)] hover:text-black transition-colors"
          >
            Discord
          </a>
          <a
            href="mailto:hiretakumi.run@gmail.com"
            className="font-mono text-[12.5px] font-semibold text-[var(--ash)] hover:text-black transition-colors"
          >
            Email
          </a>
        </div>

        <p className="flex items-center gap-2 font-mono text-[12.5px] font-semibold text-[var(--ash-dim)]">
          <span className="w-1.5 h-1.5 rounded-full bg-black shadow-[0_0_0_0_rgba(0,0,0,0.2)] animate-pulse" />
          All Systems Operational
        </p>
      </div>
    </footer>
  );
}
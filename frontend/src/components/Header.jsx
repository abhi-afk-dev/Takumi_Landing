import Button from "./Button";
// import { FaXTwitter } from "react-icons/fa6";

function Header({ onJoinClick }) {
  return (
    <div className="flex sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border border-[#F4F4F5]/10 md:border-[#F4F4F5]/10 px-5 py-4 md:px-10 justify-between items-center w-full">
      <a href="/" className="flex items-center gap-2 cursor-pointer">
        <h1 className="flex text-[#F59E0B] jet text-2xl md:text-3xl font-bold">
          匠
        </h1>
        <h1 className="text-2xl md:text-3xl jet tracking-tighter">takumi</h1>
      </a>

      <div className="flex items-center gap-4 md:gap-6">
        {/* <a
          href="https://x.com/hiretakumi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F59E0B] transition-colors duration-300"
        >
          <FaXTwitter className="text-2xl md:text-3xl" />
        </a> */}
        <a
          href="/docs"
          className="hover:text-[#F59E0B] transition-colors duration-300"
        >
          <h1 className="text-2xl md:text-1xl">Docs</h1>
        </a>

        {/* Added 'hidden md:block' here. 
            hidden = disappears on mobile
            md:block = reappears at 768px screen width and above
        */}
        <div onClick={onJoinClick} className="hidden md:block cursor-pointer">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;

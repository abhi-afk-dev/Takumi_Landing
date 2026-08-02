import { track } from "@vercel/analytics";

function Button() {
  // Fire the analytics event only when clicked
  const handleTrackClick = () => {
    track("Navigated_To_App");
  };

  return (
    <a
      href="https://app.takumi.run/login"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTrackClick}
    >
      <button className="px-4 py-2 md:px-8 md:py-3 jet bg-[#F59E08] text-black hover:bg-[#F4F4F5] hover:text-black text-sm md:text-lg">
        Join Alpha
      </button>
    </a>
  );
}

export default Button;
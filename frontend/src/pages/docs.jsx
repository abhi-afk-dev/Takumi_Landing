import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Docs() {
  const steps = [
    {
      number: "01",
      title: "Set Your Project Folder",
      description: "Tell Takumi where your project lives on your computer.",
      action: (
        <>
          Find your project folder, right-click it, and copy its path.{" "}
          <code className="text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded font-mono text-sm break-all md:break-normal">
            /Users/yourname/Desktop/myapp
          </code>
          — paste it into the sidebar input box and press
          <kbd className="bg-zinc-800 border border-zinc-700/60 shadow-sm rounded px-1.5 py-0.5 text-xs text-zinc-200 font-sans">
            Enter
          </kbd>
          .
        </>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Generate Your Connection Key",
      description: "Create a secure key that links your computer to Takumi.",
      action: (
        <>
          <span className="font-semibold text-zinc-100">
            Click the Settings
          </span>{" "}
          (gear icon), hit{" "}
          <code className="text-zinc-300 bg-zinc-800/80 px-1.5 py-0.5 rounded font-mono text-sm">
            Generate API Key
          </code>
          , and copy the key — you'll need it in step 4.
        </>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Install the VS Code Extension",
      description: (
        <>
          Add the Takumi Bridge to VS Code. Don't have VS Code?
          <br />
          <code className="text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded font-mono text-sm">
            <a
              href="https://code.visualstudio.com/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Download it free here]
            </a>
          </code>
          — it takes 1 minute.
        </>
      ),
      action: (
        <>
          Open <span className="font-semibold text-zinc-100">VS Code</span> or{" "}
          in your project folder. Go to the Extensions tab (left sidebar),
          search{" "}
          <code className="text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded font-mono text-sm">
            Takumi_Extension
          </code>{" "}
          and click Install.
        </>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Connect & Start Building",
      description: "Link VS Code to your Takumi team. You only do this once.",
      action: (
        <>
          Press{" "}
          <kbd className="bg-zinc-800 border border-zinc-700/60 shadow-sm rounded px-1.5 py-0.5 text-xs text-zinc-200 font-sans">
            Ctrl/Cmd
          </kbd>{" "}
          +{" "}
          <kbd className="bg-zinc-800 border border-zinc-700/60 shadow-sm rounded px-1.5 py-0.5 text-xs text-zinc-200 font-sans">
            Shift
          </kbd>{" "}
          +{" "}
          <kbd className="bg-zinc-800 border border-zinc-700/60 shadow-sm rounded px-1.5 py-0.5 text-xs text-zinc-200 font-sans">
            P
          </kbd>{" "}
          , type{" "}
          <code className="text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded font-mono text-sm">
            Takumi: Login
          </code>
          , paste your API key, and hit{" "}
          <kbd className="bg-zinc-800 border border-zinc-700/60 shadow-sm rounded px-1.5 py-0.5 text-xs text-zinc-200 font-sans">
            Enter
          </kbd>
          When you see 'Connected', you're ready to build.
        </>
      ),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative overflow-hidden flex flex-col p-4 md:p-10 gap-4 md:gap-8 items-center justify-start bg-[#0A0A0C] min-h-screen text-white w-full">
      <style>
        {`
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>

      {/* <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F59E0B]/40 blur-[120px] rounded-full pointer-events-none z-0"></div> */}
      <div className="absolute top-120 left-1/2 -translate-x-1/2 w-800 h-[800px] bg-[#F59E0B]/40 blur-[120px] pointer-events-none z-0"></div>

      <div className="z-10 w-full flex flex-col items-center">
        <Header />
      </div>

      {/* Header Section */}
      <div className="w-full flex flex-col items-start gap-2 px-2 md:px-30 text-left md:text-start z-10">
        <h1 className="text-3xl md:text-4xl font-medium text-white">
          Quick Start Guide
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl">
          Get connected in under 2 minutes. No technical experience needed.
        </p>
      </div>

      {/* Steps Container */}
      <div className="w-full max-w-7xl flex flex-col gap-8 z-10 px-2 md:px-0">
        {steps.map((step, index) => {
          const animationName =
            index % 2 === 0 ? "slideInLeft" : "slideInRight";

          return (
            <div
              key={index}
              style={{
                animation: `${animationName} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                opacity: 0,
                animationDelay: `${index * 0.4}s`,
              }}
              className="group relative bg-[#1a1a1e]/40 border border-zinc-800/60 p-6 md:p-8 hover:border-orange-500/30 hover:bg-[#1f1f23] transition-colors duration-300 w-full shadow-lg"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full">
                {/* Left Side: Icon + Text */}
                <div className="flex w-full lg:w-1/2 gap-4 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center p-4 bg-black/50 border border-zinc-800 text-orange-500 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors">
                    {step.icon}
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-mono text-orange-500/70 pt-1">
                      [{step.number}]
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium text-zinc-100">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Action Box */}
                <div className="w-full lg:w-1/2 flex bg-black/40 border border-zinc-800/80 p-4 items-start gap-3">
                  <span className="text-white mt-0.5 shrink-0">
                    {" "}
                    {"[ -> ]"}{" "}
                  </span>
                  <div className="text-sm text-zinc-300 leading-relaxed break-words">
                    {step.action}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-8 mb-12 text-center z-10">
        <p className="text-sm text-white">
          Having trouble? Run{" "}
          <code className="bg-zinc-800/50 border border-zinc-700/50 px-2 py-1 text-zinc-300 whitespace-nowrap font-mono text-xs">
            Takumi: Reconnect
          </code>{" "}
          in your VS Code command palette to reset the WebSocket.
        </p>
      </div>
      <Footer />
    </div>
  );
}

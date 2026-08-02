import { useReveal } from "../hooks/useReveal";

function Kbd({ children }) {
  return (
    <kbd className="inline-flex items-center bg-white border border-hairline-strong shadow-sm rounded px-1.5 py-0.5 text-xs text-paper font-mono font-semibold">
      {children}
    </kbd>
  );
}

function Code({ children, href }) {
  const content = (
    <code className="text-black bg-black/[0.05] border border-hairline px-1.5 py-0.5 rounded font-mono text-sm break-all md:break-normal">
      {children}
    </code>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

const steps = [
  {
    number: "01",
    title: "Set Your Project Folder",
    description: "Tell Takumi where your project lives on your computer.",
    action: (
      <>
        Find your project folder, right-click it, and copy its path.{" "}
        <Code>/Users/yourname/Desktop/myapp</Code> — paste it into the sidebar
        input box and press <Kbd>Enter</Kbd>.
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
        <span className="font-semibold text-paper">Click the Settings</span>{" "}
        (gear icon), hit <Code>Generate API Key</Code>, and copy the key —
        you'll need it in step 4.
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
        <Code href="https://code.visualstudio.com/download">
          [Download it free here]
        </Code>{" "}
        — it takes 1 minute.
      </>
    ),
    action: (
      <>
        Open <span className="font-semibold text-paper">VS Code</span> in your
        project folder. Go to the Extensions tab (left sidebar), search{" "}
        <Code>Takumi_Bridge</Code> and click Install.
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
        Press <Kbd>Ctrl/Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd>, type{" "}
        <Code>Takumi: Login</Code>, paste your API key, and hit <Kbd>Enter</Kbd>
        . When you see 'Connected', you're ready to build.
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

function StepCard({ step, index }) {
  const [ref, inView] = useReveal();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
      className={`group relative bg-gradient-to-b from-white to-[#fafafa] border border-hairline rounded-2xl p-6 md:p-8 shadow-md hover:-translate-y-1 hover:shadow-lg hover:border-hairline-strong transition-all duration-500 w-full ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full">
        <div className="flex w-full lg:w-1/2 gap-4 items-start">
          <div className="flex-shrink-0 flex items-center justify-center w-[42px] h-[42px] border border-hairline-strong rounded-[10px] text-black bg-gradient-to-br from-white to-[#e8e8e8] shadow-sm">
            {step.icon}
          </div>
          <div className="flex items-start gap-3">
            <span className="font-mono text-sm font-bold text-ash-dim pt-1">
              [{step.number}]
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-extrabold text-xl text-paper">
                {step.title}
              </h3>
              <p className="text-ash text-[14.5px] font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex bg-[#f4f4f4] border border-hairline rounded-lg p-4 items-start gap-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
          <span className="font-mono text-black font-bold mt-0.5 shrink-0 text-sm">
            [ → ]
          </span>
          <div className="text-sm text-ash font-medium leading-relaxed break-words">
            {step.action}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Docs() {
  const [titleRef, titleInView] = useReveal();

  return (
    <section className="relative overflow-hidden w-full">
      <div
        aria-hidden="true"
        className="breathe-glow absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] blur-[120px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.06), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto flex flex-col gap-4 md:gap-8 px-5 sm:px-7 pt-10 md:pt-16 pb-16 z-10">
        <div className="flex flex-col items-start gap-3 text-left">
          <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-ash font-bold flex items-center gap-2 before:content-[''] before:w-3.5 before:h-0.5 before:bg-black">
            DOCUMENTATION
          </p>
          <h1
            ref={titleRef}
            className={`font-display font-extrabold text-[clamp(28px,3.6vw,44px)] tracking-[-0.01em] leading-[1.12] text-paper transition-all duration-700 ${
              titleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[22px]"
            }`}
          >
            Quick start guide.
          </h1>
          <p className="text-ash text-[15.5px] font-medium max-w-2xl leading-relaxed">
            Get connected in under 2 minutes. No technical experience needed.
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-4">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <div className="mt-6 mb-4 text-center">
          <p className="text-sm text-ash font-medium">
            Having trouble? Run{" "}
            <code className="bg-black/[0.05] border border-hairline px-2 py-1 text-paper whitespace-nowrap font-mono text-xs rounded">
              Takumi: Reconnect
            </code>{" "}
            in your VS Code command palette to reset the WebSocket.
          </p>
        </div>
      </div>
    </section>
  );
}

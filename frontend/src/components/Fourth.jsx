import{ useState, useEffect } from "react";
import { Terminal, CheckCircle2, XCircle, Loader2, Cpu } from "lucide-react";

const SelfHealingSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col border border-[#F4F4F5]/10 md:border-[#F4F4F5]/15 px-10 py-20 w-full justify-center items-center gap-5">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="gap-6 pb-6 flex flex-col">
            <h2 className="text-4xl jet text-start font-bold tracking-tight">
              Self-Healing Runtime<span className="text-[#F59E0B]">{"<."}</span>
            </h2>
            <p className="text-[#F4F4F5] jet opacity-60 text-lg leading-relaxed max-w-lg">
              Most agents stop when they hit an error. Takumi reads the stack
              trace, rewrites the failing components, and redeploys
              autonomously.
            </p>
          </div>

          <div className="flex gap-4 flex-col jet text-lg">
            {/* Step 01 */}
            <div
              className={`flex items-center jet gap-4 transition-all duration-500 ${currentStep === 0 ? "opacity-100 translate-x-2" : "opacity-30"}`}
            >
              <span
                className={`text-xl font-bold ${currentStep === 0 ? "text-[#F59E0B]" : "text-[#F4F4F5] opacity-50"}`}
              >
                01 |
              </span>
              <span
                className={ 
                  currentStep === 0
                    ? "text-[#F4F4F5]"
                    : "text-[#F4F4F5] opacity-50"
                }
              >
                DETECT FAILURE
              </span>
            </div>

            {/* Step 02 */}
            <div
              className={`flex items-center jet gap-4 transition-all duration-500 ${currentStep === 1 ? "opacity-100 translate-x-2" : "opacity-30"}`}
            >
              <span
                className={`text-xl font-bold ${currentStep === 1 ? "text-[#F59E0B]" : "text-[#F4F4F5] opacity-50"}`}
              >
                02 |
              </span>
              <span
                className={
                  currentStep === 1
                    ? "text-[#F4F4F5]"
                    : "text-[#F4F4F5] opacity-50"
                }
              >
                ANALYZE TRACE
              </span>
            </div>

            {/* Step 03 */}
            <div
              className={`flex items-center jet gap-4 transition-all duration-500 ${currentStep === 2 ? "opacity-100 translate-x-2" : "opacity-30"}`}
            >
              <span
                className={`text-xl font-bold ${currentStep === 2 ? "text-[#F59E0B]" : "text-[#F4F4F5] opacity-50"}`}
              >
                03 |
              </span>
              <span
                className={
                  currentStep === 2
                    ? "text-[#F4F4F5]"
                    : "text-[#F4F4F5] opacity-50"
                }
              >
                APPLY PATCH
              </span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-[#F59E0B]/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>

          <div className="relative bg-[#0F0F0F] border border-[#F4F4F5]/10 rounded-lg overflow-hidden shadow-2xl h-80 flex flex-col font-mono text-sm">
            <div className="bg-[#1A1A1A] px-4 py-2 flex items-center justify-between border-b border-[#F4F4F5]/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex items-center text-xs text-[#F4F4F5] opacity-40 gap-2">
                <Terminal size={14} />
                <span>takumi-cli — node</span>
              </div>
            </div>

            <div className="p-6 flex-1 overflow-hidden relative">
              <div
                className={`transition-opacity duration-500 absolute inset-6 ${currentStep === 0 ? "opacity-100" : "opacity-0"}`}
              >
                <div className="text-[#F4F4F5] opacity-60 mb-2">
                  $ npm run dev
                </div>
                <div className="text-[#F4F4F5] opacity-40 mb-4">
                  {">"} takumi-app@0.1.0 dev
                </div>
                <div className="text-red-400 mb-1 flex items-center gap-2">
                  <XCircle size={14} /> [ERROR] Build Failed
                </div>
                <div className="text-red-300 pl-4 border-l-2 border-red-900/50 my-2 py-1">
                  ReferenceError: 'userData' is not defined
                  <br />
                  at UserProfile (src/components/Profile.tsx:14:6)
                  <br />
                  at renderWithHooks (react-dom.development.js)
                </div>
                <div className="text-[#F4F4F5] opacity-40 mt-4 animate-pulse">
                  {">"} Waiting for changes...
                </div>
              </div>

              <div
                className={`transition-opacity duration-500 absolute inset-6 ${currentStep === 1 ? "opacity-100" : "opacity-0"}`}
              >
                <div className="text-[#F59E0B] mb-2 font-bold flex items-center gap-2">
                  <Cpu size={14} /> [TAKUMI] INTERCEPTING PROCESS
                </div>
                <div className="text-[#F4F4F5] opacity-80 mb-1">
                  {">"} Reading stack trace...{" "}
                  <span className="text-green-500">Done</span>
                </div>
                <div className="text-[#F4F4F5] opacity-80 mb-1">
                  {">"} Locating source file...{" "}
                  <span className="text-[#F4F4F5] opacity-50">
                    src/components/Profile.tsx
                  </span>
                </div>
                <div className="text-[#F4F4F5] opacity-80 mb-1">
                  {">"} Analyzing AST...
                </div>
                <div className="mt-4 p-3 bg-[#F4F4F5]/5 border border-[#F4F4F5]/10 rounded text-xs text-[#F59E0B]/80">
                  Suggested Fix: Import 'userData' from context store or define
                  interface props.
                </div>
                <div className="mt-4 text-[#F59E0B] flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin" /> Generating
                  patch...
                </div>
              </div>

              <div
                className={`transition-opacity duration-500 absolute inset-6 ${currentStep === 2 ? "opacity-100" : "opacity-0"}`}
              >
                <div className="text-[#F4F4F5] opacity-60 mb-2">
                  $ takumi apply --force
                </div>
                <div className="text-green-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 size={14} /> Patch Applied Successfully
                </div>
                <div className="text-[#F4F4F5] opacity-40 mb-4">
                  {">"} Modified: src/components/Profile.tsx (+2 lines)
                </div>
                <div className="text-[#F4F4F5] opacity-80">
                  {">"} Restarting server...
                </div>
                <div className="mt-4 text-green-300 p-2 bg-green-500/10 border border-green-500/20 rounded">
                  [Vite] ✨ App running at: <br />
                  <span className="underline cursor-pointer">
                    http://localhost:5173/
                  </span>
                </div>
                <div className="mt-2 text-[#F4F4F5] opacity-50 animate-pulse">
                  _
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfHealingSection;

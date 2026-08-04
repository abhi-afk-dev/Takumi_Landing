import { useReveal } from "../hooks/useReveal";
import { useTypewriter } from "../hooks/useTypewriter";

const codeLines = [
  "# Scalable, secure endpoints with built-in auth",
  "",
  "from fastapi import APIRouter, Depends, HTTPException",
  "from sqlalchemy.orm import Session",
  "",
  "router = APIRouter()",
  "",
  '@router.post("/process-payment")',
  "async def process(intent: PaymentIntent, db: Session = Depends(get_db)):",
  "    try:",
  "        result = await stripe_service.charge(intent)",
];

const shipList = [
  { icon: "◧", label: "SaaS dashboards" },
  { icon: "◨", label: "Internal tools" },
  { icon: "▤", label: "Backend APIs" },
];

export default function Ship() {
  const [codeRef, codeInView] = useReveal();
  const [copyRef, copyInView] = useReveal();
  const { triggerRef, typedLines } = useTypewriter(codeLines, 14, 260);

  return (
    <section
      id="ship"
      className="bg-white border-y border-hairline shadow-[0_10px_40px_-10px_rgba(0,0,0,0.02)] py-[clamp(60px,9vw,108px)]"
    >
      <div className="max-w-[1180px] mx-auto px-7 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div
          ref={(el) => {
            codeRef.current = el;
            triggerRef.current = el;
          }}
          className={`transition-all duration-700 ${
            codeInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[22px]"
          }`}
        >
          <div className="bg-[#fafafa] border border-hairline-strong rounded-2xl overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-hairline bg-gradient-to-b from-white to-[#f0f0f0]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#e0e0e0] shadow-inner" />
              <span className="w-[9px] h-[9px] rounded-full bg-[#ccc] shadow-inner" />
              <span className="w-[9px] h-[9px] rounded-full bg-[#b3b3b3] shadow-inner" />
              <span className="font-mono text-[11.5px] font-semibold text-ash-dim ml-1.5">
                api/routes/payments.py
              </span>
            </div>
            <pre className="font-mono text-[13px] font-medium leading-[1.85] p-[22px_22px_26px] overflow-x-auto text-[#444] whitespace-pre">
              {codeLines.map((_, i) => (
                <div key={i} className="min-h-[1.85em]">
                  {typedLines[i]}
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div
          ref={copyRef}
          className={`transition-all duration-700 ${
            copyInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[22px]"
          }`}
        >
          <p className="font-mono text-sm md:text-xs tracking-[0.16em] uppercase text-ash mb-4 font-bold flex items-center gap-2 before:content-[''] before:w-3.5 before:h-0.5 before:bg-black">
            FROM BRIEF TO PRODUCTION
          </p>
          <h2 className="font-display text-4xl font-extrabold md:text-[clamp(28px,3.6vw,44px)] tracking-[-0.01em] leading-[1.12] text-paper">
            What you can ship tonight.
          </h2>
          <p className="text-ash text-lg md:text-md font-medium my-[18px] mb-[30px] leading-[1.7] max-w-[440px]">
            From consumer-facing web apps to complex backend infrastructure —
            describe what you need, and Takumi provisions the entire stack
            autonomously.
          </p>
          <ul>
            {shipList.map((item, i) => (
              <li
                key={item.label}
                className={`flex items-center gap-3.5 py-4 border-t border-hairline font-mono text-md font-semibold text-paper ${
                  i === shipList.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-black w-[22px] text-center text-lg md:text-md flex-shrink-0">
                  {item.icon}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

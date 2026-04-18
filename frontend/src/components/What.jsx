import { useState, useEffect, useRef } from "react";
import { LayoutDashboard, Database, Server, Code2 } from "lucide-react";

const WhatCanIBuildSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col border border-[#F4F4F5]/10 md:border-[#F4F4F5]/10 px-10 py-20 w-full justify-center items-center gap-5 overflow-hidden">
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

      <div
        ref={sectionRef}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Side (IDE Window) */}
        <div
          className="relative group order-2 lg:order-1"
          style={{
            animation: isVisible
              ? "slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              : "none",
            opacity: 0,
          }}
        >
          <div className="absolute -inset-1 bg-[#F59E0B]/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>

          <div className="relative bg-[#0F0F0F] border border-[#F4F4F5]/10 rounded-lg overflow-hidden shadow-2xl h-80 flex flex-col font-mono text-sm">
            {/* Window Header */}
            <div className="bg-[#1A1A1A] px-4 py-2 flex items-center justify-between border-b border-[#F4F4F5]/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex items-center text-xs text-[#F4F4F5] opacity-40 gap-2">
                <Code2 size={14} />
                <span>
                  {currentStep === 0 && "src/pages/Dashboard.tsx"}
                  {currentStep === 1 && "backend/admin/views.py"}
                  {currentStep === 2 && "api/routes/payments.py"}
                </span>
              </div>
            </div>

            {/* Window Body - Code Previews */}
            <div className="p-6 flex-1 overflow-hidden relative text-xs sm:text-sm leading-relaxed">
              {/* Step 0: SaaS Dashboard (React) */}
              <div
                className={`transition-opacity duration-500 absolute inset-6 ${currentStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <div className="text-zinc-500 mb-2">
                  {"// Fully typed React frontend with components"}
                </div>
                <div>
                  <span className="text-pink-400">import</span>{" "}
                  {"{ useState, useEffect }"}{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-green-300">'react'</span>;
                </div>
                <div>
                  <span className="text-pink-400">import</span>{" "}
                  {"{ LineChart, MetricsCard }"}{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-green-300">'@/components'</span>;
                </div>
                <br />
                <div>
                  <span className="text-pink-400">export default function</span>{" "}
                  <span className="text-blue-400">Dashboard</span>() {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">const</span>{" "}
                  {"{ data, isLoading }"} ={" "}
                  <span className="text-blue-300">useQuery</span>(
                  <span className="text-green-300">'/api/metrics'</span>);
                </div>
                <br />
                <div className="pl-4">
                  <span className="text-pink-400">return</span> (
                </div>
                <div className="pl-8 text-zinc-300">
                  {"<div className="}
                  <span className="text-green-300">
                    \"grid grid-cols-3 gap-6\"
                  </span>
                  {">"}
                </div>
                <div className="pl-12 text-zinc-300">
                  {"<MetricsCard title="}
                  <span className="text-green-300">\"MRR\"</span>
                  {" value={data.mrr} />"}
                </div>
                <div className="pl-12 text-zinc-300">
                  {"<LineChart data={data.chart} />"}
                </div>
                <div className="pl-8 text-zinc-300">{"</div>"}</div>
                <div className="pl-4">);</div>
                <div>{"}"}</div>
              </div>

              {/* Step 1: Internal Tools (Django) */}
              <div
                className={`transition-opacity duration-500 absolute inset-6 ${currentStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <div className="text-zinc-500 mb-2">
                  # Robust Django ORM and Admin interfaces
                </div>
                <div>
                  <span className="text-pink-400">from</span> django.contrib{" "}
                  <span className="text-pink-400">import</span> admin
                </div>
                <div>
                  <span className="text-pink-400">from</span> .models{" "}
                  <span className="text-pink-400">import</span> Transaction,
                  UserProfile
                </div>
                <br />
                <div>
                  <span className="text-yellow-300">@admin.register</span>
                  (Transaction)
                </div>
                <div>
                  <span className="text-pink-400">class</span>{" "}
                  <span className="text-blue-400">TransactionAdmin</span>
                  (admin.ModelAdmin):
                </div>
                <div className="pl-4">
                  <span className="text-zinc-300">list_display</span> = (
                  <span className="text-green-300">'id'</span>,{" "}
                  <span className="text-green-300">'user'</span>,{" "}
                  <span className="text-green-300">'amount'</span>,{" "}
                  <span className="text-green-300">'status'</span>)
                </div>
                <div className="pl-4">
                  <span className="text-zinc-300">list_filter</span> = (
                  <span className="text-green-300">'status'</span>,{" "}
                  <span className="text-green-300">'created_at'</span>)
                </div>
                <div className="pl-4">
                  <span className="text-zinc-300">search_fields</span> = (
                  <span className="text-green-300">'user__email'</span>,)
                </div>
                <div className="pl-4">
                  <span className="text-zinc-300">ordering</span> = (
                  <span className="text-green-300">'-created_at'</span>,)
                </div>
                <br />
                <div className="text-zinc-500 pl-4">
                  # Automatically generated by Takumi MVP Agent
                </div>
              </div>

              {/* Step 2: Backend APIs (Python) */}
              <div
                className={`transition-opacity duration-500 absolute inset-6 ${currentStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <div className="text-zinc-500 mb-2">
                  # Scalable, secure endpoints with built-in auth
                </div>
                <div>
                  <span className="text-pink-400">from</span> fastapi{" "}
                  <span className="text-pink-400">import</span> APIRouter,
                  Depends, HTTPException
                </div>
                <div>
                  <span className="text-pink-400">from</span> sqlalchemy.orm{" "}
                  <span className="text-pink-400">import</span> Session
                </div>
                <br />
                <div>router = APIRouter()</div>
                <br />
                <div>
                  <span className="text-yellow-300">@router.post</span>(
                  <span className="text-green-300">"/process-payment"</span>)
                </div>
                <div>
                  <span className="text-pink-400">async def</span>{" "}
                  <span className="text-blue-400">process</span>(intent:
                  PaymentIntent, db: Session = Depends(get_db)):
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">try</span>:
                </div>
                <div className="pl-8 text-zinc-300">
                  result = <span className="text-pink-400">await</span>{" "}
                  stripe_service.charge(intent)
                </div>
                <div className="pl-8 text-zinc-300">
                  <span className="text-pink-400">return</span> {"{"}
                  <span className="text-green-300">"status"</span>:{" "}
                  <span className="text-green-300">"success"</span>,{" "}
                  <span className="text-green-300">"tx_id"</span>: result.id
                  {"}"}
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">except</span> Exception{" "}
                  <span className="text-pink-400">as</span> e:
                </div>
                <div className="pl-8 text-zinc-300">
                  <span className="text-pink-400">raise</span>{" "}
                  HTTPException(status_code=
                  <span className="text-orange-400">400</span>, detail=str(e))
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Text & Controls) */}
        <div
          className="z-10 order-1 lg:order-2"
          style={{
            // 5. Only apply the animation if isVisible is true
            animation: isVisible
              ? "slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              : "none",
            opacity: 0,
            animationDelay: isVisible ? "0.2s" : "0s",
          }}
        >
          <div className="gap-6 pb-6 flex flex-col">
            <h2 className="text-4xl jet text-start font-bold tracking-tight">
              What you can ship tonight<span className="text-[#F59E0B]">.</span>
            </h2>
            <p className="text-[#F4F4F5] jet opacity-60 text-lg leading-relaxed max-w-lg">
              From consumer-facing web apps to complex backend infrastructure.
              Tell Takumi what you need, and it provisions the entire stack
              autonomously.
            </p>
          </div>

          <div className="flex gap-6 flex-col jet text-lg mt-4">
            {/* Step 01 */}
            <div
              className={`flex items-center jet gap-4 transition-all duration-500 ${
                currentStep === 0
                  ? "opacity-100 translate-x-2"
                  : "opacity-30 cursor-pointer hover:opacity-60"
              }`}
              onClick={() => setCurrentStep(0)}
            >
              <span
                className={`text-xl font-bold ${currentStep === 0 ? "text-[#F59E0B]" : "text-[#F4F4F5]"}`}
              >
                01 |
              </span>
              <span className="flex items-center gap-3 text-[#F4F4F5]">
                <LayoutDashboard
                  size={20}
                  className={currentStep === 0 ? "text-[#F59E0B]" : ""}
                />
                SAAS DASHBOARDS
              </span>
            </div>

            {/* Step 02 */}
            <div
              className={`flex items-center jet gap-4 transition-all duration-500 ${
                currentStep === 1
                  ? "opacity-100 translate-x-2"
                  : "opacity-30 cursor-pointer hover:opacity-60"
              }`}
              onClick={() => setCurrentStep(1)}
            >
              <span
                className={`text-xl font-bold ${currentStep === 1 ? "text-[#F59E0B]" : "text-[#F4F4F5]"}`}
              >
                02 |
              </span>
              <span className="flex items-center gap-3 text-[#F4F4F5]">
                <Database
                  size={20}
                  className={currentStep === 1 ? "text-[#F59E0B]" : ""}
                />
                INTERNAL TOOLS
              </span>
            </div>

            {/* Step 03 */}
            <div
              className={`flex items-center jet gap-4 transition-all duration-500 ${
                currentStep === 2
                  ? "opacity-100 translate-x-2"
                  : "opacity-30 cursor-pointer hover:opacity-60"
              }`}
              onClick={() => setCurrentStep(2)}
            >
              <span
                className={`text-xl font-bold ${currentStep === 2 ? "text-[#F59E0B]" : "text-[#F4F4F5]"}`}
              >
                03 |
              </span>
              <span className="flex items-center gap-3 text-[#F4F4F5]">
                <Server
                  size={20}
                  className={currentStep === 2 ? "text-[#F59E0B]" : ""}
                />
                BACKEND APIS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCanIBuildSection;

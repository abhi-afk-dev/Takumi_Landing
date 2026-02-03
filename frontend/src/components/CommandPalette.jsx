import { useState } from "react";
import { Terminal, ArrowRight, Loader2, Check, XCircle } from "lucide-react";
import { supabase } from "./supabaseClient";

const CommandPalette = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

    if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email: email }]);

      if (error) throw error;

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setEmail("");
      }, 2000);
    } catch (error) {
      console.error("Supabase Error:", error);
      setStatus("error");

      if (error.code === "23505") {
        setErrorMessage("You are already on the list.");
      } else {
        setErrorMessage("Connection failed. Try again.");
      }

      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* The Command Palette */}
      <div className="relative w-full max-w-lg bg-[#0F0F0F] border border-[#F4F4F5]/20 rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1A1A1A] px-4 py-2 border-b border-[#F4F4F5]/10 flex items-center justify-between">
          <span className="text-xs font-mono text-[#F4F4F5] opacity-50">
            task: join_alpha_waitlist
          </span>
        </div>

        <form onSubmit={handleSubmit} className="p-2">
          <div className="flex items-center gap-3 px-2">
            <span className="text-[#F59E0B]">
              {status === "success" ? (
                <Check size={20} />
              ) : status === "error" ? (
                <XCircle size={20} className="text-red-500" />
              ) : (
                <Terminal size={20} />
              )}
            </span>

            <input
              autoFocus
              type="email"
              placeholder="enter_email_address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="w-full bg-transparent border-none outline-none text-[#F4F4F5] font-mono text-lg placeholder:opacity-30 h-12"
            />

            <button
              type="submit"
              disabled={!email || status !== "idle"}
              className="text-[#F4F4F5] opacity-50 hover:opacity-100 disabled:opacity-20 transition"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" />
              ) : (
                <ArrowRight />
              )}
            </button>
          </div>

          {/* Messages */}
          {status === "success" && (
            <div className="mt-2 px-2 py-1 text-xs font-mono text-green-400 bg-green-500/10 rounded">
              {">"} Access request queued. We will ping you.
            </div>
          )}
          {status === "error" && (
            <div className="mt-2 px-2 py-1 text-xs font-mono text-red-400 bg-red-500/10 rounded">
              {">"} Error: {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CommandPalette;

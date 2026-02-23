"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

/* ── Typing animation for headline ─────────────────────── */
const agentTypes = [
  "a scheduling agent",
  "a support chatbot",
  "a voice assistant",
  "an intake agent",
  "a custom AI agent",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = agentTypes[index];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && text === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % agentTypes.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span
      className="inline-block"
      style={{
        background: "linear-gradient(135deg, #5E5CE6 0%, #A259FF 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {text}
      <span
        className="inline-block w-[2px] h-[0.85em] ml-1 align-middle opacity-70"
        style={{ background: "#5E5CE6", animation: "blink 1s step-end infinite" }}
      />
    </span>
  );
}

/* ── Cycling agent preview scenes ──────────────────────── */
const scenes = [
  { name: "Scheduling Agent", icon: "📅", status: "Booking appointments" },
  { name: "Voice Agent", icon: "🎙️", status: "On a call" },
  { name: "Support Agent", icon: "💬", status: "Resolving tickets" },
  { name: "Workflow Agent", icon: "⚙️", status: "Running automation" },
  { name: "Integration Agent", icon: "🔗", status: "Connecting services" },
];

function ScheduleScene({ step }: { step: number }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = ["9:00", "10:30", "2:00", "4:00"];
  return (
    <div className="space-y-4">
      <p className="text-[12px] text-[#86868B] font-medium px-1">Select a time for Thursday</p>
      <div className="flex gap-2">
        {days.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`flex-1 text-center py-2 rounded-xl text-[11px] font-semibold transition-all ${
              d === "Thu" ? "bg-[#5E5CE6] text-white shadow-md" : "bg-[#F5F5F7] text-[#86868B]"
            }`}
          >
            {d}
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {slots.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: step > i ? 1 : 0.4, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`text-center py-2.5 rounded-xl text-xs font-medium border transition-all ${
              step > 2 && s === "2:00"
                ? "bg-[#F0F0FF] border-[#5E5CE6]/30 text-[#5E5CE6]"
                : "bg-white border-[#E8E8ED] text-[#1D1D1F]"
            }`}
          >
            {s}
            {step > 2 && s === "2:00" && <span className="ml-1 text-[10px]">●</span>}
          </motion.div>
        ))}
      </div>
      {step > 3 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#F0F0FF] rounded-xl px-4 py-2.5 text-[11px] text-[#5E5CE6] font-semibold text-center border border-[#5E5CE6]/10"
        >
          Confirmed — Thursday at 2:00pm
        </motion.div>
      )}
    </div>
  );
}

function VoiceScene({ step }: { step: number }) {
  const bars = [12, 18, 8, 22, 14, 20, 10, 16, 24, 12, 18, 14, 22, 10, 16, 20, 8, 18, 14, 24];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F5F5F7] flex items-center justify-center text-sm shadow-sm">👤</div>
          <div>
            <p className="text-xs font-bold text-[#1D1D1F]">+1 (555) 012-3456</p>
            <p className="text-[10px] text-[#5E5CE6] font-medium uppercase tracking-wider">Connected • 1:24</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#FF3B30]/10 flex items-center justify-center">
          <span className="text-[#FF3B30] text-[10px]">✕</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[3px] h-12 px-2 bg-[#F5F5F7]/50 rounded-2xl">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            animate={step > 0 ? { height: [h * 0.5, h * 1.3, h * 0.7, h * 1.1] } : {}}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }}
            className="w-[3px] rounded-full"
            style={{
              height: `${h * 0.6}px`,
              opacity: 0.6 + (h / 24) * 0.4,
              background: "#5E5CE6",
            }}
          />
        ))}
      </div>
      <div className="bg-white/60 border border-black/5 rounded-2xl px-4 py-3.5 space-y-2">
        <p className="text-[9px] text-[#86868B] uppercase font-bold tracking-[0.1em]">Live Transcript</p>
        <div className="space-y-1.5">
          {step > 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[11px] text-[#424245]">
              <span className="font-bold text-[#1D1D1F]">Caller:</span> I need to reschedule...
            </motion.p>
          )}
          {step > 1 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[11px] text-[#424245]">
              <span className="font-bold text-[#5E5CE6]">Agent:</span> No problem. Moving to Wed...
            </motion.p>
          )}
          {step > 2 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[11px] text-[#5E5CE6] font-bold">
              ✓ Successfully updated to Wed 3pm
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}

function SupportScene({ step }: { step: number }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-[#86868B] tracking-tight">TICKET #4821</span>
          <span
            className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
              step > 3 ? "bg-[#34C759]/10 text-[#34C759]" : "bg-[#FF9500]/10 text-[#FF9500]"
            }`}
          >
            {step > 3 ? "Resolved" : "Active"}
          </span>
        </div>
        <span className="text-[10px] text-[#86868B] font-medium">Just now</span>
      </div>
      <div className="bg-[#F5F5F7] rounded-2xl px-4 py-3 border border-black/5">
        <p className="text-[10px] text-[#86868B] font-bold uppercase tracking-wider mb-1">Inquiry</p>
        <p className="text-xs text-[#1D1D1F] font-medium leading-relaxed">Where is my order #4821?</p>
      </div>
      <div className="space-y-2 px-1">
        {step > 0 && (
          <motion.div initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#5E5CE6]/10 flex items-center justify-center text-[10px] text-[#5E5CE6]">✓</div>
            <span className="text-[11px] text-[#424245] font-medium">Verified order status</span>
          </motion.div>
        )}
        {step > 1 && (
          <motion.div initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#5E5CE6]/10 flex items-center justify-center text-[10px] text-[#5E5CE6]">✓</div>
            <span className="text-[11px] text-[#424245] font-medium">Synced with DHL API</span>
          </motion.div>
        )}
        {step > 2 && (
          <motion.div initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#5E5CE6]/10 flex items-center justify-center text-[10px] text-[#5E5CE6]">✓</div>
            <span className="text-[11px] text-[#424245] font-medium">Updated customer via email</span>
          </motion.div>
        )}
      </div>
      {step > 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#34C759]/10 rounded-2xl px-4 py-2.5 text-[11px] text-[#34C759] font-bold text-center border border-[#34C759]/10"
        >
          Automated resolution in 14s
        </motion.div>
      )}
    </div>
  );
}

function WorkflowScene({ step }: { step: number }) {
  const stages = [
    { label: "New Lead", icon: "📥" },
    { label: "Qualify", icon: "🔍" },
    { label: "Score", icon: "📊" },
    { label: "CRM Sync", icon: "💾" },
  ];
  return (
    <div className="space-y-4">
      <p className="text-[11px] text-[#86868B] font-bold uppercase tracking-[0.1em] px-1">Pipeline Activity</p>
      <div className="space-y-3">
        {stages.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0.4, y: 4 }}
            animate={{ opacity: step > i ? 1 : 0.4, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs transition-colors ${step > i ? "bg-[#5E5CE6] text-white" : "bg-[#F5F5F7] text-[#86868B]"}`}>
              {step > i ? "✓" : s.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[12px] font-bold ${step > i ? "text-[#1D1D1F]" : "text-[#86868B]"}`}>{s.label}</span>
                {step > i && <span className="text-[10px] text-[#5E5CE6] font-bold">Complete</span>}
              </div>
              <div className="h-1 bg-[#F5F5F7] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: step > i ? "100%" : "0%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#5E5CE6]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IntegrationScene({ step }: { step: number }) {
  const integrations = [
    { trigger: "Slack request", triggerIcon: "💬", action: "Zendesk ticket", actionIcon: "🎫" },
    { trigger: "Stripe payout", triggerIcon: "💳", action: "WhatsApp alert", actionIcon: "📱" },
    { trigger: "HubSpot lead", triggerIcon: "🟠", action: "iCal booking", actionIcon: "📅" },
  ];
  return (
    <div className="space-y-4">
      <p className="text-[11px] text-[#86868B] font-bold uppercase tracking-[0.1em] px-1">Automated Triggers</p>
      <div className="space-y-3">
        {integrations.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: step > i ? 1 : 0.4, scale: 1 }}
            className="flex items-center gap-2"
          >
            <div className={`flex items-center gap-2 rounded-xl px-3 py-2 flex-1 min-w-0 border ${step > i ? "bg-[#F5F5F7] border-black/5" : "bg-transparent border-[#E8E8ED]"}`}>
              <span className="text-xs">{item.triggerIcon}</span>
              <span className={`text-[11px] font-bold truncate ${step > i ? "text-[#1D1D1F]" : "text-[#86868B]"}`}>{item.trigger}</span>
            </div>
            <div className="opacity-40">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L10 5M13 8L10 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={`flex items-center gap-2 rounded-xl px-3 py-2 flex-1 min-w-0 border ${step > i ? "bg-[#F0F0FF] border-[#5E5CE6]/10" : "bg-transparent border-[#E8E8ED]"}`}>
              <span className="text-xs">{item.actionIcon}</span>
              <span className={`text-[11px] font-bold truncate ${step > i ? "text-[#5E5CE6]" : "text-[#86868B]"}`}>{item.action}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Cycling agent preview (main card) ─────────────────── */
function CyclingAgentPreview() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [step, setStep] = useState(0);
  const scene = scenes[sceneIndex];
  const maxSteps = sceneIndex === 3 ? 4 : 4;

  const advanceScene = useCallback(() => {
    setSceneIndex((prev) => (prev + 1) % scenes.length);
    setStep(0);
  }, []);

  useEffect(() => {
    if (step <= maxSteps) {
      const timer = setTimeout(() => setStep((s) => s + 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(advanceScene, 2500);
      return () => clearTimeout(timer);
    }
  }, [step, maxSteps, advanceScene]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="rounded-[2.5rem] overflow-hidden bg-white border border-black/5 shadow-[0_32px_80px_rgba(0,0,0,0.1)] relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={sceneIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="px-7 py-5 border-b border-black/5 flex items-center gap-4 bg-[#FBFBFC]/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#5E5CE6] flex items-center justify-center shadow-lg shadow-[#5E5CE6]/20">
                <span className="text-lg">{scene.icon}</span>
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#1D1D1F] tracking-tight">{scene.name}</p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
                  <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">{scene.status}</span>
                </div>
              </div>
            </div>
            <div className="px-7 py-7 h-[280px] overflow-hidden bg-white">
              {sceneIndex === 0 && <ScheduleScene step={step} />}
              {sceneIndex === 1 && <VoiceScene step={step} />}
              {sceneIndex === 2 && <SupportScene step={step} />}
              {sceneIndex === 3 && <WorkflowScene step={step} />}
              {sceneIndex === 4 && <IntegrationScene step={step} />}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="px-7 pb-6 flex items-center justify-center gap-2 bg-white">
          {scenes.map((_, i) => (
            <motion.div
              key={i}
              animate={{ width: i === sceneIndex ? 24 : 6 }}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === sceneIndex ? "bg-[#5E5CE6]" : "bg-[#D2D2D7]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Hero section ──────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-white"
    >
      {/* Refined gradient atmosphere */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% -20%, rgba(94,92,230,0.06) 0%, transparent 60%)" }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(162,89,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="badge mb-8 lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-[#5E5CE6]" />
                Next-Gen AI Agency
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-[#1D1D1F]"
            >
              We&apos;ll build you
              <br />
              <TypingText />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg lg:text-xl text-[#6E6E73] max-w-lg mb-12 leading-relaxed mx-auto lg:mx-0 font-medium"
            >
              Transform your business with custom AI agents. We design, build, and scale intelligent automation that works from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-20"
            >
              <a href="#contact" className="btn-accent text-base px-10 py-4.5 rounded-full shadow-lg shadow-[#5E5CE6]/20">
                Start Building →
              </a>
              <a href="#process" className="btn-secondary text-base px-8 py-4.5 rounded-full">
                Learn More
              </a>
            </motion.div>

            {/* Premium Stats Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-12 justify-center lg:justify-start pt-10 border-t border-black/[0.04]"
            >
              {[
                { value: "48h", label: "Build time" },
                { value: "100%", label: "Custom" },
                { value: "24/7", label: "Active" },
              ].map((stat, i) => (
                <div key={stat.label}>
                  <p className="text-2xl lg:text-3xl font-bold text-[#1D1D1F] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Card collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              <CyclingAgentPreview />
            </div>

            {/* ── Floating glass cards ── */}

            {/* "Build Time" — Glass style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-8 -left-8 xl:-left-20 z-20 animate-float hidden lg:block"
            >
              <div className="glass rounded-[1.5rem] px-5 py-4 border border-white/40 shadow-xl">
                <p className="text-[10px] text-[#86868B] font-bold uppercase tracking-widest mb-1.5">Build Time</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#1D1D1F]">48h</span>
                  <span className="text-[10px] text-[#5E5CE6] font-bold bg-[#5E5CE6]/10 px-2 py-0.5 rounded-full">Avg.</span>
                </div>
              </div>
            </motion.div>

            {/* "Live" indicator — Glass style */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -top-6 right-0 xl:-right-6 z-20 animate-float-slow hidden lg:block"
            >
              <div className="glass rounded-full px-5 py-3 border border-white/40 flex items-center gap-3 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34C759] shadow-[0_0_8px_#34C759]" />
                <span className="text-xs font-bold text-[#1D1D1F]">12 agents live</span>
              </div>
            </motion.div>

            {/* Performance badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute top-[40%] right-0 xl:-right-10 z-20 hidden lg:block"
            >
              <div className="bg-[#1D1D1F] text-white rounded-2xl px-5 py-3 shadow-2xl">
                <p className="text-[11px] font-bold tracking-tight">LATENCY &lt; 200MS</p>
              </div>
            </motion.div>

            {/* Checklist — Glass style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute -bottom-10 right-0 xl:-right-4 z-20 animate-float-slow hidden lg:block"
            >
              <div className="glass rounded-[1.5rem] p-4 border border-white/40 space-y-3 shadow-xl w-40">
                {[
                  { label: "Design", color: "#5E5CE6" },
                  { label: "Build", color: "#A259FF" },
                  { label: "Scale", color: "#34C759" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] text-white"
                      style={{ backgroundColor: s.color }}
                    >
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1D1D1F]">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 24/7 Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-10 -left-6 xl:-left-12 z-20 hidden lg:block"
            >
              <div className="glass rounded-2xl px-5 py-3 border border-white/40 flex items-center gap-3 shadow-lg">
                <span className="text-lg">⚡</span>
                <span className="text-xs font-bold text-[#1D1D1F]">High Availability</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

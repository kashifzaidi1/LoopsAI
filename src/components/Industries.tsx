"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Healthcare",
    description: "Automate patient scheduling, intake forms, appointment reminders, and multilingual triage — so your staff can focus on care.",
    agents: ["BookAI", "LeadAI"],
    colorFrom: "#5E5CE6",
    colorTo: "#A259FF",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4" />
        <path d="M16 10v12M10 16h12" />
      </svg>
    ),
  },
  {
    title: "Home Services",
    description: "Never miss a job call again. AI handles scheduling for plumbers, electricians, and HVAC — even at 2am.",
    agents: ["BookAI", "LeadAI"],
    colorFrom: "#FF9500",
    colorTo: "#FF6B00",
    photo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28V14L16 4l12 10v14" />
        <rect x="11" y="18" width="10" height="10" rx="1" />
      </svg>
    ),
  },
  {
    title: "Legal & Professional",
    description: "Automate client intake, consultation scheduling, and follow-ups for law firms and consultants.",
    agents: ["BookAI", "Custom AI"],
    colorFrom: "#A259FF",
    colorTo: "#5E5CE6",
    photo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="3" />
        <path d="M10 12h12M10 16h12M10 20h8" />
      </svg>
    ),
  },
  {
    title: "Beauty & Wellness",
    description: "Let clients book 24/7 via chat, phone, or WhatsApp. Automated reminders keep chairs full and cancellations low.",
    agents: ["BookAI"],
    colorFrom: "#FF3B30",
    colorTo: "#FF6B8A",
    photo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="12" r="5" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    description: "Qualify leads automatically, schedule property showings, and follow up with prospects at the right moment.",
    agents: ["LeadAI", "BookAI"],
    colorFrom: "#007AFF",
    colorTo: "#00C7FF",
    photo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14.5L16 4l13 10.5" />
        <path d="M6 12v14h20V12" />
        <rect x="12" y="18" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Fitness & Education",
    description: "Automate class bookings, session scheduling, student onboarding, and parent communication — all in one agent.",
    agents: ["BookAI", "MarketSearch"],
    colorFrom: "#34C759",
    colorTo: "#00B37D",
    photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M10 16h3M19 16h3M13 16l2-4 2 8 2-4" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-36 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mb-20 lg:mb-28">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">
              Built for<br />
              <span className="text-[#86868B]">every industry.</span>
            </h2>
            <p className="text-lg lg:text-xl text-[#6E6E73] font-medium leading-relaxed">
              We tailor our AI agents to your specific industry — from healthcare to real estate. Whatever your workflow, we have an automation for it.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <FadeIn key={industry.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[2.5rem] overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full group cursor-pointer"
              >
                {/* Gradient header */}
                <div
                  className="relative h-52 flex items-end p-8 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${industry.colorFrom}, ${industry.colorTo})` }}
                >
                  {/* Photo — blended over gradient */}
                  <img
                    src={industry.photo}
                    alt={industry.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 pointer-events-none"
                  />
                  {/* Bottom fade for icon legibility */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }}
                  />
                  {/* Subtle highlight */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)" }}
                  />
                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                    {industry.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 tracking-tight">{industry.title}</h3>
                  <p className="text-base text-[#6E6E73] font-medium leading-relaxed mb-6 flex-1">
                    {industry.description}
                  </p>

                  {/* Agent tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {industry.agents.map((agent) => (
                      <span
                        key={agent}
                        className="text-[10px] bg-[#F5F5F7] text-[#86868B] px-3 py-1.5 rounded-full border border-black/5 font-bold uppercase tracking-wider"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-20 lg:mt-24 text-center">
            <p className="text-[#86868B] text-lg font-medium mb-8">
              Don&apos;t see your industry? We build custom AI solutions for any business.
            </p>
            <a href="#contact" className="btn-accent text-base px-10 py-4 rounded-full shadow-lg shadow-black/10 inline-block">
              Build My Agent →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

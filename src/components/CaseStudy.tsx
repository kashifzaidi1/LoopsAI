"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "BookAI plugs into your existing phone line, website, WhatsApp, and SMS — plus syncs with Google Calendar, Outlook, or Calendly. Setup takes under 10 minutes. No hardware. No IT team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: "#5E5CE6",
  },
  {
    number: "02",
    title: "Converse",
    description:
      "When a customer calls or messages, BookAI answers instantly — in their language. It detects their preferred language automatically, holds a natural conversation, and checks your real-time calendar availability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    color: "#A259FF",
  },
  {
    number: "03",
    title: "Confirm",
    description:
      "The appointment is booked and added to your calendar with zero double-bookings. Both you and the customer get an instant confirmation. Automated reminders go out 24 hours before — reducing no-shows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    color: "#34C759",
  },
];

const capabilities = [
  { label: "50+ Languages", detail: "Automatic language detection", icon: "🌐" },
  { label: "All Channels", detail: "Phone, WhatsApp, Web, SMS", icon: "📱" },
  { label: "Calendar Sync", detail: "Google, Outlook, Calendly", icon: "📅" },
  { label: "HIPAA-Ready", detail: "Built for healthcare practices", icon: "🔒" },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 lg:py-36 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="max-w-4xl mb-20 lg:mb-28">
            <div className="badge mb-6">Case Study: BookAI</div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.05] mb-8">
              Every missed call is<br />
              <span className="text-[#86868B]">a missed booking.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#6E6E73] font-medium leading-relaxed max-w-3xl">
              Service businesses — clinics, salons, plumbers, law firms — lose a significant share of inbound leads simply because no one picks up, especially after hours. BookAI is built to close that gap entirely.
            </p>
          </div>
        </FadeIn>

        {/* The Problem — Before state */}
        <FadeIn delay={0.1}>
          <div className="mb-16 lg:mb-20">
            <p className="text-[11px] font-bold text-[#86868B] uppercase tracking-[0.2em] mb-8">The Challenge</p>
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-black/5 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    problem: "Calls go to voicemail after hours",
                    context: "Most bookings happen when your staff isn't available — evenings and weekends.",
                  },
                  {
                    problem: "Language barriers lose customers",
                    context: "A significant portion of customers prefer not to communicate in English, yet most businesses have no multilingual support.",
                  },
                  {
                    problem: "Staff time consumed by scheduling",
                    context: "Phone scheduling pulls your team away from actual work — often 2–3 hours a day of back-and-forth.",
                  },
                ].map((item) => (
                  <div key={item.problem} className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#FF3B30] opacity-50 font-bold text-lg leading-none">✕</span>
                      <p className="text-base font-bold text-[#1D1D1F]">{item.problem}</p>
                    </div>
                    <p className="text-sm text-[#86868B] font-medium leading-relaxed pl-6">{item.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3-Step Solution */}
        <FadeIn delay={0.15}>
          <p className="text-[11px] font-bold text-[#86868B] uppercase tracking-[0.2em] mb-8">How BookAI Solves It</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[2.5rem] p-8 lg:p-10 border border-black/5 shadow-sm h-full flex flex-col group"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.25em]"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4 tracking-tight">{step.title}</h3>
                <p className="text-base text-[#6E6E73] font-medium leading-relaxed flex-1">{step.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Capabilities strip */}
        <FadeIn delay={0.45}>
          <div className="bg-[#1D1D1F] rounded-[2.5rem] p-8 lg:p-10 mb-16 lg:mb-20">
            <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Built-in Capabilities</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap) => (
                <div key={cap.label} className="flex flex-col gap-2">
                  <span className="text-2xl">{cap.icon}</span>
                  <p className="text-base font-bold text-white tracking-tight">{cap.label}</p>
                  <p className="text-sm text-white/50 font-medium">{cap.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Before / After — final state comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 lg:mb-20">
          <FadeIn delay={0.5}>
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 border border-black/5 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-3 h-3 rounded-full bg-[#FF3B30] shadow-[0_0_8px_rgba(255,59,48,0.5)]" />
                <span className="text-xs font-bold text-[#FF3B30] uppercase tracking-widest">Traditional Setup</span>
              </div>
              <ul className="space-y-5">
                {[
                  "Calls go unanswered evenings & weekends",
                  "Staff pulled away from billable work for scheduling",
                  "Manual calendar = double-bookings and errors",
                  "No way to serve non-English speaking customers",
                  "No automated reminders — high no-show rates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm text-[#6E6E73] font-medium">
                    <span className="text-[#FF3B30] opacity-40 mt-0.5 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="bg-[#1D1D1F] rounded-[2.5rem] p-10 lg:p-12 text-white shadow-2xl h-full relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <span className="w-3 h-3 rounded-full bg-[#34C759] shadow-[0_0_8px_rgba(52,199,89,0.5)] animate-pulse" />
                <span className="text-xs font-bold text-[#34C759] uppercase tracking-widest">With BookAI</span>
              </div>
              <ul className="space-y-5 relative z-10">
                {[
                  "Every call answered in seconds — 24/7, 365 days a year",
                  "Scheduling fully automated — zero staff time",
                  "Real-time calendar sync eliminates double-bookings",
                  "50+ languages handled natively, automatically",
                  "SMS & email reminders sent automatically before each appointment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm text-white/80 font-medium group-hover:text-white transition-colors duration-500">
                    <span className="text-[#34C759] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#5E5CE6]/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.65}>
          <div className="text-center">
            <p className="text-[#86868B] text-lg font-medium mb-8">
              Want to see exactly how BookAI would work for your business?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://f2320574.bookai-32i.pages.dev/" target="_blank" rel="noopener noreferrer" className="btn-accent text-base px-10 py-4 rounded-full shadow-lg shadow-[#5E5CE6]/20 inline-block">
                Try BookAI →
              </a>
              <a href="#contact" className="text-base px-10 py-4 rounded-full border border-black/10 font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors inline-block">
                Get a Free Strategy Call
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

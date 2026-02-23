"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const products = [
  {
    name: "BookAI",
    tagline: "Voice & Chat Scheduling",
    description: "A multilingual AI receptionist that books appointments 24/7 across all channels.",
    features: ["50+ Languages", "Calendar Sync", "Instant Alerts"],
    icon: "📅",
    color: "#5E5CE6",
    status: "Live Now",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&q=80&auto=format&fit=crop",
    dark: false,
  },
  {
    name: "MarketSearch",
    tagline: "Lead Discovery Engine",
    description: "Searches any area for businesses, analyzes Google Reviews to surface pain points, and delivers ready-to-close leads.",
    features: ["Google Reviews AI", "Area Targeting", "Pain Point Detection"],
    icon: "🔍",
    color: "#007AFF",
    status: "Coming Soon",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80&auto=format&fit=crop",
    dark: true,
  },
  {
    name: "LeadAI",
    tagline: "High-Velocity Intake",
    description: "Qualifies and routes hot prospects in real-time.",
    features: ["Lead Scoring", "CRM Integration"],
    icon: "🎯",
    color: "#34C759",
    status: "Live Now",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop",
    dark: false,
  },
  {
    name: "Custom Agent",
    tagline: "Bespoke Intelligence",
    description: "Tailored AI built for your unique enterprise workflows.",
    features: ["Full API Access", "Dedicated Scale"],
    icon: "⚡",
    color: "#FF9500",
    status: "Enterprise",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
    dark: false,
  },
];

/* Shared tag + glow fragment */
function FeatureTags({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {product.features.map((f) => (
        <span
          key={f}
          className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
            product.dark
              ? "border-white/10 bg-white/5 text-white/80"
              : "border-black/5 bg-black/5 text-black/60"
          }`}
        >
          {f}
        </span>
      ))}
    </div>
  );
}

function CardHeader({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
        style={{ backgroundColor: product.color + "20", color: product.color }}
      >
        {product.icon}
      </div>
      <div
        className={`text-[11px] font-bold uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity ${
          product.dark ? "text-white" : "text-[#1D1D1F]"
        }`}
      >
        {product.status}
      </div>
    </div>
  );
}

export default function Products() {
  const [bookAI, marketSearch, leadAI, customAgent] = products;

  return (
    <section id="products" className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">
              Intelligent agents.<br />Built for{" "}
              <span className="text-[#86868B]">every scale.</span>
            </h2>
            <p className="text-lg lg:text-xl text-[#86868B] font-medium">
              Seamlessly integrate AI into your existing workflows with our suite of specialized agents.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {/* ── Row 1: BookAI (large) + right stack ──────────── */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* BookAI — large left card */}
            <FadeIn delay={0} className="flex-[3]">
              <a href="https://f2320574.bookai-32i.pages.dev/" target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                whileHover={{ scale: 1.012 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#F5F5F7] rounded-[2.5rem] overflow-hidden flex flex-col group cursor-pointer min-h-[560px] lg:min-h-[620px]"
              >
                {/* Content */}
                <div className="p-8 lg:p-10">
                  <CardHeader product={bookAI} />
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2 text-[#1D1D1F]">
                    {bookAI.name}
                  </h3>
                  <p className="text-sm lg:text-base text-[#86868B] font-medium mb-5">
                    {bookAI.description}
                  </p>
                  <FeatureTags product={bookAI} />
                </div>

                {/* Image — fills bottom of card */}
                <div className="mt-auto h-[260px] lg:h-[300px] relative overflow-hidden">
                  <img
                    src={bookAI.image}
                    alt="Scheduling calendar interface"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Top fade to match card bg */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F5F5F7] to-transparent" />
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 110%, ${bookAI.color}12 0%, transparent 65%)` }}
                />
              </motion.div>
              </a>
            </FadeIn>

            {/* Right column — MarketSearch + LeadAI stacked */}
            <div className="flex-[2] flex flex-col gap-6">
              {/* MarketSearch — dark card with bg image */}
              <FadeIn delay={0.1} className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-[#1D1D1F] rounded-[2.5rem] overflow-hidden flex flex-col group cursor-pointer h-full min-h-[260px]"
                >
                  {/* Background image at top with fade */}
                  <div className="absolute inset-x-0 top-0 h-[140px]">
                    <img
                      src={marketSearch.image}
                      alt="City business district"
                      className="w-full h-full object-cover object-center opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1F]/20 to-[#1D1D1F]" />
                  </div>

                  {/* Content sits below image */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-7 lg:p-8 pt-[110px]">
                    <div>
                      <CardHeader product={marketSearch} />
                      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2 text-white">
                        {marketSearch.name}
                      </h3>
                      <p className="text-sm text-white/60 font-medium mb-5 line-clamp-2">
                        {marketSearch.description}
                      </p>
                    </div>
                    <FeatureTags product={marketSearch} />
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 110%, ${marketSearch.color}18 0%, transparent 70%)` }}
                  />
                </motion.div>
              </FadeIn>

              {/* LeadAI — light card with bg image */}
              <FadeIn delay={0.2} className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-[#F5F5F7] rounded-[2.5rem] overflow-hidden flex flex-col group cursor-pointer h-full min-h-[260px]"
                >
                  {/* Background image at top with fade */}
                  <div className="absolute inset-x-0 top-0 h-[140px]">
                    <img
                      src={leadAI.image}
                      alt="Analytics dashboard"
                      className="w-full h-full object-cover object-top opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7]/10 to-[#F5F5F7]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-7 lg:p-8 pt-[110px]">
                    <div>
                      <CardHeader product={leadAI} />
                      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2 text-[#1D1D1F]">
                        {leadAI.name}
                      </h3>
                      <p className="text-sm text-[#86868B] font-medium mb-5 line-clamp-2">
                        {leadAI.description}
                      </p>
                    </div>
                    <FeatureTags product={leadAI} />
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 110%, ${leadAI.color}12 0%, transparent 65%)` }}
                  />
                </motion.div>
              </FadeIn>
            </div>
          </div>

          {/* ── Row 2: Custom Agent — wide card with side image ── */}
          <FadeIn delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.008 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#F5F5F7] rounded-[2.5rem] overflow-hidden flex flex-row group cursor-pointer min-h-[220px]"
            >
              {/* Text content */}
              <div className="flex flex-col justify-between p-8 lg:p-10 flex-1 z-10">
                <div>
                  <CardHeader product={customAgent} />
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2 text-[#1D1D1F]">
                    {customAgent.name}
                  </h3>
                  <p className="text-sm lg:text-base text-[#86868B] font-medium mb-5 max-w-sm">
                    {customAgent.description}
                  </p>
                </div>
                <FeatureTags product={customAgent} />
              </div>

              {/* Image — right half */}
              <div className="hidden md:block relative w-[45%] overflow-hidden flex-shrink-0">
                <img
                  src={customAgent.image}
                  alt="Technology infrastructure"
                  className="w-full h-full object-cover object-center"
                />
                {/* Left fade to match card bg */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F5F7] to-transparent" />
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 80% 50%, ${customAgent.color}12 0%, transparent 60%)` }}
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const steps = [
  { 
    number: "01", 
    title: "Strategy Call", 
    description: "We learn about your workflows and pain points. No commitment, just a conversation.", 
    icon: "🎯",
    color: "#5E5CE6"
  },
  { 
    number: "02", 
    title: "Agent Design", 
    description: "Our team designs a custom AI agent tailored to your exact needs — from flow to integration.", 
    icon: "🧠",
    color: "#A259FF"
  },
  { 
    number: "03", 
    title: "Build & Sync", 
    description: "We build your agent, train it on your data, and connect it to your existing tools.", 
    icon: "🚀",
    color: "#34C759"
  },
  { 
    number: "04", 
    title: "Optimize", 
    description: "We monitor performance, fine-tune conversations, and scale as your business grows.", 
    icon: "📈",
    color: "#FF9500"
  },
];

export default function Process() {
  return (
    <section id="solutions" className="py-24 lg:py-36 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-8 leading-[1.05]">
              The road to <span className="text-[#86868B]">automation.</span>
            </h2>
            <p className="text-lg lg:text-2xl text-[#6E6E73] font-medium max-w-2xl mx-auto leading-relaxed">
              We handle every detail from design to optimization. Launch your custom AI in days.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white rounded-[2.5rem] p-10 lg:p-12 h-full flex flex-col items-center text-center shadow-sm relative group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: step.color + "10", color: step.color }}
                >
                  {step.icon}
                </div>
                
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: step.color }}>
                  Step {step.number}
                </div>
                
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-base text-[#6E6E73] font-medium leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Step Number in Background */}
                <div className="absolute -bottom-4 right-6 text-9xl font-bold text-black/[0.02] pointer-events-none select-none">
                  {step.number}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

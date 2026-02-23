"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="bg-[#1D1D1F] rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center lg:text-left group">
            {/* Decorative Atmosphere */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5E5CE6]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#5E5CE6]/15 transition-all duration-1000" />
            <div className="absolute -bottom-[200px] -left-[100px] w-[500px] h-[500px] bg-[#A259FF]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#A259FF]/15 transition-all duration-1000" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
              <div className="max-w-3xl">
                <div className="flex mb-10 justify-center lg:justify-start">
                  <Logo variant="glass" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-[1.05] group-hover:scale-[1.01] transition-transform duration-700 origin-left">
                  Ready to automate<br />your business?
                </h2>
                <p className="text-xl lg:text-2xl text-white/50 font-medium max-w-xl leading-relaxed">
                  Book a free 30-minute consultation. We&apos;ll show you how AI can save you time and money.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="#" 
                  className="bg-white text-black font-bold px-10 py-5 rounded-full text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/10 hover:scale-105 active:scale-95"
                >
                  Book Consultation →
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

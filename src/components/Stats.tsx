"use client";

import FadeIn from "./FadeIn";

const stats = [
  { value: "48h", label: "Avg. Build Time" },
  { value: "50+", label: "Languages Supported" },
  { value: "24/7", label: "Always Active" },
  { value: "100%", label: "Custom Built" },
];

export default function Stats() {
  return (
    <section className="py-24 lg:py-36 bg-white border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-3">
                  {stat.value}
                </div>
                <p className="text-[#86868B] text-[13px] font-bold uppercase tracking-widest leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

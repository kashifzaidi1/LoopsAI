"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl border-b border-black/[0.05] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group hover:opacity-80 transition-opacity duration-300">
            <Logo />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {["Products", "Case Study", "Solutions", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#contact"
              className="btn-accent text-sm px-6 py-2.5 rounded-full"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#1D1D1F]"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end relative">
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "w-6 absolute top-2 rotate-45" : "w-6"}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0" : "w-4"}`} />
              <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "w-6 absolute top-2 -rotate-45" : "w-5"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-[72px] bg-white z-40 px-6 py-10 flex flex-col gap-8"
          >
            {["Products", "Case Study", "Solutions", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setOpen(false)}
                className="text-4xl font-bold text-[#1D1D1F] tracking-tight hover:text-[#5E5CE6] transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="mt-auto pb-20">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-accent block text-lg px-8 py-5 text-center rounded-3xl text-white font-bold"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { HOTEL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-heading text-sm font-medium tracking-widest text-sand uppercase"
        >
          Welcome to
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          {HOTEL.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-2 font-heading text-xl font-medium text-white/90 sm:text-2xl"
        >
          {HOTEL.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 text-base text-white/70"
        >
          Steps from Golden Beach &bull; Near Jagannath Temple &bull; Blue Flag
          Beach
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={HOTEL.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ocean px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-ocean-dark hover:shadow-xl"
          >
            Book Now
          </a>
          <a
            href="#rooms"
            className="rounded-full border-2 border-white/60 px-8 py-3 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Explore Rooms
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-white/70" size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
}

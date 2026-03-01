"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoTour() {
  return (
    <section id="video-tour" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-ocean">
            Virtual Tour
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl">
            Take a Video Tour
          </h2>
          <p className="mx-auto max-w-2xl text-dark/60">
            Explore Hotel Surya Beach Inn and the beautiful beaches of Puri from
            the comfort of your screen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="relative aspect-video bg-dark">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Hotel Surya Beach Inn Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean/80 text-white">
              <Play size={28} fill="white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

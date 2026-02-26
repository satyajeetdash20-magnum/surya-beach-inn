"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";

export default function VideoTour() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-white py-20">
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
            Take a Walk Through Our Property
          </h2>
          <p className="mx-auto max-w-2xl text-dark/60">
            Experience the warm ambiance, spacious rooms, and beachside charm
            before you arrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
        >
          {!playing ? (
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80"
                alt="Hotel Surya Beach Inn virtual tour preview"
                width={1200}
                height={675}
                className="h-[300px] w-full object-cover sm:h-[450px] lg:h-[550px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={() => setPlaying(true)}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform group-hover:scale-110">
                    <Play
                      size={32}
                      className="ml-1 text-ocean"
                      fill="currentColor"
                    />
                  </div>
                  <span className="flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    <Video size={16} />
                    Watch Video Tour
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="relative bg-black" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Hotel Surya Beach Inn Virtual Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>

        <p className="mt-4 text-center text-sm text-dark/40">
          Video placeholder — replace with actual hotel walkthrough video
        </p>
      </div>
    </section>
  );
}

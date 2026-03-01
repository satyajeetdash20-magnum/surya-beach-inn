"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Car, Footprints } from "lucide-react";
import { HOTEL, LANDMARKS } from "@/lib/constants";

const categoryIcons: Record<string, string> = {
  temple: "🛕",
  beach: "🏖️",
  food: "🍽️",
  transport: "🚂",
  shopping: "🛍️",
};

export default function LocationMap() {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  return (
    <section id="location" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-ocean">
            Location
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl">
            Perfectly Located in Puri
          </h2>
          <p className="mx-auto max-w-2xl text-dark/60">
            Steps from Golden Beach and close to all major attractions. Here&apos;s
            what&apos;s nearby.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              {mapReady && (
                <iframe
                  title="Hotel Surya Beach Inn Location"
                  src={HOTEL.mapsEmbedUrl}
                  className="h-[400px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </motion.div>

          {/* Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-3">
              {LANDMARKS.map((landmark) => (
                <div
                  key={landmark.name}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-soft p-4 transition-shadow hover:shadow-md"
                >
                  <span className="text-lg">
                    {categoryIcons[landmark.category] || "📍"}
                  </span>
                  <div className="flex-1">
                    <p className="font-heading text-sm font-semibold text-dark">
                      {landmark.name}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="flex items-center gap-1 text-xs text-dark/50">
                        <MapPin size={10} />
                        {landmark.distance}
                      </span>
                      {landmark.walkTime && (
                        <span className="flex items-center gap-1 text-xs text-dark/50">
                          <Footprints size={10} />
                          {landmark.walkTime}
                        </span>
                      )}
                      {landmark.driveTime && (
                        <span className="flex items-center gap-1 text-xs text-dark/50">
                          <Car size={10} />
                          {landmark.driveTime}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

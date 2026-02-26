"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Church,
  Umbrella,
  Train,
  UtensilsCrossed,
} from "lucide-react";
import { HOTEL, LANDMARKS } from "@/lib/constants";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  temple: Church,
  beach: Umbrella,
  transport: Train,
  food: UtensilsCrossed,
  shopping: MapPin,
};

const categoryColors: Record<string, string> = {
  temple: "text-amber-600 bg-amber-50",
  beach: "text-cyan-600 bg-cyan-50",
  transport: "text-purple-600 bg-purple-50",
  food: "text-red-600 bg-red-50",
  shopping: "text-emerald-600 bg-emerald-50",
};

const categoryFilters = [
  { id: "all", label: "All" },
  { id: "temple", label: "Temples" },
  { id: "beach", label: "Beaches" },
  { id: "food", label: "Food" },
  { id: "transport", label: "Transport" },
];

export default function LocationMap() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const filtered =
    activeFilter === "all"
      ? LANDMARKS
      : LANDMARKS.filter((l) => l.category === activeFilter);

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
            Perfectly Placed in Puri
          </h2>
          <p className="mx-auto max-w-2xl text-dark/60">
            0.9 km from the city center, steps from Golden Beach, and close to
            all major attractions.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categoryFilters.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-ocean text-white"
                  : "bg-gray-soft text-dark/60 hover:text-ocean"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="h-[400px] overflow-hidden rounded-2xl shadow-lg lg:h-[500px]">
              {mapLoaded && (
                <iframe
                  title="Hotel Surya Beach Inn Location"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${HOTEL.coordinates.lng - 0.02}%2C${HOTEL.coordinates.lat - 0.015}%2C${HOTEL.coordinates.lng + 0.02}%2C${HOTEL.coordinates.lat + 0.015}&layer=mapnik&marker=${HOTEL.coordinates.lat}%2C${HOTEL.coordinates.lng}`}
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Landmarks sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {/* Hotel card */}
              <div className="flex items-center gap-4 rounded-xl border-2 border-ocean/20 bg-ocean-light p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-dark">
                    {HOTEL.name}
                  </p>
                  <p className="text-xs text-dark/60">
                    C.T. Road, Baliguali, Puri
                  </p>
                </div>
              </div>

              {filtered.map((landmark) => {
                const Icon = categoryIcons[landmark.category] || MapPin;
                const colors = categoryColors[landmark.category] || "text-gray-600 bg-gray-50";
                return (
                  <motion.div
                    key={landmark.name}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-4 rounded-xl bg-gray-soft p-4 transition-colors hover:bg-gray-100"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colors}`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading text-sm font-semibold text-dark">
                        {landmark.name}
                      </p>
                      <p className="text-xs text-dark/50">
                        {landmark.distance}
                      </p>
                    </div>
                    <div className="text-right">
                      {landmark.walkTime && (
                        <p className="text-xs text-dark/60">
                          🚶 {landmark.walkTime}
                        </p>
                      )}
                      {landmark.driveTime && (
                        <p className="text-xs text-dark/60">
                          🚗 {landmark.driveTime}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

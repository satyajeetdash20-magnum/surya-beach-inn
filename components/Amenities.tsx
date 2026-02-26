"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Coffee,
  UtensilsCrossed,
  ConciergeBell,
  Briefcase,
  Snowflake,
  CookingPot,
  Baby,
  Gamepad2,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Zap,
  WashingMachine,
  Phone,
} from "lucide-react";
import { AMENITIES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wifi,
  Car,
  Coffee,
  UtensilsCrossed,
  ConciergeBell,
  Briefcase,
  Snowflake,
  CookingPot,
  Baby,
  Gamepad2,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Zap,
  WashingMachine,
  Phone,
};

const categoryLabels: Record<string, string> = {
  essential: "Essential",
  comfort: "Comfort",
  family: "Family",
  wellness: "Wellness",
};

export default function Amenities() {
  const grouped = AMENITIES.reduce(
    (acc, a) => {
      if (!acc[a.category]) acc[a.category] = [];
      acc[a.category].push(a);
      return acc;
    },
    {} as Record<string, typeof AMENITIES>
  );

  return (
    <section id="amenities" className="bg-gray-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-ocean">
            Amenities
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-dark/60">
            From free WiFi and parking to a multi-cuisine restaurant and family
            activities — we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 font-heading text-lg font-semibold text-dark/80">
                {categoryLabels[category]}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {items.map((amenity, idx) => {
                  const Icon = iconMap[amenity.icon];
                  return (
                    <motion.div
                      key={amenity.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="group flex flex-col items-center rounded-xl bg-white p-4 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                    >
                      {Icon && (
                        <Icon
                          size={28}
                          className="mb-2 text-ocean/70 transition-colors group-hover:text-ocean"
                        />
                      )}
                      <span className="text-sm font-medium text-dark/70 group-hover:text-dark">
                        {amenity.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

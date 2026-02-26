"use client";

import { motion } from "framer-motion";
import { Wind, Sunrise, Waves } from "lucide-react";
import { ENVIRONMENT_DATA } from "@/lib/constants";

interface GaugeCardProps {
  title: string;
  rating: string;
  level: number;
  maxLevel: number;
  stops: string[];
  description: string;
  extra?: string;
  gradient: string;
  icon: React.ReactNode;
}

function GaugeCard({
  title,
  rating,
  level,
  maxLevel,
  stops,
  description,
  extra,
  gradient,
  icon,
}: GaugeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-lg ${gradient}`}
    >
      <div className="mb-1 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/80">
        {icon}
        {title}
      </div>
      <h3 className="mb-5 font-heading text-2xl font-bold">{rating}</h3>

      {/* Gauge */}
      <div className="mb-2">
        <div className="flex items-center gap-1">
          {stops.map((_, idx) => (
            <div key={idx} className="flex flex-1 flex-col items-center">
              <div
                className={`h-2 w-full rounded-full transition-all ${
                  idx < level ? "bg-white" : "bg-white/25"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="mt-1 flex justify-between">
          {stops.map((stop, idx) => (
            <span
              key={stop}
              className={`text-[10px] ${
                idx === level - 1 ? "font-bold text-white" : "text-white/50"
              }`}
            >
              {stop}
            </span>
          ))}
        </div>
      </div>

      {extra && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/90">
          {extra}
        </p>
      )}
      <p className="mt-2 text-sm leading-relaxed text-white/80">
        {description}
      </p>
    </motion.div>
  );
}

export default function EnvironmentIndicators() {
  const { breeze, sunrise, ambiance } = ENVIRONMENT_DATA;

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
            The Experience
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl">
            What It Feels Like to Stay Here
          </h2>
          <p className="mx-auto max-w-2xl text-dark/60">
            More than just a room — feel the ocean breeze, witness golden
            sunrises, and fall asleep to the sound of waves.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <GaugeCard
            title={breeze.title}
            rating={breeze.rating}
            level={breeze.level}
            maxLevel={breeze.maxLevel}
            stops={breeze.stops}
            description={breeze.description}
            extra={`Best Season: ${breeze.bestSeason}`}
            gradient="bg-gradient-to-br from-sky-500 to-blue-600"
            icon={<Wind size={16} />}
          />
          <GaugeCard
            title={sunrise.title}
            rating={sunrise.rating}
            level={sunrise.level}
            maxLevel={sunrise.maxLevel}
            stops={sunrise.stops}
            description={sunrise.description}
            extra={`Best Time: ${sunrise.bestTime}`}
            gradient="bg-gradient-to-br from-amber-400 to-orange-500"
            icon={<Sunrise size={16} />}
          />
          <GaugeCard
            title={ambiance.title}
            rating={ambiance.rating}
            level={ambiance.level}
            maxLevel={ambiance.maxLevel}
            stops={ambiance.stops}
            description={ambiance.description}
            extra={`Noise Level: ${ambiance.dbRange}`}
            gradient="bg-gradient-to-br from-teal-500 to-emerald-600"
            icon={<Waves size={16} />}
          />
        </div>
      </div>
    </section>
  );
}

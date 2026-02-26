"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ROOMS, HOTEL } from "@/lib/constants";
import RoomAmbiancePreview from "./RoomAmbiancePreview";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-gray-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-ocean">
            Our Rooms
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl">
            Comfort Meets the Coast
          </h2>
          <p className="mx-auto max-w-2xl text-dark/60">
            Choose from {HOTEL.totalRooms} spacious, naturally lit rooms.
            Toggle the ambiance preview to see how your room looks at different
            times of day.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <RoomAmbiancePreview src={room.image} alt={room.name} />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-dark">
                    {room.name}
                  </h3>
                  <span className="rounded-full bg-ocean-light px-3 py-1 text-sm font-semibold text-ocean">
                    {room.priceRange}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-dark/60">
                  {room.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className="flex items-center gap-1 rounded-full bg-gray-soft px-3 py-1 text-xs font-medium text-dark/70"
                    >
                      <Check size={12} className="text-ocean" />
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={HOTEL.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-ocean px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
                >
                  Book This Room
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

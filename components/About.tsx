"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Footprints, CalendarDays, Users } from "lucide-react";
import { HOTEL } from "@/lib/constants";

const stats = [
  { icon: Building2, value: `${HOTEL.totalRooms}`, label: "Rooms" },
  { icon: Footprints, value: "5-min", label: "Beach Walk" },
  { icon: CalendarDays, value: `${HOTEL.established}`, label: "Established" },
  { icon: Users, value: "Family", label: "Friendly" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80"
                alt="Hotel Surya Beach Inn exterior"
                width={700}
                height={500}
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-ocean px-6 py-3 shadow-lg">
              <p className="font-heading text-sm font-semibold text-white">
                Since {HOTEL.established}
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-ocean">
              About Us
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold text-dark sm:text-4xl">
              A Home Away From Home on Puri&apos;s Golden Coast
            </h2>
            <p className="mb-4 leading-relaxed text-dark/70">
              {HOTEL.description}
            </p>
            <p className="mb-8 leading-relaxed text-dark/70">
              Whether you&apos;re here for a spiritual journey to the Jagannath Temple,
              a relaxing beach holiday, or an adventurous family trip, Hotel
              Surya Beach Inn is your perfect base. Our dedicated staff ensures
              every guest feels welcomed and cared for.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-100 bg-gray-soft p-4 text-center"
                >
                  <stat.icon className="mx-auto mb-2 text-ocean" size={24} />
                  <p className="font-heading text-xl font-bold text-dark">
                    {stat.value}
                  </p>
                  <p className="text-xs text-dark/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

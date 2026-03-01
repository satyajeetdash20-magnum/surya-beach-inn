"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { HOTEL } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-gray-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-ocean">
            Get in Touch
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl">
            We&apos;d Love to Hear From You
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-lg">
                <CheckCircle2 className="mb-4 text-green-500" size={56} />
                <h3 className="mb-2 font-heading text-xl font-bold text-dark">
                  Message Sent!
                </h3>
                <p className="text-dark/60">
                  Thank you for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-dark/70">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-ocean focus:ring-1 focus:ring-ocean"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-dark/70">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-ocean focus:ring-1 focus:ring-ocean"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-dark/70">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-ocean focus:ring-1 focus:ring-ocean"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-dark/70">
                      Guests
                    </label>
                    <select className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-ocean focus:ring-1 focus:ring-ocean">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-dark/70">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-ocean focus:ring-1 focus:ring-ocean"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-dark/70">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-ocean focus:ring-1 focus:ring-ocean"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-dark/70">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-ocean focus:ring-1 focus:ring-ocean"
                    placeholder="Any special requests or questions..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-ocean px-6 py-3 font-semibold text-white transition-colors hover:bg-ocean-dark disabled:opacity-60"
                >
                  {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Hotel info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-heading text-lg font-bold text-dark">
                Hotel Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-ocean" size={18} />
                  <p className="text-sm text-dark/70">{HOTEL.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="shrink-0 text-ocean" size={18} />
                  <a
                    href={`tel:${HOTEL.phone}`}
                    className="text-sm text-dark/70 hover:text-ocean"
                  >
                    {HOTEL.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="shrink-0 text-ocean" size={18} />
                  <a
                    href={`mailto:${HOTEL.email}`}
                    className="text-sm text-dark/70 hover:text-ocean"
                  >
                    {HOTEL.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="shrink-0 text-ocean" size={18} />
                  <a
                    href={`https://wa.me/${HOTEL.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dark/70 hover:text-ocean"
                  >
                    WhatsApp Us
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 shrink-0 text-ocean" size={18} />
                  <div className="text-sm text-dark/70">
                    <p>Check-in: {HOTEL.checkIn}</p>
                    <p>Check-out: {HOTEL.checkOut}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="Hotel Surya Beach Inn on Google Maps"
                src={HOTEL.mapsEmbedUrl}
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

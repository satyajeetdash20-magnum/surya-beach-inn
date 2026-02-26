"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { HOTEL } from "@/lib/constants";

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-white/10 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Hotel name — hidden on mobile */}
          <p className="hidden font-heading text-sm font-semibold text-dark md:block">
            {HOTEL.name}
          </p>

          <div className="flex w-full items-center justify-center gap-3 md:w-auto">
            <a
              href={HOTEL.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
            >
              <CalendarCheck size={16} />
              <span>Book Now</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={`tel:${HOTEL.phone}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-dark text-white transition-colors hover:bg-dark/80"
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

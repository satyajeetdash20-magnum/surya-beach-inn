"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, HOTEL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full font-heading text-lg font-bold ${
              scrolled
                ? "bg-ocean text-white"
                : "bg-white/20 text-white backdrop-blur-sm"
            }`}
          >
            S
          </div>
          <span
            className={`font-heading text-lg font-semibold transition-colors ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            Surya Beach Inn
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-ocean ${
                scrolled ? "text-dark/80" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={HOTEL.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ocean px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-dark" : "text-white"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-dark" : "text-white"} size={24} />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-1 bg-white px-4 pb-4 pt-2 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-dark/80 transition-colors hover:bg-ocean-light hover:text-ocean"
            >
              {link.label}
            </a>
          ))}
          <a
            href={HOTEL.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-ocean px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { NAV_LINKS, HOTEL } from "@/lib/constants";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

export default function SideNav({ open, onClose }: SideNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-[70] flex h-full w-[320px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-end px-5 py-4">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 text-dark/70 transition-colors hover:text-dark"
          >
            <X size={26} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-5">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-gray-100 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-dark/80 transition-colors hover:text-ocean"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book Now button */}
        <div className="px-5 pb-8">
          <a
            href={HOTEL.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded bg-ocean px-6 py-3 text-center font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-ocean-dark"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}

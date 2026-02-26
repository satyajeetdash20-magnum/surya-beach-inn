import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { HOTEL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean font-heading text-lg font-bold text-white">
                S
              </div>
              <span className="font-heading text-lg font-semibold text-white">
                Surya Beach Inn
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Your beachside retreat in Puri, Odisha. Cozy rooms, warm
              hospitality, and steps from Golden Beach since {HOTEL.established}.
            </p>
            <div className="flex gap-3">
              <a
                href={HOTEL.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ocean"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={HOTEL.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ocean"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-ocean"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={HOTEL.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-ocean"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ocean" />
                {HOTEL.address}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="shrink-0 text-ocean" />
                <a href={`tel:${HOTEL.phone}`} className="hover:text-ocean">
                  {HOTEL.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="shrink-0 text-ocean" />
                <a
                  href={`mailto:${HOTEL.email}`}
                  className="hover:text-ocean"
                >
                  {HOTEL.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Hotel Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-white/50">Check-in:</span>{" "}
                {HOTEL.checkIn}
              </li>
              <li>
                <span className="text-white/50">Check-out:</span>{" "}
                {HOTEL.checkOut}
              </li>
              <li>
                <span className="text-white/50">Front Desk:</span> 24/7
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={HOTEL.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-ocean px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
              >
                Reserve Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {HOTEL.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

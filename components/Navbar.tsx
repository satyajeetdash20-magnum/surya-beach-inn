"use client";

import { useState } from "react";
import { HOTEL } from "@/lib/constants";
import SideNav from "./SideNav";

export default function Navbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <nav className="flex items-center justify-between px-5 py-3 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ocean font-heading text-lg font-bold text-white">
              S
            </div>
            <span className="font-heading text-base font-bold uppercase tracking-wide text-dark sm:text-lg">
              {HOTEL.name.replace("Hotel ", "")} &mdash; Puri
            </span>
          </a>

          <button
            onClick={() => setSideNavOpen(true)}
            aria-label="Open menu"
            className="flex flex-col items-center justify-center gap-[5px] p-2"
          >
            <span className="block h-[2px] w-6 bg-dark" />
            <span className="block h-[2px] w-6 bg-dark" />
            <span className="block h-[2px] w-6 bg-dark" />
          </button>
        </nav>
      </header>

      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
    </>
  );
}

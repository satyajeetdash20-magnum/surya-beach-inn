"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HOTEL, PLACEHOLDER_MEDIA } from "@/lib/constants";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {mounted && !videoFailed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={PLACEHOLDER_MEDIA.heroVideo}
          poster={PLACEHOLDER_MEDIA.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        />
      ) : (
        <div className="absolute inset-0">
          <Image
            src={PLACEHOLDER_MEDIA.heroPoster}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 font-heading text-sm font-semibold tracking-[0.25em] text-sand uppercase">
          Welcome to
        </p>
        <h1 className="mb-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {HOTEL.name}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-white/85 sm:text-lg">
          {HOTEL.tagline}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={HOTEL.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ocean px-8 py-3 font-heading text-sm font-semibold tracking-wide text-white transition-colors hover:bg-ocean-dark"
          >
            Book Now
          </a>
          <a
            href="#rooms"
            className="inline-block rounded-full border border-white/70 px-8 py-3 font-heading text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/15"
          >
            Explore Rooms
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#about"
          className="inline-block rounded bg-ocean px-8 py-3 font-heading text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-ocean-dark"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}

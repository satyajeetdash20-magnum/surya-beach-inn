"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Sunset, Moon } from "lucide-react";

const ambiances = [
  { id: "morning", label: "Morning", icon: Sun, className: "ambiance-morning" },
  { id: "sunset", label: "Sunset", icon: Sunset, className: "ambiance-sunset" },
  { id: "night", label: "Night", icon: Moon, className: "ambiance-night" },
] as const;

interface RoomAmbiancePreviewProps {
  src: string;
  alt: string;
}

export default function RoomAmbiancePreview({ src, alt }: RoomAmbiancePreviewProps) {
  const [active, setActive] = useState<string | null>(null);

  const filterClass = ambiances.find((a) => a.id === active)?.className ?? "";

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className={`h-56 w-full object-cover transition-all duration-500 sm:h-64 ${filterClass}`}
      />
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-black/50 p-1 backdrop-blur-sm">
        {ambiances.map((a) => (
          <button
            key={a.id}
            onClick={() => setActive(active === a.id ? null : a.id)}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              active === a.id
                ? "bg-white text-dark"
                : "text-white/80 hover:text-white"
            }`}
          >
            <a.icon size={12} />
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Sunset, Moon } from "lucide-react";

const modes = [
  { id: "morning", label: "Morning", icon: Sun, filterClass: "ambiance-morning" },
  { id: "sunset", label: "Sunset", icon: Sunset, filterClass: "ambiance-sunset" },
  { id: "night", label: "Night", icon: Moon, filterClass: "ambiance-night" },
] as const;

interface RoomAmbiancePreviewProps {
  src: string;
  alt: string;
}

export default function RoomAmbiancePreview({ src, alt }: RoomAmbiancePreviewProps) {
  const [activeMode, setActiveMode] = useState<string | null>(null);

  const activeFilter = modes.find((m) => m.id === activeMode)?.filterClass ?? "";

  return (
    <div className="relative overflow-hidden rounded-t-xl">
      <div className={`transition-all duration-700 ${activeFilter}`}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          className="h-56 w-full object-cover sm:h-64"
        />
      </div>
      {/* Ambiance toggles */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 p-1 backdrop-blur-sm">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() =>
              setActiveMode(activeMode === mode.id ? null : mode.id)
            }
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              activeMode === mode.id
                ? "bg-white text-dark"
                : "text-white/80 hover:text-white"
            }`}
          >
            <mode.icon size={14} />
            <span className="hidden sm:inline">{mode.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

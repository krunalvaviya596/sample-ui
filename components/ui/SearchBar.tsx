"use client";

import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  placeholder = "What you need help",
  className = "",
}: SearchBarProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white px-7 py-5 shadow-xl shadow-black/5",
        className,
      )}
    >
      <span className="text-[15px] text-gray-400">{placeholder}</span>
    </div>
  );
}

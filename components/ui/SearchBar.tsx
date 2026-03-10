"use client";

import { Search } from "lucide-react";

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
      className={`
        flex items-center gap-3 rounded-2xl bg-white
        px-6 py-4 shadow-xl shadow-black/5
        ${className}
      `}
    >
      <Search className="h-5 w-5 shrink-0 text-muted" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted"
      />
    </div>
  );
}

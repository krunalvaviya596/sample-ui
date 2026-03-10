"use client";

import { useState } from "react";
import {
  Sparkles,
  ClipboardList,
  Search,
  ChevronDown,
} from "lucide-react";

const TABS = [
  { id: "book", label: "Book a Service", Icon: Sparkles },
  { id: "post", label: "Post a Job", Icon: ClipboardList },
  { id: "find", label: "Find a Pro", Icon: Search },
] as const;

const FIELDS = [
  { label: "SERVICE TYPE", value: "Cleaning" },
  { label: "LOCATION", value: "Tel Aviv" },
  { label: "WHEN", value: "Today, Tomorrow..." },
  { label: "BUDGET", value: "Any Price" },
] as const;

interface BookingFormProps {
  className?: string;
}

export default function BookingForm({ className = "" }: BookingFormProps) {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div
      className={`
        overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/8
        ${className}
      `}
    >
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-border px-4 pt-4 sm:px-6">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`
              flex cursor-pointer items-center gap-2 rounded-t-lg
              px-4 py-3 text-sm font-medium transition-colors
              ${
                activeTab === id
                  ? "bg-primary text-white"
                  : "text-muted hover:text-foreground"
              }
            `}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* Form fields */}
      <div className="flex flex-col items-stretch gap-4 p-4 sm:p-6 md:flex-row md:items-end md:gap-0">
        {FIELDS.map(({ label, value }, index) => (
          <div
            key={label}
            className={`
              flex flex-1 flex-col gap-1.5
              ${index < FIELDS.length - 1 ? "md:border-r md:border-border md:pr-6 md:mr-6" : ""}
            `}
          >
            <span className="text-[11px] font-semibold tracking-wider text-muted uppercase">
              {label}
            </span>
            <button className="flex cursor-pointer items-center justify-between text-left">
              <span className="text-sm font-medium text-foreground">
                {value}
              </span>
              <ChevronDown className="h-4 w-4 text-muted md:hidden" />
            </button>
          </div>
        ))}

        {/* Search button */}
        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Calendar, ClipboardList, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "book", label: "Book a Service", Icon: Calendar },
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
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/8",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-5 pt-5 sm:px-7">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              activeTab === id
                ? "bg-dark text-white"
                : "text-muted hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      <div className="mx-5 mt-4 h-px bg-border sm:mx-7" />

      <div className="flex flex-col items-stretch gap-4 p-5 sm:p-7 md:flex-row md:items-end md:gap-0">
        {FIELDS.map(({ label, value }, index) => (
          <div
            key={label}
            className={cn(
              "flex flex-1 flex-col gap-1.5",
              index < FIELDS.length - 1 &&
                "md:border-r md:border-border md:pr-6 md:mr-6",
            )}
          >
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
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

        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </div>
  );
}

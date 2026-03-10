"use client";

import {
  Sparkles,
  Wrench,
  Zap,
  Truck,
  Paintbrush,
  Flower2,
  Thermometer,
  Hammer,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  wrench: Wrench,
  zap: Zap,
  truck: Truck,
  paintbrush: Paintbrush,
  flower2: Flower2,
  thermometer: Thermometer,
  hammer: Hammer,
};

interface ServiceCardProps {
  name: string;
  icon: string;
  className?: string;
}

export default function ServiceCard({
  name,
  icon,
  className = "",
}: ServiceCardProps) {
  const Icon = ICON_MAP[icon] || Wrench;

  return (
    <div
      className={`
        group flex cursor-pointer flex-col items-center gap-3
        rounded-2xl border border-border bg-white p-6
        transition-all duration-200
        hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5
        ${className}
      `}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}

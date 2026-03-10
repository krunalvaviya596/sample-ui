import { Sparkles } from "lucide-react";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  icon?: boolean;
  className?: string;
}

export default function Badge({
  children,
  icon = true,
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2 rounded-full
        bg-dark/80 px-5 py-2.5
        text-sm font-medium text-white
        backdrop-blur-sm
        ${className}
      `}
    >
      {icon && <Sparkles className="h-4 w-4 text-primary-light" />}
      {children}
    </div>
  );
}

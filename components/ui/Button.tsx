"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "white"
  | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25",
  secondary: "bg-dark text-white hover:bg-dark-light",
  outline:
    "border border-foreground/80 text-foreground hover:bg-foreground hover:text-white",
  ghost: "text-foreground hover:bg-gray-100",
  white: "bg-white text-dark hover:bg-gray-50 shadow-lg",
  dark: "bg-dark-light/70 text-white hover:bg-dark-light/90 backdrop-blur-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out active:scale-[0.97]",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </button>
  );
}

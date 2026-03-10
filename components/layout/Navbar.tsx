"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import EzraLogo from "@/components/icons/EzraLogo";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`relative z-50 w-full bg-white ${className}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <EzraLogo />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm">
            Sign up
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Separator line */}
      <div className="h-px bg-border" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-[73px] z-50 border-b border-border bg-white p-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <Button variant="outline" size="md">
              Sign up
            </Button>
            <Button variant="primary" size="md">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

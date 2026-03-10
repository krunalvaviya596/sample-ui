"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import EzraLogo from "@/components/icons/EzraLogo";
import { HOMEPAGE_VARIANTS } from "@/lib/constants";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <EzraLogo className="justify-center" />

        <h1 className="mt-8 text-3xl font-bold text-foreground sm:text-4xl">
          Homepage Design Showcase
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Five unique homepage designs for the Ezra marketplace platform.
          Each variant demonstrates a different layout and visual approach.
        </p>
      </motion.div>

      <div className="mt-12 grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HOMEPAGE_VARIANTS.map(({ id, title, description, href }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
          >
            <Link
              href={href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {id < 3 ? (
                  <Sparkles className="h-5 w-5" />
                ) : (
                  <span>{`0${id}`}</span>
                )}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                {title}
              </h2>
              <p className="mt-1 flex-1 text-sm text-muted">{description}</p>
              {id <= 2 && (
                <span className="mt-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary">
                  Matches reference
                </span>
              )}
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                View design
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">
        Built with Next.js, Tailwind CSS, Framer Motion & Lucide Icons
      </p>
    </div>
  );
}

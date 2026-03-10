"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import MascotIllustration from "@/components/ui/MascotIllustration";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function Home1() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(15, 23, 42, 0.55), rgba(91, 33, 182, 0.35)), url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative flex min-h-[540px] flex-col justify-between px-6 pb-0 pt-10 sm:min-h-[600px] sm:px-10 md:px-14 lg:min-h-[640px] lg:px-16 lg:pt-14">
            {/* Text + CTA */}
            <div className="relative z-10 max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
              >
                Every Home Task,
                <br />
                Handled with Care.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
              >
                Connect with trusted, vetted professionals across Israel —
                from plumbers to cleaners, in minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button variant="white" size="lg">
                  Book Instantly
                  <Sparkles className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-white/30 text-white hover:bg-white/10"
                >
                  Post Your Job
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pointer-events-none absolute -right-4 bottom-8 hidden md:block lg:-right-2 lg:bottom-6"
            >
              <MascotIllustration size="lg" />
            </motion.div>

            {/* Search bar — overlapping bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="relative z-10 mx-auto mb-[-28px] w-full max-w-3xl translate-y-[28px]"
            >
              <SearchBar
                placeholder="What you need help"
                className="border border-gray-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacer for search bar overlap */}
      <div className="h-16" />

      {/* Popular Services */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Popular Services
          </h2>
          <p className="mt-3 text-muted">
            Browse our most requested home service categories
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
          {SERVICES.map(({ name, icon }) => (
            <ServiceCard key={name} name={name} icon={icon} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              How It Works
            </h2>
            <p className="mt-3 text-muted">
              Get help in three simple steps
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell Us What You Need",
                desc: "Describe your task and we'll match you with the best available professionals.",
              },
              {
                step: "02",
                title: "Choose Your Pro",
                desc: "Browse profiles, read reviews, and pick the professional that fits your needs.",
              },
              {
                step: "03",
                title: "Get It Done",
                desc: "Your pro arrives on time, completes the job, and you pay securely through Ezra.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center md:text-left">
                <span className="text-4xl font-bold text-primary/20">
                  {step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ezra */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Why Ezra?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Verified Professionals",
              desc: "Every pro on Ezra is background-checked, reviewed, and vetted for quality.",
              emoji: "✅",
            },
            {
              title: "Instant Booking",
              desc: "Book a professional in under 60 seconds. No waiting, no hassle.",
              emoji: "⚡",
            },
            {
              title: "Satisfaction Guaranteed",
              desc: "Not happy? We'll send another pro or give you a full refund.",
              emoji: "🛡️",
            },
          ].map(({ title, desc, emoji }) => (
            <div
              key={title}
              className="rounded-2xl border border-border p-6 transition-shadow hover:shadow-lg"
            >
              <span className="text-3xl">{emoji}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

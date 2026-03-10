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

      {/* ─── Hero Section (matches reference image 1) ─── */}
      <section className="px-4 pt-3 sm:px-5 lg:px-6">
        <div
          className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[28px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(10, 15, 30, 0.60) 0%, rgba(88, 28, 180, 0.28) 100%), url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="relative flex min-h-[480px] flex-col justify-between sm:min-h-[560px] md:min-h-[620px] lg:min-h-[660px]">
            {/* ── Content area ── */}
            <div className="relative z-10 px-7 pt-12 sm:px-10 sm:pt-16 md:px-14 md:pt-20 lg:px-16 lg:pt-24">
              <div className="max-w-xl">
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[36px] font-bold leading-[1.08] tracking-tight text-white sm:text-[44px] md:text-[52px] lg:text-[58px]"
                >
                  Every Home Task,
                  <br />
                  Handled with Care.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-5 max-w-[380px] text-[15px] leading-relaxed text-white/75 sm:text-base"
                >
                  Connect with trusted, vetted professionals across Israel
                  — from plumbers to cleaners, in minutes.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8 flex flex-wrap gap-3 sm:gap-4"
                >
                  <Button variant="white" size="lg">
                    Book Instantly
                    <Sparkles className="h-4 w-4" />
                  </Button>
                  <Button variant="dark" size="lg">
                    Post Your Job
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* ── Mascot — positioned right side ── */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pointer-events-none absolute bottom-10 right-2 hidden md:block lg:bottom-8 lg:right-6"
            >
              <MascotIllustration size="lg" />
            </motion.div>

          </div>
        </div>

        {/* ── Search bar — overlapping hero bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="relative z-10 mx-auto -mt-7 w-full max-w-[680px] px-4 sm:px-0"
        >
          <SearchBar placeholder="What you need help" />
        </motion.div>
      </section>

      {/* Spacer for search bar overlap */}
      <div className="h-6" />

      {/* ─── Popular Services ─── */}
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

      {/* ─── How It Works ─── */}
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

      {/* ─── Why Ezra ─── */}
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

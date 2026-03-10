"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import StatItem from "@/components/ui/StatItem";
import BookingForm from "@/components/ui/BookingForm";
import MascotIllustration from "@/components/ui/MascotIllustration";
import ServiceCard from "@/components/ui/ServiceCard";
import { STATS, SERVICES } from "@/lib/constants";

export default function Home2() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(15, 23, 42, 0.50), rgba(15, 23, 42, 0.35)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative flex min-h-[520px] flex-col justify-between px-6 pb-10 pt-8 sm:min-h-[580px] sm:px-10 md:px-14 lg:min-h-[620px] lg:px-16 lg:pt-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge>Israel&apos;s #1 Home Services Platform</Badge>
            </motion.div>

            {/* Heading + Subtitle + Stats */}
            <div className="relative z-10 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl"
              >
                <span className="text-white">Every Home Task,</span>
                <br />
                <span className="text-white/75">Handled with Care.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg"
              >
                Connect with trusted, vetted professionals across Israel —
                from plumbers to cleaners, in minutes.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex gap-8 sm:gap-12"
              >
                {STATS.map(({ value, label }) => (
                  <StatItem key={label} value={value} label={label} />
                ))}
              </motion.div>
            </div>

            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pointer-events-none absolute bottom-4 right-6 hidden md:block lg:right-10"
            >
              <MascotIllustration size="sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form — overlapping hero bottom */}
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-20 mx-auto -mt-10 max-w-5xl"
        >
          <BookingForm />
        </motion.div>
      </div>

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

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Trusted by Thousands
          </h2>
          <p className="mt-3 text-muted">
            See what our customers have to say
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah M.",
              text: "Found a plumber within minutes. He was professional, on time, and the price was fair. Will use Ezra again!",
              rating: 5,
            },
            {
              name: "David K.",
              text: "The cleaning service was outstanding. My apartment hasn't looked this good in years. Highly recommended.",
              rating: 5,
            },
            {
              name: "Rachel L.",
              text: "Moving is always stressful, but the movers from Ezra made it seamless. Everything arrived safely.",
              rating: 5,
            },
          ].map(({ name, text, rating }) => (
            <div
              key={name}
              className="rounded-2xl border border-border p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-amber-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                &ldquo;{text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

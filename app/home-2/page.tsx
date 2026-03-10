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

      {/* Hero */}
      <section className="px-4 pt-3 sm:px-5 lg:px-6">
        <div
          className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[28px]"
          style={{
            backgroundImage:
              "linear-gradient(160deg, rgba(10, 15, 30, 0.58) 0%, rgba(10, 15, 30, 0.32) 100%), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative min-h-[480px] px-7 pt-8 sm:min-h-[560px] sm:px-10 sm:pt-10 md:min-h-[620px] md:px-14 lg:min-h-[660px] lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge>Israel&apos;s #1 Home Services Platform</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[36px] font-bold leading-[1.08] tracking-tight sm:mt-8 sm:text-[44px] md:text-[52px] lg:text-[58px]"
            >
              <span className="text-white">Every Home Task,</span>
              <br />
              <span className="text-white/65">Handled with Care.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 max-w-[380px] text-[15px] leading-relaxed text-white/65 sm:text-base"
            >
              Connect with trusted, vetted professionals across Israel —
              from plumbers to cleaners, in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex gap-8 sm:mt-10 sm:gap-12"
            >
              {STATS.map(({ value, label }) => (
                <StatItem key={label} value={value} label={label} />
              ))}
            </motion.div>

            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pointer-events-none absolute bottom-3 right-4 hidden md:block lg:bottom-4 lg:right-8"
            >
              <MascotIllustration size="sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <div className="px-4 sm:px-5 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-20 mx-auto -mt-10 max-w-[960px] sm:-mt-12"
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
              <div className="flex gap-0.5">
                {Array.from({ length: rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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

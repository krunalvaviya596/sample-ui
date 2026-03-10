"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Play,
  Star,
  Shield,
  Clock,
  Users,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";

const TRUST_LOGOS = [
  "TrustPilot",
  "Google Reviews",
  "ISO Certified",
  "Better Business",
];

export default function Home5() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — Minimal & Bold */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-50 px-5 py-2 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            Israel&apos;s #1 Home Services Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.08] text-foreground sm:text-6xl lg:text-7xl"
          >
            Home Services,
            <br />
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              Reimagined.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Connect with trusted, vetted professionals across Israel.
            Book in seconds. Quality guaranteed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button variant="primary" size="lg">
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg" className="text-muted">
              <Play className="h-4 w-4 fill-primary text-primary" />
              Watch How It Works
            </Button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8"
          >
            {TRUST_LOGOS.map((logo) => (
              <span key={logo} className="text-sm font-medium text-muted/50">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero image band */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div
            className="aspect-[16/7] rounded-3xl shadow-2xl shadow-primary/10"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Floating cards on image */}
          <div className="absolute -bottom-6 left-4 rounded-xl bg-white p-4 shadow-lg sm:left-8 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Verified & Insured</p>
                <p className="text-xs text-muted">All professionals</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 right-4 rounded-xl bg-white p-4 shadow-lg sm:right-8 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <Star className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">4.9 Average Rating</p>
                <p className="text-xs text-muted">From 12K+ reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 lg:px-8">
          {[
            { Icon: Users, value: "4,200+", label: "Verified Pros" },
            { Icon: Star, value: "98%", label: "Satisfaction" },
            { Icon: Clock, value: "<60s", label: "Avg. Booking Time" },
            { Icon: Shield, value: "60K+", label: "Jobs Completed" },
          ].map(({ Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services carousel-style */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Popular Services
            </h2>
            <p className="mt-2 text-muted">Most booked this month</p>
          </div>
          <button className="hidden cursor-pointer items-center gap-1 text-sm font-medium text-primary sm:flex">
            View all
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
          {SERVICES.map(({ name, icon }) => (
            <ServiceCard key={name} name={name} icon={icon} />
          ))}
        </div>
      </section>

      {/* How it works — Horizontal timeline */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              How Ezra Works
            </h2>
            <p className="mt-3 text-muted">Three simple steps to get help</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: 1,
                title: "Describe Your Task",
                desc: "Tell us what you need — from a leaky faucet to a full deep clean.",
              },
              {
                step: 2,
                title: "Get Matched Instantly",
                desc: "We match you with the best available pros based on your needs and location.",
              },
              {
                step: 3,
                title: "Sit Back & Relax",
                desc: "Your pro handles everything. Pay securely when the job is done.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-violet-500 px-8 py-14 text-center sm:px-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            Join thousands of happy homeowners. Your first booking is on us.
          </p>
          <div className="mt-8">
            <Button variant="white" size="lg">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

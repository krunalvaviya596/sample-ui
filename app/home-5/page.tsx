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
  Wrench,
  Zap,
  Truck,
  Paintbrush,
  Home,
  Hammer,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const SERVICES_GRID = [
  { name: "Home Cleaning", Icon: Sparkles, color: "from-violet-500 to-purple-600" },
  { name: "Plumbing", Icon: Wrench, color: "from-blue-500 to-cyan-600" },
  { name: "Electrical", Icon: Zap, color: "from-amber-500 to-orange-600" },
  { name: "Moving", Icon: Truck, color: "from-green-500 to-emerald-600" },
  { name: "Painting", Icon: Paintbrush, color: "from-rose-500 to-pink-600" },
  { name: "Renovations", Icon: Home, color: "from-indigo-500 to-blue-600" },
  { name: "Handyman", Icon: Hammer, color: "from-teal-500 to-cyan-600" },
  { name: "AC Repair", Icon: Shield, color: "from-slate-500 to-gray-600" },
];

export default function Home5() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero — Premium Asymmetric ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — Text */}
          <div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-5xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-[68px]"
            >
              Home Services,
              <br />
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                Reimagined.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              Connect with trusted, vetted professionals across Israel. Book in
              seconds. Quality guaranteed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
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
          </div>

          {/* Right — Floating service cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[480px]">
              {/* Floating glassmorphism cards */}
              {[
                { name: "Cleaning", Icon: Sparkles, top: "0%", left: "10%", delay: 0.3 },
                { name: "Plumbing", Icon: Wrench, top: "15%", left: "55%", delay: 0.4 },
                { name: "Electrical", Icon: Zap, top: "42%", left: "5%", delay: 0.5 },
                { name: "Moving", Icon: Truck, top: "50%", left: "50%", delay: 0.6 },
                { name: "Painting", Icon: Paintbrush, top: "75%", left: "25%", delay: 0.7 },
              ].map(({ name, Icon, top, left, delay }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay }}
                  className="absolute rounded-2xl border border-white/40 bg-white/80 p-4 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1"
                  style={{ top, left }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {name}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Decorative gradient circle */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/10 to-violet-500/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats band ─── */}
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

      {/* ─── Premium Services Grid ─── */}
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
          {SERVICES_GRID.map(({ name, Icon, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gradient header */}
              <div
                className={`flex h-20 items-center justify-center bg-gradient-to-br ${color}`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 text-center">
                <span className="text-sm font-medium text-foreground">
                  {name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── How Ezra Works ─── */}
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
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
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

      {/* ─── CTA ─── */}
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

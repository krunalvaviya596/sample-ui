"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Wrench,
  Zap,
  Truck,
  Paintbrush,
  Home,
  Hammer,
  Globe,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const FEATURED_SERVICES = [
  {
    name: "Home Cleaning",
    desc: "Professional deep cleaning for your home",
    Icon: Sparkles,
    color: "bg-violet-50 text-violet-600",
  },
  {
    name: "Plumbing",
    desc: "Expert plumbing repairs and installation",
    Icon: Wrench,
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Electrical",
    desc: "Licensed electricians for any job",
    Icon: Zap,
    color: "bg-amber-50 text-amber-600",
  },
  {
    name: "Moving",
    desc: "Safe and reliable moving services",
    Icon: Truck,
    color: "bg-green-50 text-green-600",
  },
  {
    name: "Painting",
    desc: "Interior and exterior painting pros",
    Icon: Paintbrush,
    color: "bg-rose-50 text-rose-600",
  },
  {
    name: "Renovations",
    desc: "Complete home renovation solutions",
    Icon: Home,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function Home3() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero — Split Layout ─── */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-50 px-5 py-2 text-sm font-medium text-primary"
            >
              <Sparkles className="h-4 w-4" />
              Trusted by 4,200+ professionals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[60px]"
            >
              Your Home,{" "}
              <span className="text-primary">Our Priority.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-lg text-lg leading-relaxed text-muted"
            >
              Find the perfect professional for any home task. From quick
              fixes to full renovations — we&apos;ve got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Services
              </Button>
            </motion.div>

            {/* Glassmorphism search bar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 max-w-md rounded-2xl border border-border/50 bg-white/80 px-5 py-4 shadow-lg backdrop-blur-md"
            >
              <span className="text-sm text-muted">
                Search for a service...
              </span>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {[
                { Icon: Shield, text: "Verified Pros" },
                { Icon: Clock, text: "Fast Booking" },
                { Icon: Star, text: "5-Star Rated" },
                { Icon: Globe, text: "Multilingual" },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="aspect-[4/3] rounded-3xl shadow-xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-bottom-6 sm:-left-6 sm:p-5">
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                98%
              </p>
              <p className="text-xs text-muted sm:text-sm">
                Satisfaction Rate
              </p>
            </div>
            {/* Floating badge */}
            <div className="absolute -right-2 -top-2 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg sm:-right-4 sm:-top-4">
              <Hammer className="h-4 w-4" />
              60K+ Jobs Done
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid (4-column) ─── */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Our Services
            </h2>
            <p className="mt-3 text-muted">
              Professional solutions for every home need
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SERVICES.map(({ name, desc, Icon, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="group cursor-pointer rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {name}
                </h3>
                <p className="mt-2 text-sm text-muted">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (horizontal stepper) ─── */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-3 text-muted">Three simple steps to get help</p>
        </div>
        <div className="relative mt-12 grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />

          {[
            {
              step: 1,
              title: "Describe Your Task",
              desc: "Tell us what you need — from a leaky faucet to a full deep clean.",
            },
            {
              step: 2,
              title: "Get Matched",
              desc: "We instantly match you with the best available professionals in your area.",
            },
            {
              step: 3,
              title: "Sit Back & Relax",
              desc: "Your pro handles everything. Pay securely when the job is done.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                {step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center sm:px-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            Join thousands of happy homeowners. Book your first service today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="white" size="lg">
              Book a Service
              <Sparkles className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border border-white/30 text-white hover:bg-white/10"
            >
              Become a Pro
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

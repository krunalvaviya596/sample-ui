"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Search,
  Star,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const PROS = [
  { name: "Yael S.", role: "Cleaning Expert", rating: 4.9, jobs: 342 },
  { name: "Avi M.", role: "Licensed Plumber", rating: 4.8, jobs: 218 },
  { name: "Noa K.", role: "Electrician", rating: 5.0, jobs: 156 },
  { name: "Dan R.", role: "Handyman", rating: 4.9, jobs: 289 },
];

export default function Home4() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — Gradient with floating elements */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-violet-500" />

        {/* Decorative circles */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-white/5" />
        <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              Over 60,000 jobs completed
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              Find the Right Pro
              <br />
              for Every Job.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-5 max-w-lg text-lg text-white/75"
            >
              Israel&apos;s most trusted platform for home services.
              Quality work, guaranteed.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mx-auto mt-10 max-w-2xl"
            >
              <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl shadow-black/20 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                  <Search className="h-5 w-5 text-muted" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
                  />
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 sm:w-48">
                  <MapPin className="h-5 w-5 text-muted" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
                  />
                </div>
                <Button variant="primary" size="lg" className="shrink-0">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Pro Cards */}
      <section className="relative -mt-10 z-10 px-5 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROS.map(({ name, role, rating, jobs }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl border border-border bg-white p-5 shadow-lg transition-shadow hover:shadow-xl"
              >
                {/* Avatar placeholder */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-lg font-bold text-primary">
                  {name[0]}
                </div>
                <h3 className="mt-3 font-semibold text-foreground">{name}</h3>
                <p className="text-sm text-muted">{role}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{rating}</span>
                  </div>
                  <span className="text-xs text-muted">{jobs} jobs</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why Homeowners Love Ezra
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Background-Checked Professionals",
                  desc: "Every pro is verified, insured, and reviewed by real customers.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "No hidden fees. Get upfront quotes before booking any service.",
                },
                {
                  title: "Satisfaction Guarantee",
                  desc: "If you're not happy, we'll make it right — or your money back.",
                },
                {
                  title: "Book in Under 60 Seconds",
                  desc: "Quick booking process gets you matched with the right pro fast.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div
            className="aspect-square rounded-3xl lg:aspect-[4/3]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Start Your First Project Today
          </h2>
          <p className="mt-4 text-muted">
            Join over 60,000 satisfied homeowners across Israel
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              Book a Service
              <Sparkles className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

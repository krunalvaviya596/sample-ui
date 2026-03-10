export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Browse Pros", href: "#browse-pros" },
  { label: "About", href: "#about" },
] as const;

export const STATS = [
  { value: "4,200+", label: "Verified Pros" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "60K+", label: "Jobs Completed" },
] as const;

export const SERVICES = [
  { name: "Cleaning", icon: "star" },
  { name: "Plumbing", icon: "wrench" },
  { name: "Electrical", icon: "zap" },
  { name: "Moving", icon: "truck" },
  { name: "Painting", icon: "paintbrush" },
  { name: "Gardening", icon: "flower2" },
  { name: "AC Repair", icon: "thermometer" },
  { name: "Handyman", icon: "hammer" },
] as const;

export const BOOKING_TABS = [
  { id: "book", label: "Book a Service", icon: "calendar" },
  { id: "post", label: "Post a Job", icon: "clipboard-list" },
  { id: "find", label: "Find a Pro", icon: "search" },
] as const;

export const HOMEPAGE_VARIANTS = [
  {
    id: 1,
    title: "Homepage 1",
    description: "Hero with CTA buttons & search bar",
    href: "/home-1",
  },
  {
    id: 2,
    title: "Homepage 2",
    description: "Hero with stats & booking form",
    href: "/home-2",
  },
  {
    id: 3,
    title: "Homepage 3",
    description: "Split hero with service cards",
    href: "/home-3",
  },
  {
    id: 4,
    title: "Homepage 4",
    description: "Gradient hero with floating elements",
    href: "/home-4",
  },
  {
    id: 5,
    title: "Homepage 5",
    description: "Minimal & modern approach",
    href: "/home-5",
  },
] as const;

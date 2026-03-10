import Link from "next/link";
import EzraLogo from "@/components/icons/EzraLogo";

const FOOTER_SECTIONS = [
  {
    title: "Services",
    links: ["Cleaning", "Plumbing", "Electrical", "Moving", "Painting"],
  },
  {
    title: "Company",
    links: ["About Us", "How It Works", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Terms of Service", "Privacy Policy"],
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <EzraLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Connecting you with trusted, vetted professionals across Israel.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((linkLabel) => (
                  <li key={linkLabel}>
                    <Link
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Ezra. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

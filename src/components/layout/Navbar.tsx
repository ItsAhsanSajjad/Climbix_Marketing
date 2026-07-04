"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { navLinks, servicesNav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ease, easeInOut } from "@/lib/motion";

const MENU_ID = "mobile-nav-menu";
const SERVICES_ID = "services-dropdown";

/**
 * Premium sticky header. Condenses on scroll, carries a Services dropdown
 * (desktop hover/click + keyboard, aria-expanded; mobile accordion), and keeps
 * the low-friction audit CTA visible. Escape closes any open layer and returns
 * focus to its trigger.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  // Escape closes the mobile menu / services dropdown, returning focus.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesBtnRef.current?.focus();
      }
      if (open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, servicesOpen]);

  // Click outside closes the desktop services dropdown.
  useEffect(() => {
    if (!servicesOpen) return;
    function onClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [servicesOpen]);

  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="sticky top-0 z-50"
    >
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-platinum-300 bg-ivory-100/90 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-ivory-100/60 backdrop-blur-md",
        )}
      >
        <Container>
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between gap-6 transition-all duration-300",
              scrolled ? "h-14 md:h-16" : "h-16 md:h-20",
            )}
          >
            <Link
              href="#top"
              className="flex items-center gap-2.5"
              aria-label={`${site.fullName} home`}
            >
              <Logo />
              <span className="font-display text-lg font-bold tracking-tight text-graphite">
                {site.name}
                <span className="text-cobalt-500">.</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-7 md:flex">
              <li>
                <Link
                  href="#top"
                  className="group relative text-[0.95rem] font-medium text-slate-600 transition-colors hover:text-graphite"
                >
                  Home
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-cobalt-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </li>

              {/* Services dropdown */}
              <li
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  ref={servicesBtnRef}
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-controls={SERVICES_ID}
                  className="group relative flex items-center gap-1.5 text-[0.95rem] font-medium text-slate-600 transition-colors hover:text-graphite"
                >
                  Services
                  <svg
                    viewBox="0 0 24 24"
                    className={cn("h-3.5 w-3.5 transition-transform duration-200", servicesOpen && "rotate-180")}
                    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-cobalt-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <m.div
                      key="services-panel"
                      id={SERVICES_ID}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease }}
                      className="absolute left-1/2 top-full z-50 w-[19rem] -translate-x-1/2 pt-3"
                    >
                      <div className="lux-card overflow-hidden p-2 shadow-lift">
                        {servicesNav.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="block rounded-2xl px-4 py-3 transition-colors hover:bg-platinum-100"
                          >
                            <span className="block text-[0.95rem] font-semibold text-graphite">{s.label}</span>
                            <span className="block text-sm text-slate-500">{s.benefit}</span>
                          </Link>
                        ))}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative text-[0.95rem] font-medium text-slate-600 transition-colors hover:text-graphite"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-cobalt-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Button href={site.ctaSecondary.href} size="md">
                {site.ctaSecondary.label}
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-platinum-300 text-graphite transition-colors hover:border-cobalt-500/50 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={MENU_ID}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300",
                    open && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-300",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-300",
                    open && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            key="mobile-menu"
            id={MENU_ID}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: easeInOut }}
            className="overflow-hidden border-b border-platinum-300 bg-ivory-100/98 backdrop-blur-xl md:hidden"
          >
            <Container>
              <m.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } } }}
                className="flex flex-col py-4"
              >
                <m.li variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <Link
                    href="#top"
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-graphite"
                  >
                    Home
                  </Link>
                </m.li>

                {/* Mobile services accordion */}
                <m.li variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-graphite"
                  >
                    Services
                    <svg
                      viewBox="0 0 24 24"
                      className={cn("h-4 w-4 text-slate-500 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <m.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: easeInOut }}
                        className="overflow-hidden"
                      >
                        {servicesNav.map((s) => (
                          <li key={s.label}>
                            <Link
                              href={s.href}
                              onClick={() => setOpen(false)}
                              className="block border-l-2 border-platinum-300 py-2.5 pl-4"
                            >
                              <span className="block text-[0.95rem] font-medium text-graphite">{s.label}</span>
                              <span className="block text-sm text-slate-500">{s.benefit}</span>
                            </Link>
                          </li>
                        ))}
                      </m.ul>
                    )}
                  </AnimatePresence>
                </m.li>

                {navLinks.map((link) => (
                  <m.li
                    key={link.href}
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-medium text-graphite"
                    >
                      {link.label}
                    </Link>
                  </m.li>
                ))}
                <m.li
                  variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  className="pt-3"
                >
                  <Button href={site.ctaSecondary.href} className="w-full" size="lg">
                    {site.ctaSecondary.label}
                  </Button>
                </m.li>
              </m.ul>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}

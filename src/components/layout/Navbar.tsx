"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ease, easeInOut } from "@/lib/motion";

const MENU_ID = "mobile-nav-menu";

/**
 * Sticky header. Condenses on scroll and keeps one consistent CTA visible.
 * Navigation is deliberately short (Services · Case Studies · About ·
 * Process); route links get a subtle active state, anchor links resolve from
 * any page via /#id. Escape closes the mobile menu and returns focus.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  // Escape closes the mobile menu, returning focus to the toggle.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape" || !open) return;
      setOpen(false);
      toggleRef.current?.focus();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Route links (/case-studies, /about) get an active state; anchor links
  // (/#services) don't - the hash isn't available during render.
  const isActive = (href: string) => !href.includes("#") && pathname === href;

  const linkClass = (active: boolean) =>
    cn(
      "group relative rounded-md px-1 py-2 text-[0.95rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100",
      active ? "text-graphite" : "text-slate-600 hover:text-graphite",
    );

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
              href="/"
              className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100"
              aria-label={`${site.fullName} home`}
            >
              <Logo />
              <span className="font-display text-lg font-bold tracking-tight text-graphite">
                {site.name}
                <span className="text-cobalt-500">.</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={linkClass(active)}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-1 right-1 h-px origin-left bg-cobalt-500 transition-transform duration-300 ease-out",
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:block">
              <Button href={site.ctaPrimary.href} size="md" data-cta="header">
                {site.ctaPrimary.label}
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-platinum-300 text-graphite transition-colors hover:border-cobalt-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100 md:hidden"
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
            className="overflow-hidden border-b border-platinum-300 bg-ivory-100 shadow-lift backdrop-blur-xl md:hidden"
          >
            <Container>
              <m.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } } }}
                className="flex flex-col py-4"
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <m.li
                      key={link.href}
                      variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-md py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500",
                          active ? "text-cobalt-600" : "text-graphite",
                        )}
                      >
                        {link.label}
                      </Link>
                    </m.li>
                  );
                })}
                <m.li
                  variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  className="pt-3"
                >
                  <Button
                    href={site.ctaPrimary.href}
                    className="w-full"
                    size="lg"
                    data-cta="header-mobile"
                  >
                    {site.ctaPrimary.label}
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

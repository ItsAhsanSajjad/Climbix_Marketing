import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { CookieSettingsButton } from "@/components/consent/ConsentBanner";
import { navLinks, footerServices, site } from "@/lib/site";

const focusRing =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900";

/**
 * Site footer. Obsidian bookend that anchors the light page and echoes the hero.
 * Brand summary + structured link columns + legal row (incl. cookie settings).
 */
export function Footer() {
  return (
    <footer className="dark-section border-t border-white/10">
      <Container>
        <StaggerContainer
          stagger={0.08}
          className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          <StaggerItem className="flex flex-col gap-4">
            <Link
              href="/"
              className={`flex items-center gap-2.5 ${focusRing}`}
              aria-label={`${site.fullName} home`}
            >
              <Logo />
              <span className="font-display text-lg font-bold tracking-tight text-white">
                {site.name}
                <span className="text-bronze-400">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-base leading-relaxed text-mist-300">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className={`text-base font-medium text-bronze-300 hover:text-bronze-400 ${focusRing}`}
            >
              {site.email}
            </a>
          </StaggerItem>

          <StaggerItem>
            <FooterCol title="Company">
              {navLinks.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
              <FooterLink href="/#faq">FAQ</FooterLink>
            </FooterCol>
          </StaggerItem>

          <StaggerItem>
            <FooterCol title="Services">
              {footerServices.map((s) => (
                <FooterLink key={s} href="/#services">
                  {s}
                </FooterLink>
              ))}
            </FooterCol>
          </StaggerItem>

          <StaggerItem>
            <FooterCol title="Get started">
              <FooterLink href={site.ctaPrimary.href}>
                {site.ctaPrimary.label}
              </FooterLink>
              <FooterLink href="/#contact">Request your audit</FooterLink>
              <FooterLink href={`mailto:${site.email}`}>Contact us</FooterLink>
            </FooterCol>
          </StaggerItem>
        </StaggerContainer>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-mist-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
            <p className="mt-1 text-xs text-mist-400/80">
              {site.name} is a marketing brand operated by {site.legalName}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className={`hover:text-white ${focusRing}`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`hover:text-white ${focusRing}`}>
              Terms of Service
            </Link>
            <Link href="/refund-policy" className={`hover:text-white ${focusRing}`}>
              Refund Policy
            </Link>
            <CookieSettingsButton className={`hover:text-white ${focusRing}`} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-champagne-300">{title}</h3>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className={`text-base text-mist-300 transition-colors hover:text-white ${focusRing}`}
      >
        {children}
      </Link>
    </li>
  );
}

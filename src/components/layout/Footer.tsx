import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { navLinks, footerServices, site } from "@/lib/site";

/**
 * Site footer. Obsidian bookend that anchors the light page and echoes the hero.
 * Brand summary + structured link columns + legal row.
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
            <Link href="#top" className="flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
              <Logo />
              <span className="font-display text-lg font-bold tracking-tight text-white">
                {site.name}
                <span className="text-bronze-400">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-base leading-relaxed text-mist-300">
              Performance marketing for international brands. Paid ads, SEO,
              landing pages, and tracking - built and measured as one system.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-base font-medium text-bronze-300 hover:text-bronze-400"
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
            </FooterCol>
          </StaggerItem>

          <StaggerItem>
            <FooterCol title="Services">
              {footerServices.map((s) => (
                <FooterLink key={s} href="#services">
                  {s}
                </FooterLink>
              ))}
            </FooterCol>
          </StaggerItem>

          <StaggerItem>
            <FooterCol title="Get started">
              <FooterLink href={site.ctaPrimary.href}>Book Call</FooterLink>
              <FooterLink href={site.ctaSecondary.href}>Get Free Audit</FooterLink>
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
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-white">
              Refund Policy
            </Link>
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
      <Link href={href} className="text-base text-mist-300 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}

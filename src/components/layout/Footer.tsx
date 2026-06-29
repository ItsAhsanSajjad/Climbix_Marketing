import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { navLinks, footerServices, site } from "@/lib/site";

/**
 * Site footer. Brand summary + structured link columns + legal row. Contact and
 * legal links are placeholders wired to Phase 3/4 destinations.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/60">
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
                <span className="text-accent-400">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-mist-300">
              Performance marketing for growing international brands. Paid ads,
              SEO, landing pages, and tracking - built into one growth system.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-accent-300 hover:text-accent-400"
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
              <FooterLink href={site.ctaPrimary.href}>Book a Strategy Call</FooterLink>
              <FooterLink href={site.ctaSecondary.href}>Free Marketing Audit</FooterLink>
              <FooterLink href={`mailto:${site.email}`}>Contact us</FooterLink>
            </FooterCol>
          </StaggerItem>
        </StaggerContainer>

        <div className="flex flex-col gap-4 border-t border-white/5 py-6 text-meta text-mist-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-mist-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-mist-200">
              Terms of Service
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
      <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mist-400">{title}</h3>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-mist-300 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}

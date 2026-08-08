import Link from 'next/link'
import { Mic, MapPin, Mail, Phone, Clock } from 'lucide-react'
import { navItems, siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_300px_at_10%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-2xl bg-primary-foreground/15 backdrop-blur">
                <Mic className="size-5" />
              </span>
              <span className="font-serif text-xl font-semibold">Smedley</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              A welcoming community helping members find their voice through public speaking and
              leadership — one supportive meeting at a time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0" />
                <span>
                  {siteConfig.meetingDay}
                  <br />
                  {siteConfig.meetingTime}
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {siteConfig.venue}
                  <br />
                  {siteConfig.address}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary-foreground">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              Visit as a Guest
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Smedley Toastmasters Club. All rights reserved.</p>
          <p>Chartered member of Toastmasters International.</p>
        </div>
      </div>
    </footer>
  )
}

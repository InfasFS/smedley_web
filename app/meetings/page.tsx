import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Mic, Users, Video } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Meetings',
  description:
    'When and where Smedley Toastmasters meets. Join us in person or online — guests are always welcome and there is never any pressure to speak.',
}

const roles = [
  { role: 'Toastmaster', body: 'Hosts the meeting and keeps the evening flowing smoothly.' },
  { role: 'Speakers', body: 'Deliver prepared Pathways speeches and grow with every session.' },
  { role: 'Table Topics Master', body: 'Runs the impromptu speaking segment with fun prompts.' },
  { role: 'Evaluators', body: 'Offer warm, specific feedback to help speakers improve.' },
  { role: 'Timer', body: 'Tracks speaking times so everyone stays on schedule.' },
  { role: 'Grammarian', body: 'Celebrates great language and gently notes filler words.' },
]

export default function MeetingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meetings"
        title="Join us this week"
        description="Our doors are open to everyone. Drop in as a guest, find a seat, and experience the supportive energy of a Smedley meeting first-hand."
      >
        <Button asChild size="lg" className="rounded-full bg-gradient-primary px-7 shadow-[var(--shadow-soft)]">
          <Link href="/contact">Reserve a Guest Seat</Link>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, label: 'Day', value: siteConfig.meetingDay },
            { icon: Clock, label: 'Time', value: siteConfig.meetingTime },
            { icon: MapPin, label: 'Venue', value: siteConfig.venue },
            { icon: Video, label: 'Online', value: 'Hybrid via video link' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] bg-card p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                <item.icon className="size-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                <Mic className="size-3.5" />
                Meeting Roles
              </span>
              <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everyone has a part to play
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Every meeting is powered by members taking on rotating roles. It is the best way to
                learn — you grow whether you are speaking, listening, or leading.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {roles.map((r) => (
                <div
                  key={r.role}
                  className="rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-gradient-gold text-gold-foreground">
                    <Users className="size-4" />
                  </span>
                  <p className="mt-3 font-semibold text-foreground">{r.role}</p>
                  <p className="text-sm text-muted-foreground">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Find us easily
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We meet at {siteConfig.venue}, {siteConfig.address}. Free parking is available on
              site, and the venue is fully accessible.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 rounded-full border-primary/20 bg-card"
            >
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </Button>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5">
            <iframe
              title="Map to Smedley Toastmasters meeting venue"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                siteConfig.address,
              )}&output=embed`}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

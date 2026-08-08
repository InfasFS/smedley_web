import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming Smedley Toastmasters events — the 2026 Officer Installation, Annual General Meeting, and our Ovation awards celebration.',
}

const events = [
  {
    name: 'Installation 2026',
    date: 'Saturday, 18 July 2026',
    location: 'Riverside Community Hall',
    image: '/images/event-installation.png',
    tag: 'Ceremony',
    description:
      'A warm evening as we welcome and install our new Executive Committee for the year ahead. Expect heartfelt speeches, the passing of the gavel, and plenty of celebration as we thank our outgoing leaders.',
  },
  {
    name: 'AGM 2026',
    date: 'Thursday, 4 June 2026',
    location: 'Riverside Community Hall & Online',
    image: '/images/event-agm.png',
    tag: 'Members',
    description:
      'Our Annual General Meeting brings members together to review the year, elect the incoming committee, and shape the direction of the club. Every member’s voice and vote matters here.',
  },
  {
    name: 'Ovation 2026',
    date: 'Saturday, 12 September 2026',
    location: 'The Grand Ballroom, Downtown',
    image: '/images/event-ovation.png',
    tag: 'Gala',
    description:
      'Our signature awards gala — a glamorous night celebrating the year’s outstanding speakers, evaluators, and mentors. Dress to impress and join us for dinner, awards, and unforgettable speeches.',
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Moments worth showing up for"
        description="Beyond weekly meetings, we come together throughout the year to celebrate, elect, and inspire. Here is what is coming up at Smedley."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {events.map((event, i) => (
            <article
              key={event.name}
              className="grid overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-soft)] ring-1 ring-black/5 lg:grid-cols-2"
            >
              <div className={`relative min-h-64 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={event.image || '/placeholder.svg'}
                  alt={`${event.name} event`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-gold-foreground shadow-[var(--shadow-soft)]">
                  {event.tag}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                  {event.name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="size-4 text-primary" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    {event.location}
                  </span>
                </div>
                <p className="mt-5 leading-relaxed text-muted-foreground">{event.description}</p>
                <Button
                  asChild
                  className="mt-7 w-fit rounded-full bg-gradient-primary px-6 shadow-[var(--shadow-soft)]"
                >
                  <Link href="/contact">
                    Register interest <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

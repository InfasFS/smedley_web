import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Medal, Trophy } from 'lucide-react'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Hall of Fame',
  description:
    'Celebrating the champion members and proud contest achievements of Smedley Toastmasters Club through the years.',
}

const champions = [
  {
    name: 'Sofia Alvarez',
    photo: '/images/member-5.png',
    year: '2024',
    competition: 'District International Speech Contest',
    achievement: '1st Place — District Champion',
  },
  {
    name: 'Marcus Bell',
    photo: '/images/member-2.png',
    year: '2024',
    competition: 'Division Humorous Speech Contest',
    achievement: '1st Place — Division Champion',
  },
  {
    name: 'Mei Lin Chen',
    photo: '/images/member-3.png',
    year: '2023',
    competition: 'Area Evaluation Contest',
    achievement: '1st Place — Area Champion',
  },
  {
    name: 'Karim Haddad',
    photo: '/images/member-6.png',
    year: '2023',
    competition: 'Division Table Topics Contest',
    achievement: '2nd Place',
  },
  {
    name: 'Grace Okafor',
    photo: '/images/member-7.png',
    year: '2022',
    competition: 'Area International Speech Contest',
    achievement: '1st Place — Area Champion',
  },
  {
    name: 'Robert Harding',
    photo: '/images/member-4.png',
    year: '2022',
    competition: 'District Tall Tales Contest',
    achievement: '3rd Place',
  },
]

const clubHonours = [
  { icon: Trophy, title: 'President’s Distinguished Club', detail: '2021, 2022, 2023 & 2024' },
  { icon: Award, title: 'Highest Membership Growth', detail: 'Division B — 2024' },
  { icon: Medal, title: 'Best Club Newsletter', detail: 'District Recognition — 2023' },
]

export default function HallOfFamePage() {
  return (
    <>
      <PageHero
        eyebrow="Hall of Fame"
        title="Champions made at Smedley"
        description="From first-time contestants to district champions, these members turned practice and courage into podium moments. Their success is the whole club’s pride."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {champions.map((c) => (
            <article
              key={`${c.name}-${c.year}`}
              className="group overflow-hidden rounded-[1.75rem] bg-card shadow-[var(--shadow-soft)] ring-1 ring-black/5 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.photo || '/placeholder.svg'}
                  alt={`Portrait of ${c.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-gradient-gold text-gold-foreground shadow-[var(--shadow-soft)]">
                  <Trophy className="size-5" />
                </span>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-serif text-lg font-semibold drop-shadow">{c.name}</p>
                  <p className="text-xs font-medium text-white/85">{c.year}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-primary">{c.achievement}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.competition}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Club honours
            </h2>
            <p className="mt-4 text-muted-foreground">
              Recognition earned through the collective effort of every single member.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {clubHonours.map((h) => (
              <div
                key={h.title}
                className="rounded-[1.75rem] bg-card p-7 text-center shadow-[var(--shadow-soft)] ring-1 ring-black/5"
              >
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                  <h.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

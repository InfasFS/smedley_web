import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'The story of Smedley Toastmasters Club — from a handful of founding members to a thriving, award-winning community of confident speakers.',
}

const timeline = [
  {
    year: '1984',
    title: 'A humble beginning',
    body: 'Twelve friends gathered in a small library room, inspired by Ralph Smedley’s vision, and chartered the very first Smedley Toastmasters meeting.',
  },
  {
    year: '1992',
    title: 'Finding our rhythm',
    body: 'Weekly meetings became a fixture in the community. Our first members went on to win area-level speech contests.',
  },
  {
    year: '2001',
    title: 'Growing roots',
    body: 'Membership crossed fifty for the first time, and we moved into our long-time home at Riverside Community Hall.',
  },
  {
    year: '2014',
    title: 'Embracing Pathways',
    body: 'We adopted the modern Toastmasters Pathways learning program, opening new avenues for members to grow.',
  },
  {
    year: '2020',
    title: 'Voices online',
    body: 'When the world changed, we went hybrid overnight — never missing a single week and welcoming members from further afield.',
  },
  {
    year: 'Today',
    title: 'A distinguished club',
    body: 'Now 85+ members strong and repeatedly recognised as a President’s Distinguished Club, we keep the founding spirit alive: members helping members.',
  },
]

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Four decades of finding our voice"
        description="Every great speaker starts with a single step onto the stage. Here is the journey of the club that has helped hundreds take theirs."
      />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative">
          <div
            className="absolute bottom-0 left-[27px] top-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-[31px]"
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {timeline.map((item) => (
              <li key={item.year} className="relative flex gap-6">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary font-serif text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]">
                  {item.year === 'Today' ? 'Now' : item.year}
                </span>
                <div className="flex-1 rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] ring-1 ring-black/5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Check, GraduationCap, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Speechcraft Program',
  description:
    'Speechcraft is an eight-week guided public speaking course for beginners — a friendly, low-pressure on-ramp to confident speaking.',
}

const weeks = [
  { week: 'Week 1', title: 'Finding Your Voice', desc: 'The icebreaker — your first two minutes at the lectern, and why it is easier than you think.' },
  { week: 'Week 2', title: 'Structure & Flow', desc: 'Opening, body, close. Build a talk the audience can follow effortlessly.' },
  { week: 'Week 3', title: 'Body & Presence', desc: 'Stance, gestures, and eye contact that reinforce your message.' },
  { week: 'Week 4', title: 'Vocal Variety', desc: 'Pace, pause, and pitch — the tools that keep listeners leaning in.' },
  { week: 'Week 5', title: 'Thinking on Your Feet', desc: 'Table Topics: answer any question with poise and a smile.' },
  { week: 'Week 6', title: 'Persuade & Inspire', desc: 'Move an audience from listening to acting.' },
  { week: 'Week 7', title: 'Visual & Story', desc: 'Use stories and simple visuals to make ideas stick.' },
  { week: 'Week 8', title: 'Showcase Night', desc: 'Deliver your capstone speech to friends, family, and the club.' },
]

const outcomes = [
  'Deliver a prepared speech with confidence',
  'Handle impromptu questions without freezing',
  'Give and receive constructive feedback',
  'A clear path into full club membership',
]

export default function SpeechcraftPage() {
  return (
    <>
      <PageHero
        eyebrow="Speechcraft Program"
        title="Eight weeks to a braver you"
        description="Speechcraft is our beginner-friendly public speaking course. Small groups, gentle coaching, and a supportive room — the perfect first step before joining the club."
      >
        <Button asChild size="lg">
          <Link href="/contact">Reserve Your Seat</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/meetings">Visit a Meeting First</Link>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5">
            <Image
              src="/images/speechcraft.png"
              alt="Speechcraft workshop in progress"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">A course designed for first-timers</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You do not need any experience — just a willingness to try. Speechcraft runs alongside our regular meetings
              in a smaller, closed group so you can practice in comfort before stepping onto the full club stage.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: CalendarDays, label: '8 weekly sessions' },
                { icon: Users, label: 'Groups of 6–10' },
                { icon: GraduationCap, label: 'Certificate on finish' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl bg-card p-4 text-center shadow-[var(--shadow-soft)] ring-1 ring-black/5">
                  <Icon className="mx-auto size-6 text-primary" />
                  <p className="mt-2 text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground">The eight-week journey</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Each week builds on the last, ending with a showcase speech you will be proud to give.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {weeks.map((w) => (
              <div
                key={w.week}
                className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] ring-1 ring-black/5 transition-transform hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{w.week}</span>
                <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary p-8 shadow-[var(--shadow-soft-lg)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary-foreground">What you will walk away with</h2>
              <ul className="mt-6 space-y-3">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-primary-foreground/90">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-4" />
                    </span>
                    <span className="leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-8 text-center shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Next cohort</p>
              <p className="mt-2 font-serif text-2xl font-semibold text-foreground">Starts October 2</p>
              <p className="mt-1 text-sm text-muted-foreground">Thursdays, 6:30 PM · Riverside Community Hall</p>
              <p className="mt-4 font-serif text-4xl font-semibold text-foreground">$79</p>
              <p className="text-sm text-muted-foreground">for the full 8-week program</p>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/contact">Reserve Your Seat</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

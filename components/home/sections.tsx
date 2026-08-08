import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Mic,
  Quote,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

/* ---------------- About preview ---------------- */

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5">
            <Image
              src="/images/about-meeting.png"
              alt="A supportive Smedley Toastmasters meeting in progress"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card px-6 py-4 shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5 sm:block">
            <p className="font-serif text-2xl font-semibold text-primary">40+ yrs</p>
            <p className="text-xs text-muted-foreground">of building speakers</p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="size-3.5" />
            About the Club
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A friendly home for growing communicators
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Smedley Toastmasters brings together people from all walks of life who share one goal:
            becoming clearer, more confident speakers and stronger leaders. Every meeting is a
            chance to practise, receive kind and constructive feedback, and celebrate progress —
            big or small.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Supportive, judgment-free environment',
              'Structured Pathways learning program',
              'Hands-on leadership opportunities',
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid size-6 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                  <Star className="size-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Button asChild variant="link" className="mt-6 h-auto p-0 text-primary">
            <Link href="/about">
              Learn more about us <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Why join ---------------- */

const reasons = [
  {
    icon: Mic,
    title: 'Speak with Confidence',
    body: 'Practise regularly in a safe space and watch stage fright turn into presence and poise.',
  },
  {
    icon: HeartHandshake,
    title: 'Supportive Community',
    body: 'Encouraging members who celebrate every milestone and cheer you toward your goals.',
  },
  {
    icon: Target,
    title: 'Leadership Skills',
    body: 'Take on meeting roles and projects that build real-world leadership and teamwork.',
  },
  {
    icon: MessageSquare,
    title: 'Actionable Feedback',
    body: 'Warm, structured evaluations help you improve a little more every single week.',
  },
]

export function WhyJoin() {
  return (
    <section className="bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
            Why Join Us
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to grow — in one welcoming room
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group rounded-[1.75rem] bg-card p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/5 transition-transform hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                <r.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Achievements ---------------- */

const achievements = [
  { icon: Trophy, label: 'President\u2019s Distinguished Club', year: '2023 & 2024' },
  { icon: Award, label: 'Area Humorous Speech Champions', year: '2022 – 2024' },
  { icon: Users, label: 'Division Evaluation Winners', year: '2023' },
  { icon: Star, label: 'Membership Growth Award', year: '2024' },
]

export function Achievements() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Club Achievements
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Proud moments, earned together
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Our members consistently shine at area, division, and district contests — but our
            proudest achievement is the confidence each person carries out the door.
          </p>
          <Button asChild variant="link" className="mt-5 h-auto p-0 text-primary">
            <Link href="/hall-of-fame">
              Visit our Hall of Fame <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <a.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{a.label}</p>
                <p className="text-xs text-muted-foreground">{a.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Upcoming meeting ---------------- */

export function UpcomingMeeting() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-primary text-primary-foreground shadow-[var(--shadow-soft-lg)]">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">
              <Calendar className="size-3.5" />
              Next Meeting
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">
              Come see a meeting in action
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Guests are always welcome — there is no pressure to speak. Just relax, watch, and see
              if Smedley feels like home.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-7 rounded-full bg-primary-foreground text-primary shadow-[var(--shadow-soft)] hover:bg-primary-foreground/90"
            >
              <Link href="/meetings">See meeting details</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoTile icon={Clock} label="When" value={`${siteConfig.meetingDay}`} sub={siteConfig.meetingTime} />
            <InfoTile icon={MapPin} label="Where" value={siteConfig.venue} sub={siteConfig.address} />
            <InfoTile icon={Users} label="Format" value="Hybrid" sub="Join in person or online" />
            <InfoTile icon={HeartHandshake} label="Cost" value="Free for guests" sub="Visit as often as you like" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoTile({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur">
      <div className="flex items-center gap-2 text-primary-foreground/70">
        <Icon className="size-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-2 font-semibold leading-snug">{value}</p>
      <p className="text-sm text-primary-foreground/70">{sub}</p>
    </div>
  )
}

/* ---------------- Club stats ---------------- */

const stats = [
  { value: '85+', label: 'Active members' },
  { value: '40+', label: 'Years chartered' },
  { value: '1,200+', label: 'Speeches delivered' },
  { value: '30+', label: 'Contest wins' },
]

export function ClubStats() {
  return (
    <section className="bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] bg-card p-8 shadow-[var(--shadow-soft)] ring-1 ring-black/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl font-semibold text-gradient-primary sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Testimonials ---------------- */

const testimonials = [
  {
    quote:
      'I joined terrified of speaking. A year later I gave a presentation to 200 people at work — and enjoyed it. Smedley changed my career.',
    name: 'Priya Natarajan',
    role: 'Product Manager',
  },
  {
    quote:
      'The feedback is honest but always kind. Every member genuinely wants you to succeed. It feels less like a club and more like a family.',
    name: 'Marcus Bell',
    role: 'Small Business Owner',
  },
  {
    quote:
      'I came as a nervous guest and never left. The leadership roles gave me confidence I now use every single day.',
    name: 'Aisha Rahman',
    role: 'Graduate Student',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Testimonials
        </span>
        <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Voices from our members
        </h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-[1.75rem] bg-card p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
          >
            <Quote className="size-8 text-gold" />
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-gradient-primary font-serif text-sm font-semibold text-primary-foreground">
                {t.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Guest CTA ---------------- */

export function GuestCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-gold px-8 py-14 text-center shadow-[var(--shadow-soft-lg)] sm:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(500px_260px_at_50%_-20%,rgba(255,255,255,0.7),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold text-gold-foreground sm:text-4xl">
            Your first meeting is on us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-gold-foreground/80">
            Curious? Nervous? Both? That is exactly how most of us started. Visit as a guest, sit
            back, and discover what Smedley Toastmasters could do for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-8 text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <Link href="/contact">Visit as a Guest</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-gold-foreground/25 bg-card/60 px-8 text-gold-foreground backdrop-blur"
            >
              <Link href="/membership">Become a Member</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

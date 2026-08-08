import type { Metadata } from 'next'
import Image from 'next/image'
import { Compass, Heart, Sprout, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ClubStats, WhyJoin } from '@/components/home/sections'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Smedley Toastmasters Club — our mission, our values, and what to expect when you visit a warm, supportive public speaking meeting.',
}

const values = [
  {
    icon: Heart,
    title: 'Encouragement First',
    body: 'We lead with warmth. Every speech, no matter how it goes, is met with genuine support.',
  },
  {
    icon: Sprout,
    title: 'Growth Over Perfection',
    body: 'Progress is the goal. We celebrate the courage to try far more than flawless delivery.',
  },
  {
    icon: Users,
    title: 'Everyone Belongs',
    body: 'Students, professionals, retirees — all are welcome, exactly as they are.',
  },
  {
    icon: Compass,
    title: 'Learn by Doing',
    body: 'You grow fastest on your feet. We give you plenty of friendly stage time.',
  },
]

const meetingFlow = [
  { time: '6:30', title: 'Warm Welcome', body: 'Arrive, mingle, and meet the friendly faces of the evening.' },
  { time: '6:45', title: 'Prepared Speeches', body: 'Members deliver Pathways speeches they have practised and refined.' },
  { time: '7:20', title: 'Table Topics', body: 'Fun, impromptu speaking to sharpen thinking on your feet.' },
  { time: '7:50', title: 'Evaluations', body: 'Kind, constructive feedback that helps everyone improve.' },
  { time: '8:20', title: 'Wrap & Social', body: 'Awards, announcements, and a chat before we head home.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Club"
        title="A community built on courage and kindness"
        description="Smedley Toastmasters is more than a public speaking club — it is a place where people support one another to become the communicators and leaders they aspire to be."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5">
            <Image
              src="/images/about-meeting.png"
              alt="Members participating in a Smedley Toastmasters meeting"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We provide a supportive and positive learning experience in which members are
              empowered to develop communication and leadership skills, resulting in greater
              self-confidence and personal growth.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Following the globally proven Toastmasters Pathways program, members progress at their
              own pace — from a first nervous introduction to confidently leading a room. There are
              no instructors here, just members helping members, week after week.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What we value
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[1.75rem] bg-card p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                  <v.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What to expect at a meeting
          </h2>
          <p className="mt-4 text-muted-foreground">
            A typical evening runs like clockwork — and guests are welcome to simply watch.
          </p>
        </div>
        <ol className="mt-12 space-y-4">
          {meetingFlow.map((step) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
            >
              <span className="grid h-12 w-16 shrink-0 place-items-center rounded-xl bg-gradient-gold font-serif text-sm font-semibold text-gold-foreground">
                {step.time}
              </span>
              <div>
                <p className="font-semibold text-foreground">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <ClubStats />
      <WhyJoin />
    </>
  )
}

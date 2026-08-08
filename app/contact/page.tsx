import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Visit',
  description: `Get in touch with ${siteConfig.name}. Your first visit is always free — come see a meeting for yourself.`,
}

const details = [
  { icon: MapPin, label: 'Where we meet', value: `${siteConfig.venue}, ${siteConfig.address}` },
  { icon: Clock, label: 'When we meet', value: `${siteConfig.meetingDay}, ${siteConfig.meetingTime}` },
  { icon: Mail, label: 'Email', value: siteConfig.email },
  { icon: Phone, label: 'Phone', value: siteConfig.phone },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Visit"
        title="Come say hello"
        description="Curious? Your first visit is always free and there is zero pressure to speak. Drop us a line or just turn up on a Thursday — we save a warm seat for every guest."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">Visitor information</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Everything you need to find us and feel at home on your first night.
              </p>
            </div>
            <div className="grid gap-4">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                    <p className="mt-1 font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-warm p-6 shadow-[var(--shadow-soft)] ring-1 ring-black/5">
              <h3 className="font-serif text-lg font-semibold text-foreground">What to expect on your first visit</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>A friendly greeter will meet you at the door and introduce you around.</li>
                <li>You are welcome to simply watch — no one is ever put on the spot.</li>
                <li>Meetings run a tidy two hours and always start and finish on time.</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}

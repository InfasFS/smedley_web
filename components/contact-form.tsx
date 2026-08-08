'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-card p-10 text-center shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5">
        <span className="grid size-14 place-items-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">Message received</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for reaching out. A member of our committee will be in touch within a day or two — we cannot wait to
          meet you.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="rounded-3xl bg-card p-8 shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Jane Doe"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="topic" className="text-sm font-medium text-foreground">
          I&apos;m interested in
        </label>
        <select
          id="topic"
          name="topic"
          className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option>Visiting a meeting as a guest</option>
          <option>Joining the club</option>
          <option>The Speechcraft program</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Tell us a little about yourself and what brought you here…"
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full">
        Send Message
      </Button>
    </form>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import { NewsletterFlipbook, type Newsletter } from '@/components/newsletter-flipbook'

export function NewsletterShelf({ newsletters }: { newsletters: Newsletter[] }) {
  const [active, setActive] = useState<Newsletter | null>(null)

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsletters.map((n) => (
          <article
            key={n.id}
            className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft-lg)]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={n.cover || '/placeholder.svg'}
                alt={`${n.title} cover`}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/50 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {n.date}
              </span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{n.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.blurb}</p>
              <button
                type="button"
                onClick={() => setActive(n)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
              >
                <BookOpen className="size-4" />
                Read Issue
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && <NewsletterFlipbook newsletter={active} onClose={() => setActive(null)} />}
    </>
  )
}

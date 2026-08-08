'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export type NewsletterPage =
  | { kind: 'cover'; image: string; title: string; date: string }
  | { kind: 'article'; heading: string; paragraphs: string[]; note?: string }

export type Newsletter = {
  id: string
  title: string
  date: string
  cover: string
  blurb: string
  pages: NewsletterPage[]
}

export function NewsletterFlipbook({
  newsletter,
  onClose,
}: {
  newsletter: Newsletter
  onClose: () => void
}) {
  const [page, setPage] = useState(0)
  const [flip, setFlip] = useState<'none' | 'next' | 'prev'>('none')
  const total = newsletter.pages.length

  const turn = (dir: 1 | -1) => {
    setPage((p) => Math.min(Math.max(p + dir, 0), total - 1))
    setFlip(dir === 1 ? 'next' : 'prev')
    window.setTimeout(() => setFlip('none'), 450)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') turn(1)
      if (e.key === 'ArrowLeft') turn(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  const current = newsletter.pages[page]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${newsletter.title} newsletter viewer`}
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-md flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close newsletter"
          className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full bg-card text-foreground shadow-[var(--shadow-soft)]"
        >
          <X className="size-5" />
        </button>

        <div className="[perspective:1600px]">
          <div
            className={cn(
              'aspect-[3/4] origin-left overflow-hidden rounded-[1.25rem] bg-card shadow-[var(--shadow-soft-lg)] ring-1 ring-black/10 transition-transform duration-500',
              flip === 'next' && '[transform:rotateY(-12deg)]',
              flip === 'prev' && '[transform:rotateY(12deg)]',
            )}
          >
            {current.kind === 'cover' ? (
              <div className="relative h-full w-full">
                <Image
                  src={current.image || '/placeholder.svg'}
                  alt={`${current.title} cover`}
                  fill
                  sizes="450px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex h-full flex-col bg-gradient-warm p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Smedley Gazette
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
                  {current.heading}
                </h3>
                <div className="mt-4 space-y-3 overflow-y-auto text-sm leading-relaxed text-muted-foreground">
                  {current.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {current.note && (
                  <p className="mt-auto rounded-xl bg-card p-3 text-xs italic text-primary shadow-sm">
                    {current.note}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => turn(-1)}
            disabled={page === 0}
            aria-label="Previous page"
            className="grid size-11 place-items-center rounded-full bg-card text-foreground shadow-[var(--shadow-soft)] transition-opacity disabled:opacity-40"
          >
            <ChevronLeft className="size-5" />
          </button>
          <span className="text-sm font-medium text-primary-foreground">
            Page {page + 1} of {total}
          </span>
          <button
            type="button"
            onClick={() => turn(1)}
            disabled={page === total - 1}
            aria-label="Next page"
            className="grid size-11 place-items-center rounded-full bg-card text-foreground shadow-[var(--shadow-soft)] transition-opacity disabled:opacity-40"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

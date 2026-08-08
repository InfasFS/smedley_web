'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const slides = [
  {
    src: '/images/hero-club-group.png',
    alt: 'Members of Smedley Toastmasters Club gathered together after a meeting',
    caption: 'One club, countless voices',
  },
  {
    src: '/images/hero-speaker.png',
    alt: 'A member delivering a speech at the lectern',
    caption: 'Speak up. Stand out.',
  },
  {
    src: '/images/hero-networking.png',
    alt: 'Members networking and laughing together',
    caption: 'Grow with people who cheer you on',
  },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
            <Sparkles className="size-3.5" />
            Welcome to Smedley
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find your voice.{' '}
            <span className="text-gradient-primary">Lead with confidence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Smedley Toastmasters is a warm, supportive club where members practice public speaking
            and leadership in a friendly, judgment-free space. Come as you are — leave a more
            confident communicator.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-primary px-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <Link href="/contact">Visit as a Guest</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/20 bg-card/70 px-7 backdrop-blur"
            >
              <Link href="/membership">Become a Member</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft-lg)] ring-1 ring-black/5">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={cn(
                  'absolute inset-0 transition-opacity duration-700',
                  i === index ? 'opacity-100' : 'opacity-0',
                )}
              >
                <Image
                  src={slide.src || '/placeholder.svg'}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <p className="absolute bottom-5 left-6 right-6 font-serif text-xl font-medium text-white drop-shadow">
                  {slide.caption}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="absolute -left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-card text-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="absolute -right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-card text-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-primary/25 hover:bg-primary/40',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

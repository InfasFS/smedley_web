'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navItems, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-xl'
          : 'bg-background/40 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Mic className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              Smedley
            </span>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Toastmasters
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button asChild className="rounded-full bg-gradient-primary shadow-[var(--shadow-soft)]">
            <Link href="/membership">Become a Member</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground shadow-sm xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button asChild className="mt-2 rounded-full bg-gradient-primary">
              <Link href="/membership">Become a Member</Link>
            </Button>
            <p className="px-4 pt-3 text-xs text-muted-foreground">
              {siteConfig.meetingDay} · {siteConfig.meetingTime}
            </p>
          </nav>
        </div>
      )}
    </header>
  )
}

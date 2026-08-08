import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, className, children }: PageHeroProps) {
  return (
    <section className={cn('bg-gradient-warm', className)}>
      <div className="mx-auto max-w-4xl px-4 pb-14 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>
    </section>
  )
}

import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  invert = false,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  id: string
  invert?: boolean
  className?: string
}) {
  return (
    <Reveal className={cn('max-w-2xl', className)}>
      <p
        className={cn(
          'mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
          invert ? 'text-accent' : 'text-primary',
        )}
      >
        <span aria-hidden="true" className={cn('h-px w-8', invert ? 'bg-accent' : 'bg-primary')} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl',
          invert ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            invert ? 'text-ink-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#interests', label: 'Interests' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-white/10 bg-ink/90 shadow-lg shadow-black/10 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-ink-foreground"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Leaf className="size-4" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">Arish Siddiqui</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-foreground/75 transition-colors hover:bg-white/10 hover:text-ink-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-10 items-center justify-center rounded-full text-ink-foreground hover:bg-white/10 md:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'grid overflow-hidden transition-all duration-300 md:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <ul className="min-h-0 space-y-1 px-5 pb-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-foreground/85 hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

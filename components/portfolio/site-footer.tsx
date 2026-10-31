import { ArrowUp, Leaf, Mail, MapPin } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#interests', label: 'Interests' },
  { href: '#contact', label: 'Contact' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Leaf className="size-4" aria-hidden="true" />
            </span>
            <span className="font-serif text-lg font-semibold">Mohd Arish Siddiqui</span>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-ink-foreground/65">
            BAMS student with an interest in Ayurveda, healthcare and technology.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink-foreground/70 transition-colors hover:text-ink-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wider text-accent uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-ink-foreground/70">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href="mailto:arishsidd64@gmail.com" className="break-all hover:text-ink-foreground">
                arishsidd64@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              Muzaffarnagar, Uttar Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-ink-foreground/55 sm:flex-row sm:px-8">
          <p>&copy; {year} Mohd Arish Siddiqui. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-ink-foreground/80 transition-colors hover:border-accent hover:text-accent"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

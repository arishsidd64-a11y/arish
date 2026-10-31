'use client'

import { useState, type FormEvent } from 'react'
import { Check, Copy, Mail, MapPin, Send } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const EMAIL = 'arishsidd64@gmail.com'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Message from ${name || 'your portfolio'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title={"Let's get in touch"}
            description="Feel free to reach out by email. I'd be happy to hear from you."
          />

          <Reveal delay={100} className="mt-10 space-y-4">
            <div className="flex flex-col gap-4 rounded-3xl border bg-card p-5 shadow-sm sm:flex-row sm:items-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="block truncate font-semibold text-foreground hover:text-primary"
                >
                  {EMAIL}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border bg-card p-5 shadow-sm">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Muzaffarnagar, Uttar Pradesh, India</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border bg-card p-6 shadow-xl shadow-primary/5 sm:p-8"
          >
            <h3 className="font-serif text-2xl font-semibold">Send a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">This will open your email app with your message ready to send.</p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border bg-background px-4 py-3 text-base outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-base outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
                  placeholder="Write your message..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                Send message
                <Send className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

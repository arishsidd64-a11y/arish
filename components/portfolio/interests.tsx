import { Cpu, HeartPulse, Leaf } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const interests = [
  {
    icon: Leaf,
    title: 'Ayurveda',
    text: 'The traditional science of life, health and natural healing that I am studying.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    text: 'Understanding health, wellness and how to care for people in meaningful ways.',
  },
  {
    icon: Cpu,
    title: 'Technology',
    text: 'Exploring how modern technology can make healthcare more accessible and effective.',
  },
]

export function Interests() {
  return (
    <section
      id="interests"
      aria-labelledby="interests-title"
      className="relative overflow-hidden bg-ink py-20 text-ink-foreground sm:py-28"
    >
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="interests-title"
          eyebrow="Interests"
          title="Where my curiosity lives"
          description="The areas I enjoy learning about and hope to grow in."
          invert
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {interests.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.07]">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-foreground/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

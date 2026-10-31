import { BookOpen, HeartHandshake, MapPin, Target } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const qualities = [
  {
    icon: Target,
    title: 'Hardworking',
    text: 'I put sincere effort into my studies and every responsibility I take on.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated',
    text: 'Committed to my BAMS education and to growing in the field of healthcare.',
  },
  {
    icon: BookOpen,
    title: 'Eager to Learn',
    text: 'Always curious and open to learning new things, both in medicine and technology.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About Me" title="A student of Ayurveda, driven by care." />
          <Reveal delay={100} className="mt-8 inline-flex items-center gap-3 rounded-full border bg-card px-5 py-3 shadow-sm">
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary">
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm">
              <span className="block font-semibold">Based in</span>
              <span className="text-muted-foreground">Muzaffarnagar, Uttar Pradesh, India</span>
            </span>
          </Reveal>
        </div>

        <Reveal delay={150} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            My name is <strong className="font-semibold text-foreground">Mohd Arish Siddiqui</strong>, and I am a
            BAMS (Bachelor of Ayurvedic Medicine and Surgery) student. I am from
            Muzaffarnagar, Uttar Pradesh, India.
          </p>
          <p>
            I am passionate about Ayurveda and healthcare, and I am also interested in how technology can support
            them. I am hardworking, dedicated and eager to learn, and I look forward to building a strong foundation
            in my field.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-3">
        {qualities.map((q, i) => (
          <Reveal key={q.title} delay={i * 100}>
            <article className="group h-full rounded-3xl border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <q.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{q.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{q.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

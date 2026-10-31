import { Languages, MessagesSquare, Monitor } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const skills = [
  {
    icon: Monitor,
    title: 'Basic Computer Skills',
    text: 'Comfortable using computers for everyday tasks, studies and online learning.',
  },
  {
    icon: MessagesSquare,
    title: 'Communication',
    text: 'Able to express ideas clearly and interact respectfully with people.',
  },
]

const languages = [
  { name: 'Hindi', level: 'Fluent', value: 100 },
  { name: 'English', level: 'Basic', value: 40 },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills & Languages"
          title="What I bring to the table"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 100}>
              <article className="group h-full rounded-3xl border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <skill.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold">{skill.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{skill.text}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <article className="h-full rounded-3xl bg-ink p-7 text-ink-foreground shadow-xl shadow-ink/20">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Languages className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-semibold">Languages</h3>
              </div>
              <ul className="mt-7 space-y-6">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-sm text-accent">{lang.level}</span>
                    </div>
                    <div
                      role="meter"
                      aria-label={`${lang.name} proficiency`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={lang.value}
                      aria-valuetext={lang.level}
                      className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/10"
                    >
                      <div className="h-full rounded-full bg-accent" style={{ width: `${lang.value}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

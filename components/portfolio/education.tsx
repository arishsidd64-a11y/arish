import { GraduationCap, School } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const education = [
  {
    icon: GraduationCap,
    status: 'Currently Pursuing',
    title: 'BAMS — 2nd Year',
    subtitle: 'Bachelor of Ayurvedic Medicine and Surgery',
    text: 'Studying the principles of Ayurveda along with modern medical sciences as part of my undergraduate programme.',
    current: true,
  },
  {
    icon: School,
    status: 'Completed',
    title: '12th Pass',
    subtitle: 'Senior Secondary Education',
    text: 'Successfully completed my senior secondary education, which prepared me to pursue a career in healthcare.',
    current: false,
  },
]

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="education-title"
          eyebrow="Education"
          title="My academic journey"
          description="The steps that have shaped my path towards Ayurveda and healthcare."
        />

        <ol className="relative mt-14 space-y-6 border-l-2 border-primary/20 pl-6 sm:pl-10">
          {education.map((item, i) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-8 -left-[33px] flex size-4 items-center justify-center rounded-full border-4 border-background bg-primary ring-4 ring-primary/20 sm:-left-[49px]"
              />
              <Reveal delay={i * 120}>
                <article className="flex flex-col gap-6 rounded-3xl border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 sm:flex-row sm:items-start sm:p-9">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <item.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <span
                      className={
                        item.current
                          ? 'inline-flex rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold text-secondary-foreground'
                          : 'inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground'
                      }
                    >
                      {item.status}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-1 font-medium text-primary">{item.subtitle}</p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

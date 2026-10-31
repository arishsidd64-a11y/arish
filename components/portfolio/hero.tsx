import { ArrowRight, GraduationCap, Leaf, MapPin, Sprout } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ink pt-28 pb-20 text-ink-foreground sm:pt-36 sm:pb-28"
    >
      <div aria-hidden="true" className="grid-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-10%] size-[28rem] rounded-full bg-primary/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-30%] left-[-10%] size-[24rem] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-ink-foreground/80">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Welcome to my portfolio
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Hello, I&apos;m <span className="text-accent">Mohd Arish</span> Siddiqui
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75 text-pretty">
            A BAMS student with a deep interest in Ayurveda, healthcare and technology. Thank you for
            visiting &mdash; I&apos;m glad you&apos;re here to learn a little more about me and my journey.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Know more about me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-ink-foreground transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Contact me
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-foreground/70">
            <li className="flex items-center gap-2">
              <GraduationCap className="size-4 text-accent" aria-hidden="true" />
              BAMS Student
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              Muzaffarnagar, Uttar Pradesh, India
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none">
          <div className="animate-float-slow relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/60 via-ink to-ink p-8 shadow-2xl shadow-black/40">
            <Leaf
              aria-hidden="true"
              className="absolute -right-10 -bottom-10 size-64 rotate-[-20deg] text-accent/10"
              strokeWidth={1}
            />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.25em] text-ink-foreground/60 uppercase">
                  Portfolio
                </span>
                <Sprout className="size-6 text-accent" aria-hidden="true" />
              </div>

              <div>
                <div
                  aria-hidden="true"
                  className="flex size-28 items-center justify-center rounded-full border-2 border-accent/50 bg-ink/60 font-serif text-4xl font-semibold text-accent"
                >
                  MAS
                </div>
                <p className="mt-6 font-serif text-2xl font-semibold">Mohd Arish Siddiqui</p>
                <p className="mt-1 text-ink-foreground/70">BAMS Student</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-ink-foreground/60">Course</p>
                  <p className="mt-1 font-semibold">BAMS</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-ink-foreground/60">Status</p>
                  <p className="mt-1 font-semibold">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Education } from '@/components/portfolio/education'
import { Skills } from '@/components/portfolio/skills'
import { Interests } from '@/components/portfolio/interests'
import { Contact } from '@/components/portfolio/contact'
import { SiteFooter } from '@/components/portfolio/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

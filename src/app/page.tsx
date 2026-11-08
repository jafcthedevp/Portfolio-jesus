import { Navbar } from "@/components/void/navbar"
import { Hero } from "@/components/void/hero"
import { About } from "@/components/void/about"
import { Works } from "@/components/void/works"
import { TechMarquee } from "@/components/void/tech-marquee"
import { Footer } from "@/components/void/footer"
import { CustomCursor } from "@/components/void/custom-cursor"
import { SmoothScroll } from "@/components/void/smooth-scroll"
import { SectionBlend } from "@/components/void/section-blend"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <About />
        <Works />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}

import Hero from "@/sections/Landing/Hero";
import About from "@/sections/Landing/About";
import Skills from "@/sections/Landing/Skills";
import Projects from "@/sections/Landing/Projects";
import Blog from "@/sections/Landing/Blog";

export const metadata = {
  title: 'Lindrit Sulaj | Web Developer',
  description: "I'm a 14-year-old web developer based in Kosovo. I specialize in building visually stunning and impressive websites using languages and frameworks such as HTML, CSS, SCSS, Tailwind, React, Next, Redux, and Framer Motion.",
}

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
    </main>
  )
}

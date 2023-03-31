import Hero from "@/sections/Landing/Hero";
import About from "@/sections/Landing/About";

export const metadata = {
  title: 'Lindrit Sulaj | Web Developer',
  description: "I'm a 14-year-old web developer based in Kosovo. I specialize in building visually stunning and impressive websites using languages and frameworks such as HTML, CSS, SCSS, Tailwind, React, Next, Redux, and Framer Motion.",
}

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <div className="h-[200px] bg-black"></div>
    </main>
  )
}

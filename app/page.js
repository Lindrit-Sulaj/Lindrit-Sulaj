import Hero from "@/sections/Landing/Hero";
import About from "@/sections/Landing/About";
import Skills from "@/sections/Landing/Skills";
import Projects from "@/sections/Landing/Projects";
import Blog from "@/sections/Landing/Blog";
import Contact from "@/sections/Landing/Contact";

export const metadata = {
  title: 'Lindrit Sulaj | Web Developer',
  description: "I'm a 14-year-old web developer based in Kosovo. I specialize in building visually stunning and impressive websites using languages and frameworks such as HTML, CSS, SCSS, Tailwind, React, Next, Redux, and Framer Motion.",
  keywords: ["Web Developer Kosovo", "Lindrit Sulaj", "Front End Developer", "Digital Marketing Kosovo"],
  publisher: "Lindrit Sulaj",
  creator: "Lindrit Sulaj",
  openGraph: {
    title: 'Lindrit Sulaj | Web Developer',
    description: "I'm a front-end web developer based in Kosovo, with a passion for creating visually stunning websites using the latest and greatest web technologies.",
    siteName: 'Lindrit Sulaj',
    type: 'website',
    images: [
      {
        url: 'https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Logo_-_Without_removed_bg_jcIzY2POpR.png?updatedAt=1680784572023',
        width: 400,
        height: 150
      }
    ]
  }
}

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}

import { getProjects } from "@/sanity/utils"

export const metadata = {
  title: 'Projects | Lindrit Sulaj',
  description: "Explore my innovative and dynamic projects on my developer portfolio's projects page.",
  keywords: ['Developer Projects Kosovo', 'Web Projects', 'Websites Kosovo']
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <main className="mt-[70px]">
    <header className="bg-byzantine-blue text-white pt-10 pb-14 px-6 md:px-20">
      <h1 className="mx-auto text-white text-[27px] text-center md:text-4xl lg:text-[40px] leading-10 font-semibold lg:leading-[70px]">Developer Projects</h1>
      <p className="text-center mx-auto text-lg md:text-xl text-text-blue mt-3 max-w-xl">Explore my innovative and dynamic projects featuring different technologies.</p>
    </header>
    <section className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 my-10">
      {projects.map(project => (
        <Project key={project.title} {...project} />
      ))}
    </section>
    <div className="max-w-screen-lg mx-auto flex justify-center my-8 px-4 md:px-8">
      <div className=" flex flex-col items-center gap-2 justify-center w-full h-full border-solid border-[1px] mx-auto border-neutral-200 py-10 px-3">
        <h4 className="text-2xl md:text-3xl font-semibold text-neutral-700">Coming Soon</h4>
        <p className="text-[17px] md:text-lg text-neutral-600 text-center">Stay tuned for exciting new projects in the works</p>
      </div>
    </div>
  </main>
}

function Project({ title, source, live, description, technologies }) {
  return (
    <div className="border-solid border-[1px] border-neutral-200 p-6 hover:bg-neutral-50">
      <div className='flex justify-between items-center'>
        <i className="fa-regular fa-folder text-3xl text-gold"></i>
        <div className='flex gap-5 text-lg text-byzantine-blue'>
          <a href={source}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={live}>
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <h4 className="text-xl md:text-[21px] mt-4 font-medium text-neutral-700">{title}</h4>
      <p className="text-[17px] lg:text-lg mt-2 mb-4 text-neutral-600">{description}</p>
      <div className="flex gap-3 mt-auto overflow-hidden">
        {technologies.map(technology => (
          <p className="text-neutral-500">{technology} </p>
        ))}
      </div>
    </div>
  )
}
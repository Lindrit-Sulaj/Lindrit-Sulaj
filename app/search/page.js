import { getSearchResults } from "@/sanity/utils"
import Link from "next/link"
import { SearchBar } from "@/components"

export async function generateMetadata({ searchParams }) {
  return {
    title: `Searching for: ${searchParams.query}`
  }
}

export default async function SearchPage({ searchParams }) {
  const searchResults = await getSearchResults(searchParams.query)

  return (
    <main className="mt-[70px]">
      <div className="bg-byzantine-blue text-white py-10 px-5">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h2 className="text-lg md:text-xl mb-3 md:mb-5">Search results for:</h2>
          <SearchBar />
          <p className="mt-2 text-text-blue text-lg">{searchResults.length} {searchResults.length === 1 ? 'article' : 'articles'}</p>
        </div>
      </div>
      <div className="max-w-screen-web mx-auto py-10 px-6 md:px-10 flex flex-col gap-6 md:gap-10">
        {searchResults.map(article => (
          <News key={article.id} {...article} />
        ))}
      </div>
    </main>
  )
}

const News = ({ description, id, title }) => {
  return (
    <article className="border-solid border-[1px] flex flex-col items-center border-neutral-200 px-3 py-6">
      <h5 className="text-xl font-medium text-center">{title}</h5>
      <p className="mt-3 md:text-lg text-neutral-600 text-center max-w-4xl">{description}</p>
      <Link href={`/blog/${id}`} className="md:text-lg inline-block hover:bg-blue-500 mt-4 px-3 py-2 bg-byzantine-blue text-white">View article</Link>
    </article>
  )
}
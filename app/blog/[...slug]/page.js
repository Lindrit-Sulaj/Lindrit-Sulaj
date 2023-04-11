import Link from "next/link"
import { getArticle } from "@/sanity/utils"
import { Source_Sans_Pro } from "next/font/google";

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug[0])
  const {
    _createdAt,
    _updatedAt,
    body,
    title,
    description,
    category
  } = article[0];

  return (
    <main className="mt-[70px]">
      <div className="bg-byzantine-blue ">
        <div className="max-w-screen-web mx-auto  pt-10 pb-20 flex justify-center flex-col items-center px-6 md:px-20 text-white">
          <p className={`${sourceSans.className} font-semibold tracking-wide uppercase border-solid border-[1px] px-3 py-[6px] border-blue-500`}>{category.title}</p>
          <h1 className="text-[27px] text-center md:text-3xl leading-10 lg:text-[44px] font-semibold lg:leading-[70px] mt-3 ">{title}</h1>
          <p className="mt-3 text-text-blue text-lg">Updated at: {_updatedAt.slice(0, 10)}</p>
        </div>
      </div>

      <pre>{JSON.stringify(body, null, 2)}</pre>
    </main>
  )
}
import Link from "next/link"
import { getArticle, getAllArticles } from "@/sanity/utils"
import { Source_Sans_Pro } from "next/font/google";
import { Suspense } from "react";
import { PortableText } from "@portabletext/react";

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

const portableTextComponents = {
  block: {
    code: ({ value }) => {
      return <pre className="text-base bg-neutral-100 px-3 py-[2px] max-w-full overflow-auto">
        {value.children[0].text}
      </pre>
    }
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug
  }))
}

export async function generateMetadata({ params }) {
  const res = await getArticle(params.slug);
  const article = res[0];

  return {
    title: article.title,
    description: article.description,
    keywords: [`${article.title}`]
  }
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug)
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
      <div className="bg-byzantine-blue">
        <div className="max-w-screen-web mx-auto  pt-10 pb-12 md:pb-20 flex justify-center flex-col items-center px-2 md:px-20 text-white">
          {/* <p className={`${sourceSans.className} font-semibold tracking-wide uppercase border-solid border-[1px] text-sm md:text-base px-3 py-[6px] border-blue-500`}>{category.title}</p> */}
          <div className="text-center flex gap-2 font-medium text-lg text-blue-300">
            <span>Blog</span>
            <span>/</span>
            <span>{category.title}</span>
            <span>/</span>
          </div>
          <h1 className="text-[25px] text-center md:text-3xl leading-10 lg:text-[44px] font-semibold lg:leading-[70px] mt-4 ">{title}</h1>
          <p className="mt-3 text-text-blue text-lg">Updated at: {_updatedAt.slice(0, 10)}</p>
        </div>
      </div>
      <div className="flex gap-10 px-4 py-6 md:px-10 md:py-12 xl:px-0 max-w-screen-web mx-auto">
        <div className="w-full md:w-[70%] text-[17px] md:text-lg portable_text">
          <PortableText value={body} components={portableTextComponents} />
        </div>
        <div className="w-[30%] relative hidden md:block">
          <div className="">
            <h2 className="font-medium text-[19px]">{title}</h2>
            <p className="text-neutral-600 text-[17px] mt-3">{description}</p>
            <Link href="/" className="mt-4 block font-medium text-persian-blue text-lg">Written by Lindrit</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
import Link from "next/link"
import { getArticle } from "@/sanity/utils"
import { Source_Sans_Pro } from "next/font/google";
import { Suspense } from "react";
import { PortableText } from "@portabletext/react";

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return <img src={value} />
    }
  }
}

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
      <div className="bg-byzantine-blue">
        <div className="max-w-screen-web mx-auto  pt-10 pb-20 flex justify-center flex-col items-center px-6 md:px-20 text-white">
          <p className={`${sourceSans.className} font-semibold tracking-wide uppercase border-solid border-[1px] px-3 py-[6px] border-blue-500`}>{category.title}</p>
          <h1 className="text-[27px] text-center md:text-3xl leading-10 lg:text-[44px] font-semibold lg:leading-[70px] mt-3 ">{title}</h1>
          <p className="mt-3 text-text-blue text-lg">Updated at: {_updatedAt.slice(0, 10)}</p>
        </div>
      </div>
      <div className="flex gap-10 px-10 py-12 xl:px-0 max-w-screen-web mx-auto">
        <div className="w-full md:w-[70%] text-lg portable_text">
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
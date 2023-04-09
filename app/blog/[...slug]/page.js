import Link from "next/link"
import { getArticle } from "@/sanity/utils"
import { PortableText } from "@portabletext/react"

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug[0])

  return (
    <div className="bg-byzantine-blue mt-[70px] text-white">
    </div>
  )
}
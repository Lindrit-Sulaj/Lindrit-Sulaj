import Link from "next/link";

import { getAllArticles } from "@/sanity/utils";
import Hero from "@/sections/Blog/Hero";
import Featured from "@/sections/Blog/Featured";

export const metadata = {
  title: 'My Blog | Lindrit Sulaj',
  description: "Expand your knowledge on SEO, web development, and more with my blog's diverse articles."
}

export default async function BlogPage() {
  const allArticles = await getAllArticles();

  return (
    <main className="">
      <Hero />
      <Featured />
    </main>
  )
}
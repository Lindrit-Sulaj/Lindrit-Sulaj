import Link from "next/link";

import { getAllArticles } from "@/sanity/utils";
import Hero from "@/sections/Blog/Hero";
import Featured from "@/sections/Blog/Featured";

export default async function BlogPage() {
  const allArticles = await getAllArticles();

  return (
    <main className="">
      <Hero />
      <Featured />
    </main>
  )
}
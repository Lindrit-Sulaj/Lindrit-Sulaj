import Link from "next/link";

import { getAllArticles } from "@/sanity/utils";
import Hero from "@/sections/Blog/Hero";
import Featured from "@/sections/Blog/Featured";

export const metadata = {
  title: 'My Blog | Lindrit Sulaj',
  description: "Expand your knowledge on SEO, web development, and more with my blog's diverse articles.",
  keywords: ["Developer Blog", "Blog Kosovo", "Web Development Kosovo", "SEO Blog"],
  publisher: "Lindrit Sulaj",
  creator: "Lindrit Sulaj",
  openGraph: {
    title: 'My Blog | Lindrit Sulaj',
    description: "Expand your knowledge on SEO, web development, and more with my blog's diverse articles.",
    images: [
      {
        url: 'https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Logo_-_Without_removed_bg_jcIzY2POpR.png?updatedAt=1680784572023',
        width: 400,
        height: 150
      }
    ]
  }
}

export default async function BlogPage() {
  return (
    <main className="">
      <Hero />
      <Featured />
    </main>
  )
}
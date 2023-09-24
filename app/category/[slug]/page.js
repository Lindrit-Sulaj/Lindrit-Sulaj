import { getCategories, getCategoryArticles } from "@/sanity/utils";
import Link from "next/link";

function capitalize(str) {
  let result = "";
  for (let word of str.split("-")) {
    if (result.length !== 0) {
      result += ` ${word[0].toUpperCase() + word.substring(1)}`
    } else {
      result += word[0].toUpperCase() + word.substring(1);
    }
  };
  return result;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug
  }))
}

export async function generateMetadata({ params }) {
  const categoryArticles = await getCategoryArticles(params.slug);

  return {
    title: categoryArticles[0].category.title,
    description: categoryArticles[0].category.description,
    keywords: [`${categoryArticles[0].category.title}`, `Lindrit ${categoryArticles[0].category.title}`],
    alternates: {
      canonical: `https://www.lindritsulaj.com/category/${params.slug}`
    }
  }
}

export default async function CategoryPage({ params }) {
  const categoryArticles = await getCategoryArticles(params.slug);

  return (
    <main className="mt-[70px]">
      <header className="bg-byzantine-blue text-white flex justify-center items-center flex-col py-10 px-5">
        <p className="text-blue-400 text-lg font-medium">Category /</p>
        <h1 className="text-[27px] text-center md:text-4xl leading-10 font-semibold">{capitalize(params.slug)}</h1>
        <p className="max-w-2xl text-center mt-4 text-text-blue md:text-lg ">{categoryArticles[0].category.description}</p>
      </header>

      <div className="bg-neutral-100 py-10 md:py-20">
        <p className="max-w-screen-web px-4 md:px-8 mb-4 text-lg md:text-xl text-persian-blue font-medium mx-auto">{categoryArticles.length} {categoryArticles.length === 1 ? "article" : "articles"}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-web mx-auto px-4 md:px-8 gap-8">
          {categoryArticles.map(article => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      </div>
    </main>
  )
}

const Article = ({ title, description, category, id }) => {
  return (
    <div className="bg-white p-6">
      <h4 className="text-lg md:text-xl font-medium">{title}</h4>
      <p className="text-[17px] mt-3 text-neutral-600">{description}</p>
      <Link className="mt-3 text-lg block text-blue-700 underline underline-offset-4" href={`/blog/${id}`}>View article</Link>
    </div>
  )
}

export const dynamic = 'force-dynamic'
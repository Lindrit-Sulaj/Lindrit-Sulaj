import client from "./config";
import { groq } from "next-sanity";

export async function getAllArticles() {
  return client.fetch(
    groq`*[_type == "post"]{
      title,
      description,
      "slug": slug.current,
      categories->,
      _createdAt,
      _updatedAt
    }`
  )
}

export async function getArticle(slug) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug ] {
      body,
      _createdAt,
      _updatedAt,
      description,
      title,
      category->{ title, description }
    }`, { slug }
  )
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
      title,
      description
    }`
  )
}

export async function getCategoryArticles() {
  return client.fetch(
    groq`*[_type == "post" && category->title == "Javascript"]{
      title,
      description,
      "id": slug.current
    }`
  )
}

export async function getSearchResults(query) {
  return client.fetch(
    groq`*[_type == "post" && title match $query]{
      title,
      description,
      "id": slug.current
    }`, { query: `${query}*` }
  )
}
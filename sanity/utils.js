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
      description,
      "slug": slug.current
    }`
  )
}

export async function getCategoryArticles(category) {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == $category]{
      title,
      description,
      "id": slug.current,
      category->{title, description}
    }`, { category }
  )
}

export async function getSearchResults(query) {
  return client.fetch(
    groq`*[_type == "post" && title match $query]{
      title,
      description,
      "id": slug.current,
      category->{title, "slug": slug.current}
    }`, { query: `${query}*` }
  )
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      title,
      source,
      live,
      description,
      technologies
    }`
  )
}
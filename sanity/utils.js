import client from "./config";
import { groq } from "next-sanity";

export async function getAllArticles() {
  return client.fetch(
    groq`*[_type == "post"]`
  )
}

export async function getArticle(slug) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug ] {
      body,
      _createdAt,
      title
    }`, { slug }
  )
}
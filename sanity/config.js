import { createClient } from "next-sanity"

const config = {
  projectId: "8hx6i2js",
  dataset: "production",
  apiVersion: '2021-10-21',
  useCdn: true
}

const client = createClient(config);
export default client;
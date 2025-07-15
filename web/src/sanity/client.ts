import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "9zkkr2yv",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});
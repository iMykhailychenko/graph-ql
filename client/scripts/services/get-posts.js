import { fetcher } from "../helpers/fetcher.js";

const query = `
query {
  posts {
    _id,
    title,
    image,
    description,
  }
}
`;

export const getPosts = async () => await fetcher(query);

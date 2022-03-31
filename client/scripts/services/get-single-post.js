import { fetcher } from "../helpers/fetcher.js";

const query = `
query Post($id: ID!) {
  post(id: $id) {
    _id,
    title,
    image,
    description,
  }
}
`;

export const getSinglePosts = async (id) => await fetcher(query, { id });

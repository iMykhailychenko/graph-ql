import { getSinglePosts } from "../scripts/services/get-single-post.js";
import { queryString } from "../scripts/helpers/query-string.js";
import { formatHTML } from "../scripts/helpers/format-html.js";

const start = async () => {
  const ref = document.getElementById("post");

  const { id } = queryString.parse(location.search);
  const data = await getSinglePosts(id);

  if (!data) {
    ref.innerHTML = "Something went wrong! Product not found!";
  } else {
    const { image, title, description } = data.post;
    ref.innerHTML = `
      <img style="display: block; height: 700px; width: 100%; object-fit: cover" src="${image}" alt="${title}" />
      <h2>${title}</h2>
      <div>
        ${formatHTML(description)}
      </div>
    `;
  }
};

start().catch(console.log);

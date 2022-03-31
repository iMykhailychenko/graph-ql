import { getSinglePosts } from "../scripts/services/get-single-post.js";
import { queryString } from "../scripts/helpers/query-string.js";

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
        ${description
          .replace(
            /(\b(https?|):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,
            '<a target="_blank" rel="noopener noreferrer" href="$1">$1</a>'
          )
          .replace(
            /(^|[^/])(www\.[\S]+(\b|$))/gim,
            '$1<a target="_blank" rel="noopener noreferrer" href="http://$2">$2</a>'
          )
          .replace(/\n/gi, "<br>")}
      </div>
    `;
  }
};

start().catch(console.log);

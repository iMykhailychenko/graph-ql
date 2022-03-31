import { getPosts } from "./scripts/services/get-posts.js";
import { sanitizeHTML } from "./scripts/helpers/format-html.js";

const tableTemplate = (children) => {
  return "<table><tbody>" + children + "</tbody></table>";
};

const rowTemplate = (posts) => {
  const data = posts.reduce((acc, post, index) => {
    if (index % 2 === 0) {
      acc.push([post]);
    } else {
      acc[acc.length - 1] = [...acc[acc.length - 1], post];
    }
    return acc;
  }, []);

  return data
    .map(
      (post) =>
        `<tr>${post
          .map(
            (item) =>
              `<td>
                  <img style="display: block; width: auto; height: 350px; object-fit: cover;" src="${
                    item.image
                  }" alt="${item.title}">
                  <h2>${item.title}</h2>
                  <p>${sanitizeHTML(item.description).slice(0, 400) + "..."}</p>
                  <p>
                    <a href="/posts/?id=${item._id}">View post</a>
                  </p>
            </td>`
          )
          .join("")}</tr>`
    )
    .join("");
};

const start = async () => {
  const data = await getPosts();
  const posts = document.getElementById("posts");

  if (!data?.posts) {
    posts.insertAdjacentHTML("beforeend", "Something went wrong!");
  }

  posts.insertAdjacentHTML(
    "beforeend",
    !data.posts?.length
      ? "You dont have posts yet!"
      : tableTemplate(rowTemplate(data.posts))
  );
};

start().catch(console.log);

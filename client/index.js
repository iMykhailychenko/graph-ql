import { getPosts } from "./scripts/services/get-posts.js";

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
                  <a href="/posts/${item._id}">
                    <h2>${item.title}</h2>
                    <p>${item.description.slice(0, 300) + "..."}</p>
                  </a>
            </td>`
          )
          .join("")}</tr>`
    )
    .join("");
};

const start = async () => {
  const data = await getPosts();
  const posts = document.getElementById("posts");

  if (!data) {
    posts.insertAdjacentHTML("beforeend", "Something went wrong!");
  }

  rowTemplate(data.post);

  posts.insertAdjacentHTML(
    "beforeend",
    !data.post?.length
      ? "You dont have posts yet!"
      : tableTemplate(rowTemplate(data.post))
  );
};

start().catch(console.log);

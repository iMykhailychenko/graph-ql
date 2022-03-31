export const fetcher = async (query) => {
  try {
    const res = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

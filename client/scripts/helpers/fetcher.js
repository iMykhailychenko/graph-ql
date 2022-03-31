export const fetcher = async (query, variables = {}) => {
  try {
    const res = await fetch("/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const { data } = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

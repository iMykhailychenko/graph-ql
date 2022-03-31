export const queryString = {
  parse(search) {
    const query = search.replace("?", "");

    const obj = {};
    const arr = query.split("&");
    arr.forEach((item) => {
      const [key, value] = item.split("=");
      obj[key] = Number.isNaN(Number(value)) ? value : parseFloat(value);
    });

    return obj;
  },
};

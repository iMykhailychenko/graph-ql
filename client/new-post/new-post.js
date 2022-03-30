function debounce(func, timeout = 600) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const imgTag = document.getElementById("img-tag");
const imageTextarea = document.getElementById("image");
const description = document.getElementById("description");
const errorMessage = document.getElementById("error-message");

const urlHandler = debounce((event) => {
  imgTag.src = event.target.value;
  errorMessage.style.display = "none";
});

const errorHandler = () => {
  imgTag.src = "/assets/no-image.png";
  errorMessage.style.display = "block";
  imageTextarea.value = "";
};

imgTag.addEventListener("error", errorHandler);
imageTextarea.addEventListener("keydown", urlHandler);

description.addEventListener("blur", (event) => {
  if (event.target.value.length >= 1000) {
    event.target.value = event.target.value.slice(0, 999);
  }
});

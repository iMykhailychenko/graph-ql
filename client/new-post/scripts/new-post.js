import { debounce } from "../../scripts/helpers/debounce.js";
import { refs, inputs, reset, length, modalBtn } from "./refs.js";
import { Modal } from "../../scripts/templates/modal.js";
import { Storage } from "./storage.js";

export const start = () => {
  Storage.updateInputs();

  refs.imgTag.addEventListener("error", () => {
    refs.imgTag.src = "/assets/no-image.png";
    refs.errorMessage.style.display = "block";
    inputs.image.value = "";
  });

  inputs.image.addEventListener(
    "keydown",
    debounce((event) => {
      refs.errorMessage.style.display = "none";

      refs.imgTag.src = event.target.value;
      Storage.set({ image: event.target.value });
    })
  );

  inputs.description.addEventListener(
    "keydown",
    debounce((event) => {
      if (event.target.value.length >= 2000) {
        event.target.value = event.target.value.slice(0, 1997) + "...";
      }

      length.description.innerHTML = event.target.value.length;
      Storage.set({ description: event.target.value });
    }, 300)
  );

  inputs.title.addEventListener(
    "keydown",
    debounce((event) => {
      if (event.target.value.length >= 100) {
        event.target.value = event.target.value.slice(0, 97) + "...";
      }

      length.title.innerHTML = event.target.value.length;
      Storage.set({ title: event.target.value });
    }, 300)
  );

  reset.title.addEventListener("click", () => {
    inputs.title.value = "";
    length.title.innerHTML = "0";
    Storage.set({ title: "" });
  });
  reset.image.addEventListener("click", () => {
    inputs.image.value = "";
  });
  reset.description.addEventListener("click", () => {
    inputs.description.value = "";
    length.description.innerHTML = "0";
    Storage.set({ description: "" });
  });

  refs.imgTag.addEventListener("click", () => {
    Modal.open(
      `<p>Open the website: <a target="_blank" rel="noopener" href="https://unsplash.com/">https://unsplash.com/</a></p>
                <iframe style="height: 80vh; width: 80vw" src="${location.hostname}:4000" title="Unsplash"></iframe>`
    );
  });

  modalBtn.addEventListener("click", () => {
    Modal.open(
      `<p>Open the website: <a target="_blank" rel="noopener" href="https://unsplash.com/">https://unsplash.com/</a></p>
                <iframe style="height: 80vh; width: 80vw" src="${location.hostname}:4000" title="Unsplash"></iframe>`
    );
  });
};

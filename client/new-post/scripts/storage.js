import { inputs, length, refs } from "./refs.js";

export class Storage {
  static get() {
    try {
      const str = localStorage.getItem("new-post-form");
      if (str) {
        return JSON.parse(str);
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  static set(data) {
    try {
      const form = this.get() || { title: "", image: "", description: "" };
      localStorage.setItem(
        "new-post-form",
        JSON.stringify({ ...form, ...data })
      );
    } catch (e) {
      console.log(e);
    }
  }

  static updateInputs() {
    const form = this.get();

    if (form) {
      inputs.image.value = form.image;
      inputs.title.value =
        form.title.length >= 100 ? form.title.slice(0, 97) + "..." : form.title;
      inputs.description.value =
        form.description.length >= 2000
          ? form.description.slice(0, 1997) + "..."
          : form.description;

      length.title.innerHTML = form.title.length;
      length.description.innerHTML = form.description.length;

      if (form.image) {
        refs.imgTag.src = form.image;
      }
    }
  }
}

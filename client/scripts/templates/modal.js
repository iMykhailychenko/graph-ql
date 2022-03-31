export class Modal {
  static getTemplate(children) {
    return `
      <div
        id="modal-backdrop"
        style="
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: rgba(0, 0, 0, 0.4);
        "
      >
        <div id="modal-content" style="padding: 10px; background: rgba(255, 255, 255); border-radius: 5px">
          <div id="modal-header" style="display: flex; justify-content: flex-end; padding-bottom: 10px;">
            <button id="close-modal" type="button">Close modal</button>
          </div>
          <div id="modal-inner" style="min-width: 50vw; min-height: 20vh">
            ${children}
          </div>
        </div>
      </div>
    `;
  }

  static open(children) {
    document.body.insertAdjacentHTML("beforeend", this.getTemplate(children));

    const close = document.getElementById("close-modal");
    const backdrop = document.getElementById("modal-backdrop");

    const backdropHandler = (event) => {
      event.stopPropagation();

      if (event.target === event.currentTarget) {
        backdrop.remove();
        backdrop.removeEventListener("click", backdropHandler);
      }
    };

    const closeHandler = (event) => {
      event.stopPropagation();
      backdrop.remove();
      close.removeEventListener("click", closeHandler);
    };

    backdrop.addEventListener("click", backdropHandler);
    close.addEventListener("click", closeHandler);
  }
}

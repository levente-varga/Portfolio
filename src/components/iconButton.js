class IconButton extends HTMLElement {
  static get observedAttributes() {
    return ["icon", "text", "url", "blank"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const icon = this.getAttribute("icon") ?? "";
    const text = this.getAttribute("text") ?? "";
    const url = this.getAttribute("url") ?? "";
    const blank = !this.hasAttribute("blank") || this.getAttribute("blank") === "true";

    this.innerHTML = `
      <div class="mx-auto w-fit max-w-3xl">
        <div class="flex flex-row justify-center items-center hover:shadow-md hover:shadow-hovered duration-300">
          <a href="${url}" target="${blank ? `_blank` : `_self`}" rel="noopener noreferrer">
            <div class="flex flex-row w-fit rounded p-2 gap-x-2 ring-1 duration-300 ring-textDark hover:ring-textDim bg-hoverable hover:bg-hovered fill-text hover:fill-textLight text-text hover:text-textLight">
              <div class="aspect-square size-6">
                <svg class="size-6"><use href="/svg/icons.svg#${icon}"/></svg>
              </div>
              <div class="w-full text-center">${text}</div>
            </div>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("icon-button", IconButton);
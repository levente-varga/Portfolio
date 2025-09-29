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
        <div class="flex flex-row justify-center items-center">
          <a href="${url}" target="${blank ? `_blank` : `_self`}" rel="noopener noreferrer">
            <div class="flex flex-row w-fit rounded p-2 gap-x-2 ring-2 ring-text hover:ring-textLight bg-background hover:bg-backgroundLight fill-text hover:fill-textLight hover:text-textLight text-text duration-300">
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
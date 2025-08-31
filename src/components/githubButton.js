class GithubButton extends HTMLElement {
  static get observedAttributes() {
    return ["text", "url"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const text = this.getAttribute("text") || "View on GitHub";
    const url = this.getAttribute("url") || "https://github.com/levente-varga";

    this.innerHTML = `
      <div class="mx-auto w-fit max-w-3xl">
        <div class="flex flex-row justify-center items-center">
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            <div class="flex flex-row w-fit rounded p-2 gap-x-2 ring-2 ring-text hover:ring-textLight bg-background hover:bg-backgroundLight fill-text hover:fill-textLight hover:text-textLight text-text duration-300">
              <svg class="size-6"><use href="/svg/icons.svg#github"></use></svg>
              <div class="w-full text-center">
                ${text}
              </div>
            </div>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("github-button", GithubButton);
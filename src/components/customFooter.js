class CustomFooter extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="flex flex-col px-auto bg-backgroundLight text-textDim fill-textDim text-center items-center justify-center py-16 mt-16">
        <div id="contact" class="text-4xl font-bold mb-8">Contact</div>
        <div class="">Feel free to reach out on any of these platforms!</div>
        <ul class="flex space-x-4 items-center mt-8 mx-auto w-fit">
          ${this.item("https://github.com/levente-varga", "github")}
          ${this.item("https://www.linkedin.com/in/levente-varga/", "linkedin")}
          ${this.item("https://leventevarga.itch.io", "itch")}
          ${this.item("mailto:v.levente1999@gmail.com", "gmail")}
          ${this.item("https://www.youtube.com/@levente-varga", "youtube")}
        </ul>
      </div>
      
      <div class="flex flex-row mx-auto max-w-5xl items-center justify-center text-textDark py-4">
        <p>&copy; 2025 Levente Varga. All rights reserved.</p>
      </div>
    `;
  }

  item(url, icon) {
    return url ? `
      <li><a href="${url}" target="_blank" rel="noopener noreferrer">
        <svg class="size-8 fill-textDim hover:fill-text duration-250"><use href="/svg/icons.svg#${icon}"></use></svg>
      </a></li>
    ` : ``;
  }
}

customElements.define("custom-footer", CustomFooter);
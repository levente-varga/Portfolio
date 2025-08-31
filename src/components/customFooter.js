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
          <li><a href="https://github.com/levente-varga" target="_blank" rel="noopener noreferrer">
            <svg class="size-8 hover:fill-text duration-250"><use href="/svg/icons.svg#github"/></svg>
          </a></li>
          <li><a href="https://www.linkedin.com/in/levente-varga/" target="_blank" rel="noopener noreferrer">
            <svg class="size-8 hover:fill-text duration-250"><use href="/svg/icons.svg#linkedin"/></svg>
          </a></li>
          <li><a href="https://leventevarga.itch.io" target="_blank" rel="noopener noreferrer">
            <svg class="size-8 hover:fill-text duration-250"><use href="/svg/icons.svg#itch"/></svg>
          </a></li>
          <li><a href="mailto:v.levente1999@gmail.com">
            <svg class="size-8 hover:fill-text duration-250"><use href="/svg/icons.svg#gmail"/></svg>
          </a></li>
          <li><a href="https://www.youtube.com/@levente-varga" target="_blank" rel="noopener noreferrer">
            <svg class="size-8 hover:fill-text duration-250"><use href="/svg/icons.svg#youtube"/></svg>
          </a></li>
        </ul>
      </div>
      
      <div class="flex flex-row mx-auto max-w-5xl items-center justify-center text-textDark py-4">
        <p>&copy; 2025 Levente Varga. All rights reserved.</p>
      </div>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);
class TextLink extends HTMLElement {
  static get observedAttributes() {
    return ["href"];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.innerHTML;
    const href = this.getAttribute("href");

    this.innerHTML = `<span class="underline hover:text-textLight"><a href="${href}">${text}</a></span>`;
  }
}

customElements.define("text-link", TextLink);
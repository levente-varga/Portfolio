class TextGlow extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.innerHTML;

    this.innerHTML = `<span class="text-textLight font-title">${text}</span>`;
  }
}

customElements.define("text-glow", TextGlow);
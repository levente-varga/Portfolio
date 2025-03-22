class CodeGlow extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.innerHTML;

    this.innerHTML = `
      <span class="font-mono font-normal text-textLight">${text}</span>
    `;
  }
}

customElements.define("code-glow", CodeGlow);
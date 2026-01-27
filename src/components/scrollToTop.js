class ScrollToTop extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addScrollListener();
  }

  render() {
    this.innerHTML = `
      <button id="scroll-to-top" 
        class="fixed bottom-8 right-8 z-30 p-3 rounded-full cursor-pointer shadow-lg transition-all duration-300 opacity-0 invisible translate-y-10 ring-textDark hover:ring-textDim bg-hoverable hover:bg-hovered fill-text hover:fill-textLight text-text hover:text-textLight"
        aria-label="Scroll to top"
      >
        <svg class="size-6 rotate-90 fill-current"><use href="/svg/icons.svg#back"/></svg>
      </button>
    `;
  }

  addScrollListener() {
    const button = this.querySelector("#scroll-to-top");
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        button.classList.remove("opacity-0", "invisible", "translate-y-10");
        button.classList.add("opacity-100", "visible", "translate-y-0");
      } else {
        button.classList.add("opacity-0", "invisible", "translate-y-10");
        button.classList.remove("opacity-100", "visible", "translate-y-0");
      }
    });

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

customElements.define("scroll-to-top", ScrollToTop);

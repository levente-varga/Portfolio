class BackNavbar extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="flex fixed inset-0 z-20 lg:max-w-5xl w-full mx-auto bg-background text-white p-4 justify-left items-center h-16">
          <a href="/index.html" class="px-4 py-4 cursor-pointer">
            <svg class="size-8 fill-textLight" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6251 32.5L26.7501 39.625C27.2501 40.125 27.4896 40.7083 27.4688 41.375C27.448 42.0417 27.2084 42.625 26.7501 43.125C26.2501 43.625 25.6563 43.8854 24.9688 43.9062C24.2813 43.9271 23.6876 43.6875 23.1876 43.1875L11.7501 31.75C11.2501 31.25 11.0001 30.6667 11.0001 30C11.0001 29.3333 11.2501 28.75 11.7501 28.25L23.1876 16.8125C23.6876 16.3125 24.2813 16.0729 24.9688 16.0937C25.6563 16.1146 26.2501 16.375 26.7501 16.875C27.2084 17.375 27.448 17.9583 27.4688 18.625C27.4896 19.2917 27.2501 19.875 26.7501 20.375L19.6251 27.5H47.5001C48.2084 27.5 48.8021 27.7396 49.2813 28.2187C49.7605 28.6979 50.0001 29.2917 50.0001 30C50.0001 30.7083 49.7605 31.3021 49.2813 31.7812C48.8021 32.2604 48.2084 32.5 47.5001 32.5H19.6251Z"/>
            </svg>
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define("back-navbar", BackNavbar);
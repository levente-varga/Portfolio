class CustomTitle extends HTMLElement {
  static get observedAttributes() {
    return ["title", "subtitle", "showProject", "responsive", "github", "youtube"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    const showProject = this.getAttribute("showProject") || false;
    const responsive = this.getAttribute("responsive") || false;
    const github = this.getAttribute("github");
    const youtube = this.getAttribute("youtube");

    this.innerHTML = `
      <div class="flex flex-col justify-center space-y-4 py-32 w-fit mx-auto">
        <div class="text-textDark text-center content-center w-fit">
          ${showProject ? `<div class="text-xl font-light">Project:</div>` : ``}
          <div class="${responsive ? "sm:text-6xl text-5xl md:text-7xl" : "text-7xl"} text-textDim font-extrabold">${title}</div>
          ${subtitle ? `<div class="text-xl font-light">${subtitle}</div>` : ``}
          ${github || youtube ? `
            <ul class="flex space-x-4 items-center mt-8 mx-auto w-fit">
              ${github ? `<li><a href="${github}">
                <svg class="size-8 fill-textDark hover:fill-textDim duration-250" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9047 0C14.2622 0 0 14.4375 0 32.2987C0 46.576 9.13829 58.6615 21.8155 62.939C23.4005 63.2605 23.9811 62.244 23.9811 61.3889C23.9811 60.6401 23.9288 58.0735 23.9288 55.3993C15.0537 57.3247 13.2056 51.5491 13.2056 51.5491C11.7793 47.8058 9.66596 46.8438 9.66596 46.8438C6.76114 44.8652 9.87755 44.8652 9.87755 44.8652C13.0998 45.0791 14.7905 48.1806 14.7905 48.1806C17.6425 53.0998 22.238 51.7099 24.0869 50.8541C24.3507 48.7686 25.1964 47.3248 26.0944 46.5229C19.0158 45.7741 11.5683 42.9936 11.5683 30.5872C11.5683 27.0578 12.8353 24.1703 14.8428 21.9247C14.526 21.1227 13.4165 17.8067 15.1602 13.3685C15.1602 13.3685 17.854 12.5127 23.9282 16.6838C26.5287 15.9768 29.2106 15.6172 31.9047 15.6142C34.5985 15.6142 37.3447 15.9889 39.8805 16.6838C45.9553 12.5127 48.6491 13.3685 48.6491 13.3685C50.3928 17.8067 49.2826 21.1227 48.9659 21.9247C51.0263 24.1703 52.241 27.0578 52.241 30.5872C52.241 42.9936 44.7935 45.7203 37.662 46.5229C38.8245 47.5387 39.8276 49.4635 39.8276 52.5118C39.8276 56.8431 39.7753 60.3192 39.7753 61.3882C39.7753 62.244 40.3566 63.2605 41.9409 62.9396C54.6181 58.6609 63.7564 46.576 63.7564 32.2987C63.8087 14.4375 49.4942 0 31.9047 0Z"/>
                </svg>
              </a></li>` : ``}
              ${youtube ? `<li><a href="${youtube}">
                <svg class="size-8 fill-textDark hover:fill-textDim duration-250" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M57.0414 10.3765C59.7828 11.1177 61.9442 13.2883 62.6823 16.0412C64.053 21.0707 64.0003 31.5531 64.0003 31.5531C64.0003 31.5531 64.0003 41.9826 62.6823 47.0121C61.9442 49.765 59.7828 51.9356 57.0414 52.6768C52.0331 54.0004 32.0001 54.0004 32.0001 54.0004C32.0001 54.0004 12.0198 54.0004 6.95884 52.6239C4.21748 51.8827 2.05602 49.7121 1.31796 46.9591C0 41.9826 0 31.5002 0 31.5002C0 31.5002 0 21.0707 1.31796 16.0412C2.05602 13.2883 4.2702 11.0647 6.95884 10.3235C11.9671 9 32.0001 9 32.0001 9C32.0001 9 52.0331 9 57.0414 10.3765ZM25.6211 21.8648L42.2801 31.5002L25.6211 41.1355V21.8648Z"/>
                </svg>
              </a></li>` : ``}
            </ul>
          ` : ``}
        </div>
      </div>      
    `;
  }
}

customElements.define("custom-title", CustomTitle);
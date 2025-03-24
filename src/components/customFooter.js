class CustomFooter extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="flex flex-col px-auto bg-backgroundLight text-center items-center justify-center py-16 mt-16">
        <div id="contact" class="text-4xl text-text font-bold mb-8">Contact</div>
        <div class="text-text">Feel free to reach out on any of these platforms!</div>
        <ul class="flex space-x-4 items-center mt-8 mx-auto w-fit">
          <li><a href="https://github.com/levente-varga" target="_blank" rel="noopener noreferrer">
            <svg class="size-8 fill-text hover:fill-textDim duration-250" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9047 0C14.2622 0 0 14.4375 0 32.2987C0 46.576 9.13829 58.6615 21.8155 62.939C23.4005 63.2605 23.9811 62.244 23.9811 61.3889C23.9811 60.6401 23.9288 58.0735 23.9288 55.3993C15.0537 57.3247 13.2056 51.5491 13.2056 51.5491C11.7793 47.8058 9.66596 46.8438 9.66596 46.8438C6.76114 44.8652 9.87755 44.8652 9.87755 44.8652C13.0998 45.0791 14.7905 48.1806 14.7905 48.1806C17.6425 53.0998 22.238 51.7099 24.0869 50.8541C24.3507 48.7686 25.1964 47.3248 26.0944 46.5229C19.0158 45.7741 11.5683 42.9936 11.5683 30.5872C11.5683 27.0578 12.8353 24.1703 14.8428 21.9247C14.526 21.1227 13.4165 17.8067 15.1602 13.3685C15.1602 13.3685 17.854 12.5127 23.9282 16.6838C26.5287 15.9768 29.2106 15.6172 31.9047 15.6142C34.5985 15.6142 37.3447 15.9889 39.8805 16.6838C45.9553 12.5127 48.6491 13.3685 48.6491 13.3685C50.3928 17.8067 49.2826 21.1227 48.9659 21.9247C51.0263 24.1703 52.241 27.0578 52.241 30.5872C52.241 42.9936 44.7935 45.7203 37.662 46.5229C38.8245 47.5387 39.8276 49.4635 39.8276 52.5118C39.8276 56.8431 39.7753 60.3192 39.7753 61.3882C39.7753 62.244 40.3566 63.2605 41.9409 62.9396C54.6181 58.6609 63.7564 46.576 63.7564 32.2987C63.8087 14.4375 49.4942 0 31.9047 0Z"/>
            </svg></a></li>
          <li><a href="https://www.linkedin.com/in/levente-varga/" target="_blank" rel="noopener noreferrer">
            <svg class="size-8 fill-text hover:fill-textDim duration-250" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8889 64H7.11111C3.18375 64 0 60.8163 0 56.8889V7.11111C0 3.18375 3.18375 0 7.11111 0H56.8889C60.8163 0 64 3.18375 64 7.11111V56.8889C64 60.8163 60.8163 64 56.8889 64ZM45.6139 55.1111H55.1111V35.6011C55.1111 27.3462 50.4317 23.3549 43.8956 23.3549C37.3565 23.3549 34.6045 28.447 34.6045 28.447V24.2963H25.4519V55.1111H34.6045V38.9352C34.6045 34.601 36.5997 32.0218 40.4184 32.0218C43.9287 32.0218 45.6139 34.5002 45.6139 38.9352V55.1111ZM8.88889 14.5751C8.88889 17.7153 11.4152 20.2613 14.5328 20.2613C17.6503 20.2613 20.1751 17.7153 20.1751 14.5751C20.1751 11.435 17.6503 8.88889 14.5328 8.88889C11.4152 8.88889 8.88889 11.435 8.88889 14.5751ZM19.3506 55.1111H9.80671V24.2963H19.3506V55.1111Z"/>
            </svg>
          </a></li>
          <li><a href="mailto:v.levente1999@gmail.com">
            <svg class="size-8 fill-text hover:fill-textDim duration-250" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M53.5273 9.32147C57.84 6.08511 64 9.16147 64 14.5578V51.6488C64 54.056 62.0509 56.0124 59.6364 56.0124H49.4545V31.2851L32 44.376L14.5455 31.2851V56.0124H4.36364C1.95636 56.0124 0 54.0633 0 51.6488V14.5578C0 9.16147 6.15273 6.08511 10.4727 9.32147L32 25.4669L53.5273 9.32147Z"/>
            </svg>
          </a></li>
          <li><a href="https://www.youtube.com/@levente-varga" target="_blank" rel="noopener noreferrer">
            <svg class="size-8 fill-text hover:fill-textDim duration-250" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M57.0414 10.3765C59.7828 11.1177 61.9442 13.2883 62.6823 16.0412C64.053 21.0707 64.0003 31.5531 64.0003 31.5531C64.0003 31.5531 64.0003 41.9826 62.6823 47.0121C61.9442 49.765 59.7828 51.9356 57.0414 52.6768C52.0331 54.0004 32.0001 54.0004 32.0001 54.0004C32.0001 54.0004 12.0198 54.0004 6.95884 52.6239C4.21748 51.8827 2.05602 49.7121 1.31796 46.9591C0 41.9826 0 31.5002 0 31.5002C0 31.5002 0 21.0707 1.31796 16.0412C2.05602 13.2883 4.2702 11.0647 6.95884 10.3235C11.9671 9 32.0001 9 32.0001 9C32.0001 9 52.0331 9 57.0414 10.3765ZM25.6211 21.8648L42.2801 31.5002L25.6211 41.1355V21.8648Z"/>
            </svg>
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
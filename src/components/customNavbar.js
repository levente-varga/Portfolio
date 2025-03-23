class CustomNavbar extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this.render();
    this.addScrollListener();
    this.setupDropdownMenu();
  }

  render() {
    this.innerHTML = `
      <header class="fixed top-0 left-0 w-full z-20 transition-transform duration-300">
        <div id="navbar" style="transition: transform 0.3s ease-in-out;" class="flex lg:max-w-5xl w-full mx-auto bg-background text-white p-4 justify-left items-center h-16">
          <a href="/index.html" class="p-4 cursor-pointer">
            <svg class="size-8 fill-textLight" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6251 32.5L26.7501 39.625C27.2501 40.125 27.4896 40.7083 27.4688 41.375C27.448 42.0417 27.2084 42.625 26.7501 43.125C26.2501 43.625 25.6563 43.8854 24.9688 43.9062C24.2813 43.9271 23.6876 43.6875 23.1876 43.1875L11.7501 31.75C11.2501 31.25 11.0001 30.6667 11.0001 30C11.0001 29.3333 11.2501 28.75 11.7501 28.25L23.1876 16.8125C23.6876 16.3125 24.2813 16.0729 24.9688 16.0937C25.6563 16.1146 26.2501 16.375 26.7501 16.875C27.2084 17.375 27.448 17.9583 27.4688 18.625C27.4896 19.2917 27.2501 19.875 26.7501 20.375L19.6251 27.5H47.5001C48.2084 27.5 48.8021 27.7396 49.2813 28.2187C49.7605 28.6979 50.0001 29.2917 50.0001 30C50.0001 30.7083 49.7605 31.3021 49.2813 31.7812C48.8021 32.2604 48.2084 32.5 47.5001 32.5H19.6251Z"/>
            </svg>
          </a>
        </div>
      </header>
      
      <header class="fixed inset-0 z-20">
        <div class="flex bg-background text-white p-4 justify-center h-16">
          <nav class="md:flex hidden">
            <ul class="flex space-x-5 items-center">
              <li><a href="#home"><img src="/svg/logo.svg" alt="Logo" class="w-8 h-8 mr-4 ml-4"></a></li>
              <li><a href="#projects" class="hover:text-gray-300">Projects</a></li>
              <li><a href="#experience" class="hover:text-gray-300">Experience</a></li>
              <li><a href="#education" class="hover:text-gray-300">Education</a></li>
              <li><a href="#about" class="hover:text-gray-300">About</a></li>
              <li><a href="#contact" class="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
      
          <!-- Mobile Menu Button -->
          <div class="flex md:hidden w-full justify-between items-center">
            <div class="flex-1 items-center"></div>
            <button id="btn-menu" class="px-4 py-4 cursor-pointer">
              <svg class="size-6 fill-white" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0L30 60H10V20L30 0Z" fill="white"/>
                <path d="M30 60L50 40V60H30Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      
        <!-- Mobile Dropdown Menu -->
        <div id="mobile-menu" class="md:hidden hidden z-20 fixed inset-y-16 w-full h-fit text-2xl">
          <div class="bg-background shadow-md">
            <a id="btn-home" href="#home" class="block px-8 py-6 text-white hover:bg-textDark duration-300">Home</a>
            <a id="btn-projects" href="#projects" class="block px-8 py-6 text-white hover:bg-textDark duration-300">Projects</a>
            <a id="btn-experience" href="#experience" class="block px-8 py-6 text-white hover:bg-textDark duration-300">Experience</a>
            <a id="btn-education" href="#education" class="block px-8 py-6 text-white hover:bg-textDark duration-300">Education</a>
            <a id="btn-about" href="#about" class="block px-8 py-6 text-white hover:bg-textDark duration-300">About</a>
            <a id="btn-contact" href="#contact" class="block px-8 py-6 text-white hover:bg-textDark duration-300">Contact</a>
          </div>
          <button id="btn-close" class="w-full h-full bg-black/50"></button>
        </div>
      </header>
    `;
  }

  addScrollListener() {
    let lastScrollY = window.scrollY;
    const navbar = this.querySelector("#navbar");
    const scrollThreshold = 50;

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY + scrollThreshold) {
        navbar.style.transform = "translateY(-100%)";
        lastScrollY = window.scrollY;
      } else if (window.scrollY < lastScrollY - scrollThreshold) {
        navbar.style.transform = "translateY(0)";
        lastScrollY = window.scrollY;
      }
    });
  }

  setupDropdownMenu() {
    const btnMenu = this.querySelector('#btn-menu');
    const mobileMenu = this.querySelector('#mobile-menu');
    const btnHome = this.querySelector('#btn-home');
    const btnProjects = this.querySelector('#btn-projects');
    const btnExperience = this.querySelector('#btn-experience');
    const btnEducation = this.querySelector('#btn-education');
    const btnAbout = this.querySelector('#btn-about');
    const btnContact = this.querySelector('#btn-contact');
    const btnClose = this.querySelector('#btn-close');

    btnMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    btnHome.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    btnProjects.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    btnExperience.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    btnEducation.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    btnAbout.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    btnContact.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    btnClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
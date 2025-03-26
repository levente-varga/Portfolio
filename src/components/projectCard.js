class ProjectCard extends HTMLElement {
  projectCardId = "";

  static get observedAttributes() {
    return ["name", "description", "image", "tags", "year", "url"];
  }

  connectedCallback() {
    this.render();
    this.addHover();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "Name";
    const description = this.getAttribute("description") || "Description";
    const image = this.getAttribute("image") || "";
    const tags = this.getAttribute("tags") ? JSON.parse(this.getAttribute("tags")) : {};
    const year = this.getAttribute("year") || "";
    const url = this.getAttribute("url") || "";

    this.projectCardId = `project-card-${name.toLowerCase()}`;

    this.innerHTML = `
      <a href="${url}">
      <div class="perspective-[700px]">
      <div id="${(this.projectCardId)}" class="w-full rounded-2xl duration-[120ms] ease-out ring-1 ring-white/5 bg-foreground shadow-xl">
        <div class="rounded-t-2xl aspect-[calc(5/3)] bg-cover bg-center bg-no-repeat" style="background-image: url(${image});"> </div>
        
        <div class="p-6">
          <div class="flex justify-between items-center">
            <div class="text-xl text-textLight font-bold">${name}</div>
            <div class="text-sm text-textDim font-light">${year}</div>
          </div>
          <div class="text-sm text-text font-light my-2">${description}</div>
          <ul class="flex text-text items-center">
            ${Object.entries(tags).map(([tag, color]) => `
              <li class="w-3 h-3 rounded-2xl bg-${color} inset-ring-1 inset-ring-white/20"></li>
              <li class="pr-4 pl-1 text-sm font-light">${tag}</li>
            `).join("")}
          </ul>
        </div>
      </div>
      </div>
      </a>
    `;
  }

  addHover() {
    const projectCard = document.getElementById(this.projectCardId);

    projectCard.addEventListener('mousemove', (e) => {
      const {width, height, left, top} = projectCard.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (e.clientX - centerX) / width;
      const deltaY = (e.clientY - centerY) / height;

      const tiltX = deltaY * -5;
      const tiltY = -deltaX * -5;

      projectCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    projectCard.addEventListener('mouseleave', () => {
      projectCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  }
}

customElements.define("project-card", ProjectCard);
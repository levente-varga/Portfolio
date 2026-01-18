class ProjectDetails extends HTMLElement {
  static get observedAttributes() {
    return ['warn', 'idea', 'info', 'time'];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const warn = JSON.parse(this.getAttribute('warn'));
    const idea = JSON.parse(this.getAttribute('idea'));
    const info = JSON.parse(this.getAttribute('info'));
    const time = JSON.parse(this.getAttribute('time'));

    this.innerHTML = `
      <div id="about" class="text-4xl text-center text-textDim font-title">About</div>
      <div class="w-full max-w-xl mx-auto space-y-2 sm:px-8 px-4 my-8 text-text text-md font-light fill-text">
        ${this.paragraph(warn, 'warning')}
        ${this.paragraph(idea, 'bulb')}
        ${this.paragraph(info, 'info')}
        ${this.paragraph(time, 'hourglass')}
      </div>
    `;
  }

  paragraph(lines, icon) {
    return lines ? `
      <div class="flex flex-row space-x-4">
        <svg class="size-6 min-w-6"><use href="/svg/icons.svg#${icon}"/></svg>
        <div class="flex flex-col space-y-2 mb-4">
          ${lines.map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>
    ` : ``;
  }
}

customElements.define('project-details', ProjectDetails);
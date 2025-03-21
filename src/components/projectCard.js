class ProjectCard extends HTMLElement {
    static get observedAttributes() {
        return ["title", "description", "image", "tags", "year", "url"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute("title") || "Title";
        const description = this.getAttribute("description") || "Description";
        const image = this.getAttribute("image") || "";
        const tags = this.getAttribute("tags") ? JSON.parse(this.getAttribute("tags")) : {};
        const year = this.getAttribute("year") || "";
        const url = this.getAttribute("url") || "";

        this.innerHTML = `
            <a href="${url}">
            <div class="relative w-full rounded-2xl ring-1 ring-white/5 bg-foreground shadow-xl">
                <div class="rounded-t-2xl aspect-[calc(5/3)] bg-cover bg-center" style="background-image: url(${image});"> </div>
                
                <div class="p-6">
                    <div class="flex justify-between items-center">
                        <div class="text-xl text-textLight font-bold">${title}</div>
                        <div class="text-sm text-textDim font-light">${year}</div>
                    </div>
                    <div class="text-sm text-text font-light my-2">${description}</div>
                    <ul class="flex text-text items-center">
                        ${Object.entries(tags).map(([tag, color]) => `
                            <li class="relative w-3 h-3 rounded-2xl bg-${color} inset-ring-1 inset-ring-white/20"></li>
                            <li class="pr-4 pl-1 text-sm font-light">${tag}</li>
                        `).join("")}
                    </ul>
                </div>
            </div>
            </a>
        `;
    }
}

customElements.define("project-card", ProjectCard);
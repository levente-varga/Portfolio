class TimelineRow extends HTMLElement {
    static get observedAttributes() {
        return ["title", "subtitle", "time", "description", "logo", "left", "first", "last"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute("title") || "Title";
        const subtitle = this.getAttribute("subtitle") || "Subtitle";
        const time = this.getAttribute("time") || "Time";
        const description = this.getAttribute("description");
        const logo = this.getAttribute("logo") || "";
        const left = this.getAttribute("left") === "true";
        const first = this.getAttribute("first") === "true";
        const last = this.getAttribute("last") === "true";

        this.innerHTML = `
            <div class="flex flex-row mx-auto max-w-5xl">
                <div class="flex flex-1 flex-col ${left ? "items-end text-end order-0" : "items-start text-start order-2"} text-textDark space-y-2 py-2">
                    <div class="text-textLight text-2xl font-bold">${title}</div>
                    <div class="flex flex-row">
                        <div class="text-text text-xl ${!left ? "order-1" : ""}">${subtitle}</div>
                        ${logo ? `<img class="size-6 rounded ${left ? "order-1 ml-2" : "mr-2"}" src="${logo}" alt="Logo"/>` : ''}
                    </div>
                    <div class="text-text text-md italic">${time}</div>
                    ${description ? `<div class="text-textDim text-md">${description}</div>` : ''}
                </div>
                <div class="w-1 mx-6 max-h-full ${first ? "rounded-t" : ""} ${last ? "rounded-b" : ""} order-1 bg-textDark"></div>
                <div class="flex flex-1 flex-col items-center justify-center text-textDark ${left ? "order-2" : "order-0"}"></div>
            </div>
        `;
    }
}

customElements.define("timeline-row", TimelineRow);
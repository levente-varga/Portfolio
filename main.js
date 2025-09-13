import { projects } from './src/projects.js';
import { experiences } from "./src/experiences.js";
import { educations } from "./src/educations.js";
import { awards } from "./src/awards.js";

const projectsContainer = document.getElementById('projects-container');
const experienceContainer = document.getElementById('experience-container');
const educationContainer = document.getElementById('education-container');
const awardsContainer = document.getElementById('awards-container');

// Create project cards
projects.forEach(project => {
  const projectCard = document.createElement('project-card');
  projectCard.setAttribute('name', project.name);
  projectCard.setAttribute('description', project.description);
  projectCard.setAttribute('image', project.image);
  projectCard.setAttribute('tags', project.tags);
  projectCard.setAttribute('year', project.year);
  projectCard.setAttribute('url', project.url);
  projectCard.classList.add('perspective-near');
  projectsContainer.appendChild(projectCard);
});

function createTimeline(entries, container) {
  entries.forEach((entry, index) => {
    const left = index % 2 === 0;
    const first = index === 0;
    const last = index === entries.length - 1;
    const timelineRow = document.createElement('timeline-row');
    timelineRow.setAttribute('name', entry.name);
    timelineRow.setAttribute('company', entry.company);
    timelineRow.setAttribute('company-url', entry.companyUrl);
    timelineRow.setAttribute('logo', entry.logo);
    timelineRow.setAttribute('time', entry.time);
    timelineRow.setAttribute('location', entry.location);
    timelineRow.setAttribute('footer', entry.footer);
    timelineRow.setAttribute('description', entry.description);
    timelineRow.setAttribute('left', left ? 'true' : 'false');
    timelineRow.setAttribute('first', first ? 'true' : 'false');
    timelineRow.setAttribute('last', last ? 'true' : 'false');
    container.appendChild(timelineRow);
  });
}

function setupCarousel() {
  const iconList = [
    'vscode', 'visualstudio', 'azure', 'unity', 'html', 'css', 'javascript', 'dart', 'kotlin', 'xcode', 'git', 'cpp', 'csharp', 'aspnet', 'tailwind', 'androidstudio', 'webstorm', 'rider', 'blender', 'davinci', 'figma', 'godot', 'flutter'
  ];
  iconList.sort(() => Math.random() - 0.5);

  const carousel = document.getElementById('icon-carousel');
  const iconWidth = 32;
  const gap = 16;
  const speed = 15;

  function createIcon(id) {
    const img = document.createElement('div');
    img.setAttribute('class', 'size-8 bg-cover bg-center bg-no-repeat');
    img.style.backgroundImage = `url('/images/tools/${id}.png')`;
    const div = document.createElement('div');
    div.setAttribute('class', 'h-8 w-12 pr-4');
    div.appendChild(img);
    return div;
  }

  function fillCarousel() {
    const containerWidth = carousel.parentElement.offsetWidth;
    for (let i = 0; i < iconList.length * 2; i++) {
      const icon = createIcon(iconList[i % iconList.length]);
      carousel.appendChild(icon);
    }
  }

  fillCarousel();

  let offset = 0;
  function animateCarousel() {
    offset -= (speed / 60);
    carousel.style.transform = `translateX(${offset}px)`;

    const firstIcon = carousel.firstElementChild;
    if (firstIcon && firstIcon.getBoundingClientRect().right < carousel.parentElement.getBoundingClientRect().left) {
      carousel.appendChild(firstIcon);
      offset += iconWidth + gap;
      carousel.style.transform = `translateX(${offset}px)`;
    }
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();
}

createTimeline(experiences, experienceContainer);
createTimeline(educations, educationContainer);
createTimeline(awards, awardsContainer);
setupCarousel();
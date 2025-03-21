import { projects } from './src/projects.js';
import { experiences } from "./src/experiences.js";
import { educations } from "./src/educations.js";

const projectsContainer = document.getElementById('projects-container');
const experienceContainer = document.getElementById('experience-container');
const educationContainer = document.getElementById('education-container');

// Create project cards
projects.forEach(project => {
    const projectCard = document.createElement('project-card');
    projectCard.setAttribute('title', project.title);
    projectCard.setAttribute('description', project.description);
    projectCard.setAttribute('image', project.image);
    projectCard.setAttribute('tags', project.tags);
    projectCard.setAttribute('year', project.year);
    projectCard.setAttribute('url', project.url);
    projectsContainer.appendChild(projectCard);
});

// Create experience timeline
experiences.forEach((experience, index) => {
    const left = index % 2 === 0;
    const first = index === 0;
    const last = index === experiences.length - 1;
    const timelineRow = document.createElement('timeline-row');
    timelineRow.setAttribute('title', experience.title);
    timelineRow.setAttribute('subtitle', experience.subtitle);
    timelineRow.setAttribute('time', experience.time);
    timelineRow.setAttribute('description', experience.description);
    timelineRow.setAttribute('logo', experience.logo);
    timelineRow.setAttribute('left', left ? 'true' : 'false');
    timelineRow.setAttribute('first', first ? 'true' : 'false');
    timelineRow.setAttribute('last', last ? 'true' : 'false');
    experienceContainer.appendChild(timelineRow);
})

// Create education timeline
educations.forEach((education, index) => {
    const left = index % 2 === 0;
    const first = index === 0;
    const last = index === educations.length - 1;
    const timelineRow = document.createElement('timeline-row');
    timelineRow.setAttribute('title', education.title);
    timelineRow.setAttribute('subtitle', education.subtitle);
    timelineRow.setAttribute('time', education.time);
    timelineRow.setAttribute('description', education.description);
    timelineRow.setAttribute('logo', education.logo);
    timelineRow.setAttribute('left', left ? 'true' : 'false');
    timelineRow.setAttribute('first', first ? 'true' : 'false');
    timelineRow.setAttribute('last', last ? 'true' : 'false');
    educationContainer.appendChild(timelineRow);
})

// Set smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 80;

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });
        }
    });
});
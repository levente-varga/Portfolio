import { projects } from './src/projects.js';
import { experience } from "./src/experience.js";
import { education } from "./src/education.js";

const projectsContainer = document.getElementById('projects-container');
const experienceContainer = document.getElementById('experience-container');
const educationContainer = document.getElementById('education-container');

// Create project cards
projects.forEach(project => {
    const projectCard = document.createElement('project-card');
    projectCard.setAttribute('title', project.title);
    projectCard.setAttribute('description', project.description);
    projectCard.setAttribute('src', project.src);
    projectCard.setAttribute('tags', project.tags);
    projectCard.setAttribute('year', project.year);
    projectsContainer.appendChild(projectCard);
});

experience.forEach((experience, index) => {
    const left = index % 2 === 1;
    const first = index === 0;
    const last = index === experience.length - 1;
    const timelineRow = document.createElement('timeline-row');
    timelineRow.setAttribute('title', experience.title);
    timelineRow.setAttribute('subtitle', experience.subtitle);
    timelineRow.setAttribute('time', experience.time);
    timelineRow.setAttribute('description', experience.description);
    timelineRow.setAttribute('logo', experience.logo);
    timelineRow.setAttribute('left', left ? '' : null);
    timelineRow.setAttribute('first', first ? '' : null);
    timelineRow.setAttribute('last', last ? '' : null);
    experienceContainer.appendChild(timelineRow);
})

education.forEach((education, index) => {
    const left = index % 2 === 1;
    const first = index === 0;
    const last = index === education.length - 1;
    const timelineRow = document.createElement('timeline-row');
    timelineRow.setAttribute('title', education.title);
    timelineRow.setAttribute('subtitle', education.subtitle);
    timelineRow.setAttribute('time', education.time);
    timelineRow.setAttribute('description', education.description);
    timelineRow.setAttribute('logo', education.logo);
    timelineRow.setAttribute('left', left ? '' : null);
    timelineRow.setAttribute('first', first ? '' : null);
    timelineRow.setAttribute('last', last ? '' : null);
    educationContainer.appendChild(timelineRow);
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 80; // Adjust based on your header height

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });
        }
    });
});
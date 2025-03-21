import { projects } from './src/projects.js'; // Import the projects array from the projects.js file

const projectsContainer = document.getElementById('projects-container');

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
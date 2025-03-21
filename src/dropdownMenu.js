const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const btnHome = document.getElementById('btnHome');
const btnProjects = document.getElementById('btnProjects');
const btnExperience = document.getElementById('btnExperience');
const btnEducation = document.getElementById('btnEducation');
const btnAbout = document.getElementById('btnAbout');
const btnContact = document.getElementById('btnContact');
const btnClose = document.getElementById('btnClose');

menuBtn.addEventListener('click', () => {
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
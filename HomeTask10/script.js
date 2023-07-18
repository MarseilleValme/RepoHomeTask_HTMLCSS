const menuActive = document.querySelector('.menu-active');
const headermenu = document.querySelector('.user-list__item-menu');
const menuclose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

headermenu.addEventListener('click', toggleMenu);
headerClose.addEventListener('click', toggleMenu);
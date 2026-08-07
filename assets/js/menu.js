document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menu = document.getElementById('menu');
    const backdrop = document.querySelector('.menu-backdrop');

    function openMenu() {
        menu.classList.add('open');
        menu.classList.add('slide-in');
        backdrop.classList.add('open');
    }

    function closeMenu() {
        menu.classList.remove('slide-in');
        backdrop.classList.remove('open');
        setTimeout(() => menu.classList.remove('open'), 300);
    }

    menuIcon.addEventListener('click', openMenu);
    closeIcon.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
});

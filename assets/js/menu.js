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

    function activateOnEnterOrSpace(handler) {
        return function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handler();
            }
        };
    }

    menuIcon.addEventListener('click', openMenu);
    menuIcon.addEventListener('keydown', activateOnEnterOrSpace(openMenu));
    closeIcon.addEventListener('click', closeMenu);
    closeIcon.addEventListener('keydown', activateOnEnterOrSpace(closeMenu));
    backdrop.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menu.classList.contains('open')) {
            closeMenu();
        }
    });
});

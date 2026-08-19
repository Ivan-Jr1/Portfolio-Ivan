document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector('i');
    const root = document.documentElement;

    function refreshParticles(theme) {
        if (typeof window.initParticles !== 'function' || !document.getElementById('particles-js')) return;

        if (window.pJSDom && window.pJSDom.length) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }

        window.initParticles(theme === 'light' ? '#000000' : '#ffffff');
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            root.removeAttribute('data-theme');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    applyTheme(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');

    toggleButton.addEventListener('click', function () {
        const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(nextTheme);
        refreshParticles(nextTheme);
        localStorage.setItem('theme', nextTheme);
    });
});

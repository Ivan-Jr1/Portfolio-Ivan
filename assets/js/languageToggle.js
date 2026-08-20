document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('lang-toggle');
    if (!toggleButton) return;

    const label = toggleButton.querySelector('.lang-label');

    function applyLanguage(lang) {
        const dict = translations[lang];

        document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
        label.textContent = lang === 'en' ? 'PT' : 'EN';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const text = dict[el.getAttribute('data-i18n')];
            if (text) el.textContent = text;
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            const text = dict[el.getAttribute('data-i18n-aria')];
            if (text) el.setAttribute('aria-label', text);
        });
    }

    applyLanguage(localStorage.getItem('lang') === 'en' ? 'en' : 'pt');

    toggleButton.addEventListener('click', function () {
        const nextLang = localStorage.getItem('lang') === 'en' ? 'pt' : 'en';
        applyLanguage(nextLang);
        localStorage.setItem('lang', nextLang);
    });
});

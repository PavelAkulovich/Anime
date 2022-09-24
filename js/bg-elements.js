const elements = document.querySelectorAll('.set-bg');

elements.forEach(
    el => {
        const src = el.dataset.setbg
        el.style.backgroundImage = `url(${src})`
    }
);
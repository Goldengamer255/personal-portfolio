document.addEventListener('DOMContentLoaded', () => {
    /* ---------- Scroll reveal (your original idea, kept) ---------- */
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targetElements = document.querySelectorAll('.project-card, #projects h2, #skills h2, .skill-groups > div, #experience h2, #beyond h2, .timeline li, .beyond > div, footer');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        // Show everything immediately
        targetElements.forEach((el) => el.classList.add('active'));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // animate once
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        targetElements.forEach((el) => {
            el.classList.add('scroll-reveal');
            revealObserver.observe(el);
        });
    }

    /* ---------- Footer year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Highlight current section in the nav ---------- */
    const navLinks = [...document.querySelectorAll('nav ul a')];
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((a) => {
                    if (a.getAttribute('href') === '#' + entry.target.id) {
                        a.setAttribute('aria-current', 'true');
                    } else {
                        a.removeAttribute('aria-current');
                    }
                });
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        navLinks
            .map((a) => document.querySelector(a.getAttribute('href')))
            .filter(Boolean)
            .forEach((section) => spy.observe(section));
    }

    /* ---------- Project filters ---------- */
    const chips = document.querySelectorAll('.chip');
    const cards = document.querySelectorAll('#project-grid .project-card');
    const emptyMsg = document.getElementById('empty');

    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            const filter = chip.dataset.filter;
            chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));

            let shown = 0;
            cards.forEach((card) => {
                const match = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
                card.hidden = !match;
                if (match) shown++;
            });
            emptyMsg.hidden = shown > 0;
        });
    });
});

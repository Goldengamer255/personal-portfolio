document.addEventListener('DOMContentLoaded', () => {
    // Configure the scroll intersection monitor configuration
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger animation exactly once
            }
        });
    }, revealOptions);

    // Bind scroll animation tracking to all targeted cards and sections
    const targetElements = document.querySelectorAll('.project-card, #projects h2, footer');
    targetElements.forEach(element => {
        element.classList.add('scroll-reveal');
        revealObserver.observe(element);
    });
});

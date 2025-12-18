
// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Re-render icons after theme change
    lucide.createIcons();
});

// Initial Page Load Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.to('.hero-section', { opacity: 1, y: 0, duration: 0.8 })
        .to('.marquee-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to('.bento-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to('.quote-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to('.carousel-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to('.bestseller-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to('.iphone-collection-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to('.promo-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");
});

// Carousel Scroll Logic
const carousel = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carousel && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
}

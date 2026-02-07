// Language Switching
const langToggle = document.getElementById('langToggle');
const html = document.documentElement;

// Load saved language or default to Arabic
const savedLang = localStorage.getItem('language') || 'ar';
setLanguage(savedLang);

langToggle.addEventListener('click', () => {
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
});

function setLanguage(lang) {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('language', lang);

    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const text = link.getAttribute(`data-${lang}`);
        if (text) {
            link.textContent = text;
        }
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and elements
window.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .testimonial-card, .info-item, .contact-cta, .provider'
    );

    animatedElements.forEach((el, index) => {
        el.classList.add('scroll-fade');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 4px 30px rgba(53, 83, 87, 0.12)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 20px rgba(53, 83, 87, 0.08)';
    }

    lastScroll = currentScroll;
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect sound/haptic feedback simulation
document.querySelectorAll('.service-card, .testimonial-card, .provider').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

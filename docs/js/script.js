// vCard Portfolio - Interactive Elements

// Smooth scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service items and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-item, .timeline-item, .skills-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Theme toggle (light/dark)
const themeToggle = document.querySelector('[data-theme-toggle]');
const root = document.documentElement;

const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', theme === 'light');
        themeToggle.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    }
    localStorage.setItem('theme', theme);
};

const storedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(storedTheme || (prefersLight ? 'light' : 'dark'));

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'light' ? 'dark' : 'light');
    });
}

// Navigation functionality
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        // Remove active class from all links and pages
        for (let i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].classList.remove('active');
        }
        for (let i = 0; i < pages.length; i++) {
            pages[i].classList.remove('active');
        }
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Show corresponding page
        const targetPage = this.innerHTML.toLowerCase();
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].dataset.page === targetPage) {
                pages[i].classList.add('active');
                
                // Re-observe animated elements for the new page
                const newAnimatedElements = pages[i].querySelectorAll('.service-item, .timeline-item, .skills-item');
                newAnimatedElements.forEach((el, index) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                // Smooth scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });
}

// Sidebar toggle functionality for mobile
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const sidebarInfo = document.querySelector('.sidebar-info-more');

if (sidebarBtn && sidebarInfo) {
    sidebarBtn.addEventListener('click', function() {
        sidebarInfo.classList.toggle('active');
        const isExpanded = sidebarInfo.classList.contains('active');
        sidebarBtn.setAttribute('aria-expanded', isExpanded);
    });
}

// Add parallax effect to avatar
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const avatar = document.querySelector('.avatar-image');
    if (avatar && window.innerWidth > 1024) {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY;
        avatar.style.transform = `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`;
        lastScrollY = scrollY;
    }
});

// Add typing effect to title on load
const title = document.querySelector('.info-content .name');
if (title) {
    const originalText = title.textContent;
    title.textContent = '';
    let charIndex = 0;
    
    const typeWriter = () => {
        if (charIndex < originalText.length) {
            title.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}


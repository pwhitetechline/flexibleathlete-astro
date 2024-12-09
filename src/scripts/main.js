// Intersection Observer for fade-in animations
const fadeInElements = document.querySelectorAll('.fade-in');
const slideInElements = document.querySelectorAll('.slide-in');

const fadeInOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, fadeInOptions);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

slideInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Treatment card hover effect
const treatmentCards = document.querySelectorAll('.treatment-card');
treatmentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    });
});

// Parallax effect for hero section
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        start += increment;

        if (elapsed < duration) {
            element.textContent = Math.round(start);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Mobile menu toggle with animation
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Form interaction enhancements
const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    const label = input.previousElementSibling;
    if (label && label.tagName === 'LABEL') {
        input.addEventListener('focus', () => {
            label.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('active');
            }
        });

        // Check if input has value on page load
        if (input.value) {
            label.classList.add('active');
        }
    }
});

// Testimonial carousel
class TestimonialCarousel {
    constructor(container) {
        this.container = container;
        this.testimonials = container.querySelectorAll('.testimonial');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        
        this.init();
    }

    init() {
        this.createControls();
        this.showTestimonial(0);
        this.startAutoplay();
        
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());
    }

    createControls() {
        const controls = document.createElement('div');
        controls.className = 'testimonial-controls';
        
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '←';
        prevButton.addEventListener('click', () => this.prev());
        
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '→';
        nextButton.addEventListener('click', () => this.next());
        
        controls.appendChild(prevButton);
        controls.appendChild(nextButton);
        this.container.appendChild(controls);
    }

    showTestimonial(index) {
        this.testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
            testimonial.style.opacity = i === index ? '1' : '0';
            testimonial.style.transform = i === index ? 'translateX(0)' : 'translateX(100px)';
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.showTestimonial(this.currentIndex);
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.showTestimonial(this.currentIndex);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.next(), 5000);
    }

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }
}

// Initialize carousels
document.querySelectorAll('.testimonial-carousel').forEach(carousel => {
    new TestimonialCarousel(carousel);
});

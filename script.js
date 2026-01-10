// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });
});

// ===========================
// Mobile Menu Toggle
// ===========================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-wrapper')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===========================
// Active Section Highlighting
// ===========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Form Submission Handler
// ===========================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // In a real implementation, you would send this to a backend service
    // For now, we'll just show a success message
    console.log('Form submitted:', data);

    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 30px 50px;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-size: 1.1rem;
        font-weight: 600;
        text-align: center;
        animation: slideIn 0.3s ease;
    `;

    successMessage.innerHTML = `
        <div style="margin-bottom: 10px; font-size: 2rem;">✓</div>
        <div>Thank you for your message!</div>
        <div style="font-size: 0.9rem; margin-top: 10px; font-weight: 400;">We'll get back to you within 24 hours.</div>
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(successMessage);

    // Reset form
    contactForm.reset();

    // Remove message after 4 seconds
    setTimeout(() => {
        successMessage.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            successMessage.remove();
        }, 300);
    }, 4000);
});

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles to elements
const animatedElements = document.querySelectorAll('.inside-card, .principle-card, .service-card, .about-text, .about-image');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Stats Counter Animation
// ===========================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===========================
// Book Purchase Tracking
// ===========================
const bookButtons = document.querySelectorAll('a[href*="amazon"]');
bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Track book click (would integrate with analytics)
        console.log('Book purchase link clicked');
    });
});

// ===========================
// Service Booking Tracking
// ===========================
const serviceButtons = document.querySelectorAll('.btn-service');
serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Scroll to contact form
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = contactSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Pre-fill the interest field
            setTimeout(() => {
                const interestField = document.querySelector('#interest');
                const buttonText = button.closest('.service-card').querySelector('h3').textContent;

                if (interestField) {
                    if (buttonText.includes('Keynote')) {
                        interestField.value = 'keynote';
                    } else if (buttonText.includes('Workshop')) {
                        interestField.value = 'workshop';
                    }
                }
            }, 800);
        }
    });
});

// ===========================
// Lazy Loading Optimization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lean Sales website loaded successfully');

    // Add loading animation complete class
    document.body.classList.add('loaded');
});

// ===========================
// Page Visibility API
// ===========================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden');
    } else {
        console.log('Page visible');
    }
});

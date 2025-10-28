// ===== Animated Title in Hero (Name stays fixed as Irumva) =====
const heroTitle = document.getElementById('heroTitle');
const titles = ['Software Engineer', 'Backend Developer', 'Full-Stack Developer', 'API Developer'];
let currentTitleIndex = 0;

// Function to animate hero title with typing effect
function animateHeroTitle() {
    const currentTitle = titles[currentTitleIndex];
    let charIndex = 0;
    heroTitle.textContent = '';
    
    const typingInterval = setInterval(() => {
        if (charIndex < currentTitle.length) {
            heroTitle.textContent += currentTitle[charIndex];
            charIndex++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

// Start the animation after page load
setTimeout(() => {
    animateHeroTitle();
    
    // Repeat animations every 5 seconds
    setInterval(() => {
        // Update title index and animate
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        animateHeroTitle();
    }, 5000);
}, 500); // Wait 0.5 seconds before starting

// ===== Scroll Animations for Hero and About Sections =====
const heroSection = document.querySelector('.hero');
const aboutSection = document.querySelector('.about');

function handleScrollAnimations() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Fade out hero when scrolling down
    if (scrollPosition > windowHeight * 0.3) {
        heroSection.classList.add('fade-out-section');
    } else {
        heroSection.classList.remove('fade-out-section');
    }
    
    // Fade in about when it comes into view
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    if (aboutPosition < windowHeight * 0.75) {
        aboutSection.classList.add('fade-in-section');
    }
}

// Run on scroll
window.addEventListener('scroll', handleScrollAnimations);

// Run on page load
window.addEventListener('load', () => {
    handleScrollAnimations();
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Active Navigation Link =====
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ===== Smooth Scroll for Navigation Links =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
    '.timeline-item, .experience-item, .skill-category, .contact-card'
);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Skill Progress Bars Animation =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = progress + '%';
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== Hero Section Typing Effect =====
const heroTitleElement = document.querySelector('.hero-title');
if (heroTitleElement) {
    const originalText = heroTitleElement.innerHTML;
    heroTitleElement.style.opacity = '0';
    
    setTimeout(() => {
        heroTitleElement.style.opacity = '1';
        heroTitleElement.style.animation = 'fadeInUp 1s ease';
    }, 100);
}

// ===== Dynamic Year in Footer =====
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-copyright p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} Irumva. All rights reserved.`;
}

// ===== Scroll to Top Button (Optional Enhancement) =====
const createScrollToTopBtn = () => {
    const btn = document.createElement('button');
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
    `;
    btn.className = 'scroll-to-top';
    btn.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
            z-index: 999;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
            .scroll-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(btn);
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
};

createScrollToTopBtn();


// ===== Experience Items Staggered Animation =====
const experienceItems = document.querySelectorAll('.experience-item');

experienceItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// ===== Timeline Items Animation =====
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// ===== Parallax Effect for Hero Section =====
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Contact Cards Animation =====
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    card.classList.add('fade-in');
});


// ===== Contact Links Alert (for demo) =====
const contactMethod = document.querySelectorAll('.contact-card');

contactMethod.forEach(card => {
    const href = card.getAttribute('href');
    if (href === 'mailto:your.email@example.com') {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Please update the email address in index.html with your actual email.');
        });
    }
    if (href.includes('linkedin.com/in/yourprofile') || href.includes('github.com/yourusername')) {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Please update the social media links in index.html with your actual profiles.');
        });
    }
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Add Active State to Current Nav Link on Load =====
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
});

// ===== Animated Skills with Typing Effect (Like Names) =====
const skillsData = {
    backend: ['DJANGO', 'DJANGO REST', 'FASTAPI', 'NODE.JS', 'PYTHON'],
    frontend: ['HTML/CSS', 'JAVASCRIPT', 'REACT.JS', 'BOOTSTRAP'],
    mobile: ['FLUTTER', 'DART']
};

const skillIndices = {
    backend: 0,
    frontend: 0,
    mobile: 0
};

let skillTypingIntervals = {};

// Typing animation for skills (exactly like names)
function typeSkill(category) {
    const element = document.getElementById(`skill-${category}`);
    if (!element) return;
    
    const skills = skillsData[category];
    const currentSkill = skills[skillIndices[category]];
    
    let charIndex = 0;
    element.textContent = '';
    
    // Clear any existing interval
    if (skillTypingIntervals[category]) {
        clearInterval(skillTypingIntervals[category]);
    }
    
    skillTypingIntervals[category] = setInterval(() => {
        if (charIndex < currentSkill.length) {
            element.textContent += currentSkill[charIndex];
            charIndex++;
        } else {
            clearInterval(skillTypingIntervals[category]);
        }
    }, 80); // Typing speed
}

// Rotate to next skill
function rotateSkill(category) {
    const skills = skillsData[category];
    
    // Update index
    skillIndices[category] = (skillIndices[category] + 1) % skills.length;
    
    // Type the new skill
    typeSkill(category);
}

// Initialize all skills with typing animation
function initializeSkills() {
    Object.keys(skillsData).forEach((category, index) => {
        setTimeout(() => {
            typeSkill(category);
        }, index * 400); // Stagger initial typing
    });
}

// Start rotation for all categories with different intervals
function startSkillsRotation() {
    // Backend - every 4 seconds
    setInterval(() => rotateSkill('backend'), 4000);
    
    // Frontend - every 4.3 seconds (offset)
    setTimeout(() => {
        setInterval(() => rotateSkill('frontend'), 4300);
    }, 800);
    
    // Mobile - every 4.6 seconds (offset)
    setTimeout(() => {
        setInterval(() => rotateSkill('mobile'), 4600);
    }, 1600);
}

// Start animations after page load
setTimeout(() => {
    initializeSkills();
    setTimeout(startSkillsRotation, 3000);
}, 1500);

// ===== Certificate Lightbox Functionality =====
const certificateLightbox = document.getElementById('certificateLightbox');
const certificateImage = document.getElementById('certificateImage');
const certificateTitle = document.getElementById('certificateTitle');
const closeLightbox = document.getElementById('closeLightbox');

// Certificate data mapping with images
const certificates = {
    'ml-cert': {
        image: 'images/Certificates/machineLearning_1.jpg',
        title: 'Machine Learning Certificate'
    },
    'embedded-cert': {
        image: 'images/Certificates/embeddedsystem_3.jpg',
        title: 'Embedded Systems Certificate'
    },
    'datascience-cert': {
        image: 'images/Certificates/DataScience_2.jpg',
        title: 'Data Science Certificate - 1st Place Hackathon Winner'
    }
};

// Open lightbox when certificate badge is clicked
document.querySelectorAll('.certificate-badge').forEach(badge => {
    badge.addEventListener('click', function() {
        const certId = this.getAttribute('data-cert');
        if (certificates[certId]) {
            certificateImage.src = certificates[certId].image;
            certificateTitle.textContent = certificates[certId].title;
            certificateLightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

// Close lightbox
function closeCertificateLightbox() {
    certificateLightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

closeLightbox.addEventListener('click', closeCertificateLightbox);

// Close on background click
certificateLightbox.addEventListener('click', function(e) {
    if (e.target === certificateLightbox) {
        closeCertificateLightbox();
    }
});

// Close on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && certificateLightbox.classList.contains('active')) {
        closeCertificateLightbox();
    }
});

// ===== CV Lightbox Functionality =====
const cvLightbox = document.getElementById('cvLightbox');
const viewCvBtn = document.getElementById('viewCvBtn');
const closeCvLightbox = document.getElementById('closeCvLightbox');

// Open CV lightbox
viewCvBtn.addEventListener('click', function() {
    cvLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close CV lightbox
function closeCvModal() {
    cvLightbox.classList.remove('active');
    document.body.style.overflow = '';
}

closeCvLightbox.addEventListener('click', closeCvModal);

// Close on background click
cvLightbox.addEventListener('click', function(e) {
    if (e.target === cvLightbox) {
        closeCvModal();
    }
});

// Close on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cvLightbox.classList.contains('active')) {
        closeCvModal();
    }
});

// ===== Project Gallery Functionality =====
const projectGalleryLightbox = document.getElementById('projectGalleryLightbox');
const galleryMainImage = document.getElementById('galleryMainImage');
const galleryThumbnails = document.getElementById('galleryThumbnails');
const closeGalleryLightbox = document.getElementById('closeGalleryLightbox');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');

const projectImages = {
    'event-ticket': [
        'images/Flutter_images/1.jpg',
        'images/Flutter_images/2.jpg',
        'images/Flutter_images/3.jpg',
        'images/Flutter_images/4.jpg',
        'images/Flutter_images/5.jpg',
        'images/Flutter_images/6.jpg'
    ]
};

let currentProject = '';
let currentImageIndex = 0;

// Open gallery from project images
document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', function() {
        currentProject = this.getAttribute('data-project');
        currentImageIndex = parseInt(this.getAttribute('data-index'));
        openGallery();
    });
});

function openGallery() {
    const images = projectImages[currentProject];
    if (!images) return;
    
    // Set main image
    galleryMainImage.src = images[currentImageIndex];
    
    // Create thumbnails
    galleryThumbnails.innerHTML = '';
    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.classList.add(index === currentImageIndex ? 'active' : '');
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateGallery();
        });
        galleryThumbnails.appendChild(thumb);
    });
    
    projectGalleryLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateGallery() {
    const images = projectImages[currentProject];
    galleryMainImage.src = images[currentImageIndex];
    
    // Update active thumbnail
    const thumbs = galleryThumbnails.querySelectorAll('img');
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Navigation
galleryPrev.addEventListener('click', () => {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery();
});

galleryNext.addEventListener('click', () => {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
});

// Close gallery
function closeGallery() {
    projectGalleryLightbox.classList.remove('active');
    document.body.style.overflow = '';
}

closeGalleryLightbox.addEventListener('click', closeGallery);

projectGalleryLightbox.addEventListener('click', function(e) {
    if (e.target === projectGalleryLightbox) {
        closeGallery();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (projectGalleryLightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeGallery();
        } else if (e.key === 'ArrowLeft') {
            galleryPrev.click();
        } else if (e.key === 'ArrowRight') {
            galleryNext.click();
        }
    }
});

// ===== About Me Lightbox Functionality =====
const aboutLightbox = document.getElementById('aboutLightbox');
const viewAboutBtn = document.getElementById('viewAboutBtn');
const learnMoreBtn = document.getElementById('learnMoreBtn');
const closeAboutLightbox = document.getElementById('closeAboutLightbox');

// Open About lightbox from Hero button
if (viewAboutBtn) {
    viewAboutBtn.addEventListener('click', function() {
        aboutLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Open About lightbox from About section button
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function() {
        aboutLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close About lightbox
function closeAboutModal() {
    aboutLightbox.classList.remove('active');
    document.body.style.overflow = '';
}

closeAboutLightbox.addEventListener('click', closeAboutModal);

aboutLightbox.addEventListener('click', function(e) {
    if (e.target === aboutLightbox) {
        closeAboutModal();
    }
});

// Close on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && aboutLightbox.classList.contains('active')) {
        closeAboutModal();
    }
});

// ===== Console Welcome Message =====
console.log('%c👨‍💻 Welcome to My Portfolio!', 'font-size: 20px; color: #06b6d4; font-weight: bold;');
console.log('%cFeel free to explore the code!', 'font-size: 14px; color: #64748b;');
console.log('%c🔗 Let\'s connect!', 'font-size: 14px; color: #06b6d4;');

// ===== Detect reduced motion preference =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

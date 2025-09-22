// Modern Academic Portfolio JavaScript
// Environmental Analytical Chemistry Theme

document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (systemPrefersDark) {
        html.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    } else {
        html.setAttribute('data-theme', 'light');
        updateThemeIcon('light');
    }
    
    // Theme toggle functionality with swipe animation
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Create swipe animation
            createThemeSwipe(() => {
                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcon(newTheme);
            });
        });
    }
    
    // Create theme swipe animation
    function createThemeSwipe(callback) {
        // Create transition container
        const transitionContainer = document.createElement('div');
        transitionContainer.className = 'theme-transition';
        
        // Create swipe element
        const swipeElement = document.createElement('div');
        swipeElement.className = 'theme-swipe';
        
        // Add to DOM
        transitionContainer.appendChild(swipeElement);
        document.body.appendChild(transitionContainer);
        
        // Start animation
        requestAnimationFrame(() => {
            swipeElement.style.animation = 'swipeTransition 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        });
        
        // Execute callback at peak of animation
        setTimeout(() => {
            if (callback) callback();
        }, 150);
        
        // Clean up after animation
        setTimeout(() => {
            if (transitionContainer.parentNode) {
                transitionContainer.parentNode.removeChild(transitionContainer);
            }
        }, 300);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCategories = document.querySelectorAll('.project-category');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide project categories
            projectCategories.forEach(category => {
                category.classList.remove('active');
                if (category.id === `${filter}-content`) {
                    category.classList.add('active');
                }
            });
        });
    });
    
    // Typing Animation
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Environmental Analytical Chemist',
        'RDM Enthusiast',
        'Open {Science, Source} Advocate',
        'Building SciTrace for Research Data Management'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(typeText, typingSpeed);
    }

    // Start typing animation
    if (typingText) {
        setTimeout(typeText, 1000);
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu a');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    let ticking = false;
    let isNavbarHidden = false;
    let scrollTimeout;

    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = scrollTop - lastScrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Keep navbar always visible - disabled hiding behavior
        navbar.style.transform = 'translateY(0)';
        isNavbarHidden = false;
        
        lastScrollTop = scrollTop;
        ticking = false;
        
        // Navbar always visible - no timeout needed
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Ensure navbar is visible on page load
    window.addEventListener('load', function() {
        navbar.style.transform = 'translateY(0)';
        isNavbarHidden = false;
    });
    
    // Reset navbar state on resize
    window.addEventListener('resize', function() {
        navbar.style.transform = 'translateY(0)';
        isNavbarHidden = false;
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.research-card, .publication-card, .timeline-item, .contact-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }

    // Map interaction handling
    const mapWrapper = document.querySelector('.map-wrapper');
    const googleMap = document.getElementById('google-map');
    
    if (mapWrapper && googleMap) {
        // Add click handler to open full map in new tab
        mapWrapper.addEventListener('click', function() {
            window.open('https://www.google.com/maps/place/Helmholtz+Centre+for+Environmental+Research+-+UFZ/@51.35247,12.43124,17z', '_blank');
        });
        
        // Add hover effect
        mapWrapper.style.cursor = 'pointer';
        mapWrapper.title = 'Click to open in Google Maps';
        
        // Function to update map theme
        function updateMapTheme(theme) {
            // UFZ Leipzig coordinates: 51.35247, 12.43124
            const baseUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.234567890123!2d12.43124!3d51.35247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f8a1b2c3d4e5%3A0x6f7g8h9i0j1k2l3m!2sHelmholtz%20Centre%20for%20Environmental%20Research%20-%20UFZ!5e0!3m2!1sen!2sde!4v1634567890123!5m2!1sen!2sde';
            
            if (theme === 'dark') {
                // Dark theme map with custom styling
                googleMap.src = baseUrl + '&style=feature:all|element:geometry|color:0x212121&style=feature:all|element:labels.text.fill|color:0x757575&style=feature:all|element:labels.text.stroke|color:0x212121&style=feature:all|element:geometry.fill|color:0x2b2b2b&style=feature:administrative|element:geometry|color:0x757575&style=feature:administrative.country|element:labels.text.fill|color:0x9e9e9e&style=feature:administrative.land_parcel|element:labels.text.fill|color:0xbdbdbd&style=feature:poi|element:labels.text.fill|color:0x757575&style=feature:poi.park|element:geometry|color:0x181818&style=feature:poi.park|element:labels.text.fill|color:0x616161&style=feature:poi.park|element:labels.text.stroke|color:0x1b1b1b&style=feature:road|element:geometry.fill|color:0x2c2c2c&style=feature:road|element:labels.text.fill|color:0x8a8a8a&style=feature:road.arterial|element:geometry|color:0x373737&style=feature:road.highway|element:geometry|color:0x3c3c3c&style=feature:road.highway.controlled_access|element:geometry|color:0x4e4e4e&style=feature:road.local|element:labels.text.fill|color:0x808080&style=feature:transit|element:labels.text.fill|color:0x757575&style=feature:water|element:geometry|color:0x000000&style=feature:water|element:labels.text.fill|color:0x3d3d3d';
            } else {
                // Light theme map (default)
                googleMap.src = baseUrl;
            }
        }
        
        // Update map theme on theme change
        function handleThemeChange() {
            const currentTheme = html.getAttribute('data-theme');
            updateMapTheme(currentTheme);
        }
        
        // Listen for theme changes
        const themeObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    handleThemeChange();
                }
            });
        });
        
        themeObserver.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
        
        // Set initial theme
        const initialTheme = html.getAttribute('data-theme');
        updateMapTheme(initialTheme);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#0ea5e9'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Copy email to clipboard
    const emailElement = document.querySelector('.contact-details p');
    if (emailElement && emailElement.textContent.includes('@')) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy email';
        
        emailElement.addEventListener('click', function() {
            const email = this.textContent;
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy email', 'error');
            });
        });
    }

    // Research card hover effects
    const researchCards = document.querySelectorAll('.research-card');
    researchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Publication card interactions
    const publicationCards = document.querySelectorAll('.publication-card');
    publicationCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Start animation when stats come into view
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        
        statsObserver.observe(stat);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .nav-menu a.active {
            color: var(--primary-color);
            background: var(--sky-light);
        }
        
        .nav-menu a.active::after {
            width: 80%;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                transition: transform 0.3s ease;
            }
            
            .nav-menu.active {
                transform: translateY(0);
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);

    // Hero Video Management
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        // Ensure video starts playing
        heroVideo.addEventListener('loadeddata', function() {
            heroVideo.play();
        });
        
        // Handle video load and play
        heroVideo.addEventListener('canplay', function() {
            heroVideo.play();
        });
        
        // When video ends, restart from beginning (no reverse playback)
        heroVideo.addEventListener('ended', function() {
            heroVideo.currentTime = 0;
            heroVideo.play();
        });
    }

    // Scroll Arrow Functionality
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const skillsSection = document.querySelector('#skills');
            if (skillsSection) {
                const offsetTop = skillsSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Initialize
    updateActiveNav();
});

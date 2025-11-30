// Close banner functionality
document.addEventListener('DOMContentLoaded', function() {
    const bannerClose = document.querySelector('.banner-close');
    const topBanner = document.querySelector('.top-banner');
    
    if (bannerClose) {
        bannerClose.addEventListener('click', function() {
            topBanner.style.display = 'none';
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Smooth scroll to section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Search form submission
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const inputs = this.querySelectorAll('input');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value) {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                alert('Thank you for your inquiry! We will contact you shortly.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Call buttons functionality
    const callButtons = document.querySelectorAll('.call-btn');
    
    callButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'tel:+919205723724';
        });
    });

    // Contact button functionality
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                alert('Contact us at:\n+91-9205723724\n+91-9899826139\ninfo@charterflightsaviation.com');
            }
        });
    });

    // Animate service cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s, transform 0.5s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Online booking button
    const quoteBtn = document.querySelector('.quote-btn');
    
    if (quoteBtn) {
        quoteBtn.addEventListener('click', function() {
            const searchWidget = document.querySelector('.search-widget');
            if (searchWidget) {
                searchWidget.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Highlight the search widget
                searchWidget.style.boxShadow = '0 0 20px rgba(0, 102, 204, 0.5)';
                setTimeout(() => {
                    searchWidget.style.transition = 'box-shadow 1s';
                    searchWidget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }, 2000);
            }
        });
    }

    // CTA button functionality
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const searchWidget = document.querySelector('.search-widget');
            if (searchWidget) {
                searchWidget.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    }

    // Add hover effect to destination items
    const destinationItems = document.querySelectorAll('.destination-item');
    
    destinationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s';
            this.style.backgroundColor = '#e6f2ff';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.backgroundColor = '#f9f9f9';
        });
    });

    // Dynamic year in footer
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const currentYear = new Date().getFullYear();
        footerBottom.innerHTML = `&copy; ${currentYear} Charter Flights Aviation. All rights reserved.`;
    }

    // Sticky navigation highlight on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s';
            document.body.style.opacity = '1';
        }, 100);
    });

    // Service card click to show details
    const serviceCards2 = document.querySelectorAll('.service-card');
    
    serviceCards2.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            const servicePrice = this.querySelector('.price').textContent;
            
            alert(`Service: ${serviceName}
Price: ${servicePrice}

For booking, please contact us:
+91-9205723724
+91-9899826139`);
        });
        
        // Add cursor pointer
        card.style.cursor = 'pointer';
    });

    // Airport card hover effect
    const airportCards = document.querySelectorAll('.airport-card');
    
    airportCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Best service detail links
    const detailLinks = document.querySelectorAll('.best-service-card a');
    
    detailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.closest('.best-service-card').querySelector('h3').textContent;
            
            alert(`${serviceName}

For more details and booking, please contact:
+91-9205723724
+91-9899826139

Email: info@charterflightsaviation.com`);
        });
    });

    // Mobile menu toggle (for future enhancement)
    const createMobileMenuToggle = function() {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('.main-nav ul');
            
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggleButton = document.createElement('button');
                toggleButton.className = 'mobile-menu-toggle';
                toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
                toggleButton.style.cssText = `
                    background: #003d7a;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    display: block;
                    width: 100%;
                    text-align: left;
                    font-size: 20px;
                `;
                
                nav.parentNode.insertBefore(toggleButton, nav);
                
                nav.style.display = 'none';
                
                toggleButton.addEventListener('click', function() {
                    if (nav.style.display === 'none') {
                        nav.style.display = 'flex';
                    } else {
                        nav.style.display = 'none';
                    }
                });
            }
        }
    };

    // Initialize mobile menu
    createMobileMenuToggle();
    
    // Re-check on window resize
    window.addEventListener('resize', function() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.main-nav ul');
        
        if (window.innerWidth > 768) {
            if (toggle) {
                toggle.remove();
            }
            if (nav) {
                nav.style.display = 'flex';
            }
        } else {
            createMobileMenuToggle();
        }
    });
});
/**
 * Animation Controller Module
 * Handles scroll animations, hover effects, and interactive animations
 */

class AnimationController {
    constructor() {
        this.observers = [];
        this.init();
    }
    
    /**
     * Initialize animations
     */
    init() {
        this.initPageLoadAnimations();
        this.initScrollAnimations();
        this.initHoverEffects();
        this.initClickAnimations();
    }
    
    /**
     * Initialize page load animations
     * Apply fade-in animations to main content sections on page load
     */
    initPageLoadAnimations() {
        // Add fade-in animation to main sections on page load
        const mainSections = document.querySelectorAll('.page-section.active .hero-section, .page-section.active .bio-hero');
        mainSections.forEach((section, index) => {
            this.fadeIn(section, index * 100);
        });
        
        // Add fade-in to navigation
        const nav = document.querySelector('.navigation');
        if (nav) {
            this.fadeIn(nav, 0);
        }
    }
    
    /**
     * Initialize scroll-based animations using Intersection Observer
     */
    initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);
        
        // Observe elements with scroll-reveal class
        this.observeElements('.scroll-reveal', observer);
        
        this.observers.push(observer);
        
        // Initialize card entrance animations
        this.initCardEntranceAnimations();
    }
    
    /**
     * Initialize card entrance animations with staggered timing
     */
    initCardEntranceAnimations() {
        const cardObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add card entrance animation
                    entry.target.classList.add('card-enter');
                    // Stop observing once animated
                    cardObserver.unobserve(entry.target);
                }
            });
        }, cardObserverOptions);
        
        // Select all card elements
        const cardSelectors = [
            '.survey-card',
            '.contact-card',
            '.info-card',
            '.expertise-item',
            '.bio-section',
            '.campus-item',
            '.tool-card'
        ];
        
        cardSelectors.forEach(selector => {
            const cards = document.querySelectorAll(selector);
            cards.forEach((card, index) => {
                // Add staggered delay class
                const staggerClass = `card-stagger-${(index % 8) + 1}`;
                card.classList.add(staggerClass);
                
                // Observe the card
                cardObserver.observe(card);
            });
        });
        
        this.observers.push(cardObserver);
    }
    
    /**
     * Initialize hover effects
     */
    initHoverEffects() {
        // Hover effects are primarily handled by CSS
        // This method optimizes performance for hover animations
        
        // Add will-change optimization for hover elements
        const hoverElements = document.querySelectorAll('.hover-lift, .hover-scale, .card, .btn, .survey-card, .contact-card, .info-card, .tool-card');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.willChange = 'transform, box-shadow';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.willChange = 'auto';
            });
        });
        
        // Add hover effects to interactive links
        const interactiveLinks = document.querySelectorAll('.social-link, .university-link, .expertise-item');
        interactiveLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.willChange = 'transform';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.willChange = 'auto';
            });
        });
    }
    
    /**
     * Initialize click animations
     */
    initClickAnimations() {
        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (!button.classList.contains('btn-ripple')) {
                button.classList.add('btn-ripple');
            }
            
            // Add click feedback
            button.addEventListener('click', (e) => {
                // Don't add animation if button is disabled
                if (button.disabled) return;
                
                // Add active state briefly
                button.style.transform = 'translateY(0) scale(0.98)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);
            });
        });
        
        // Add click feedback to cards
        const clickableCards = document.querySelectorAll('.survey-card, .contact-card');
        clickableCards.forEach(card => {
            card.addEventListener('click', () => {
                card.style.transform = 'translateY(-2px) scale(1.01)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
        
        // Add click feedback to links
        const interactiveLinks = document.querySelectorAll('.social-link, .university-link');
        interactiveLinks.forEach(link => {
            link.addEventListener('click', () => {
                link.style.transform = 'translateX(6px) scale(0.98)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 150);
            });
        });
    }
    
    /**
     * Observe elements with a given selector
     * @param {string} selector - CSS selector
     * @param {IntersectionObserver} observer - Observer instance
     */
    observeElements(selector, observer) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            observer.observe(element);
        });
    }
    
    /**
     * Add fade-in animation to element
     * @param {HTMLElement} element - Element to animate
     * @param {number} delay - Animation delay in ms
     */
    fadeIn(element, delay = 0) {
        if (!element) return;
        
        setTimeout(() => {
            element.classList.add('fade-in');
        }, delay);
    }
    
    /**
     * Add slide-in animation to element
     * @param {HTMLElement} element - Element to animate
     * @param {string} direction - 'left' or 'right'
     * @param {number} delay - Animation delay in ms
     */
    slideIn(element, direction = 'left', delay = 0) {
        if (!element) return;
        
        setTimeout(() => {
            element.classList.add(`slide-in-${direction}`);
        }, delay);
    }
    
    /**
     * Add scale-in animation to element
     * @param {HTMLElement} element - Element to animate
     * @param {number} delay - Animation delay in ms
     */
    scaleIn(element, delay = 0) {
        if (!element) return;
        
        setTimeout(() => {
            element.classList.add('scale-in');
        }, delay);
    }
    
    /**
     * Trigger shake animation (for errors)
     * @param {HTMLElement} element - Element to shake
     */
    shake(element) {
        if (!element) return;
        
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 500);
    }
    
    /**
     * Reinitialize animations for dynamically loaded content
     * Call this after adding new content to the page
     */
    reinitialize() {
        this.initHoverEffects();
        this.initClickAnimations();
        
        // Re-observe new scroll-reveal elements
        const newScrollElements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
        if (newScrollElements.length > 0 && this.observers.length > 0) {
            const observer = this.observers[0];
            newScrollElements.forEach(element => {
                observer.observe(element);
            });
        }
        
        // Re-initialize card entrance animations for new cards
        this.reinitializeCardAnimations();
    }
    
    /**
     * Reinitialize card entrance animations for dynamically loaded cards
     */
    reinitializeCardAnimations() {
        const cardObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-enter');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, cardObserverOptions);
        
        // Select all card elements that haven't been animated yet
        const cardSelectors = [
            '.survey-card:not(.card-enter)',
            '.contact-card:not(.card-enter)',
            '.info-card:not(.card-enter)',
            '.expertise-item:not(.card-enter)',
            '.bio-section:not(.card-enter)',
            '.campus-item:not(.card-enter)',
            '.tool-card:not(.card-enter)'
        ];
        
        cardSelectors.forEach(selector => {
            const cards = document.querySelectorAll(selector);
            cards.forEach((card, index) => {
                // Add staggered delay class if not already present
                if (!card.className.match(/card-stagger-\d/)) {
                    const staggerClass = `card-stagger-${(index % 8) + 1}`;
                    card.classList.add(staggerClass);
                }
                
                // Observe the card
                cardObserver.observe(card);
            });
        });
        
        this.observers.push(cardObserver);
    }
    
    /**
     * Cleanup observers
     */
    destroy() {
        this.observers.forEach(observer => {
            observer.disconnect();
        });
        this.observers = [];
    }
}

// Initialize animation controller when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.animationController = new AnimationController();
});

export default AnimationController;

/**
 * Navigation Module
 * Handles page navigation, routing, and mobile menu
 */

import { getElement, addListener } from './utils.js';

class Navigation {
    constructor(navElement) {
        this.navElement = navElement;
        this.navLinks = [];
        this.mobileMenuToggle = null;
        this.navMenu = null;
        this.currentPage = 'anasayfa';
        
        this.init();
    }
    
    /**
     * Initialize navigation
     */
    init() {
        this.navLinks = Array.from(this.navElement.querySelectorAll('.nav-link'));
        this.mobileMenuToggle = this.navElement.querySelector('.mobile-menu-toggle');
        this.navMenu = this.navElement.querySelector('.nav-menu');
        
        this.attachEventListeners();
        this.handleInitialRoute();
    }
    
    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Navigation link clicks
        this.navLinks.forEach(link => {
            addListener(link, 'click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const pageId = href.replace('#', '');
                this.navigateTo(pageId);
                
                // Close mobile menu after navigation
                if (window.innerWidth < 768) {
                    this.closeMobileMenu();
                }
            });
        });
        
        // Mobile menu toggle
        if (this.mobileMenuToggle) {
            addListener(this.mobileMenuToggle, 'click', (e) => {
                e.stopPropagation();
                this.toggleMobileMenu();
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu && this.navMenu.classList.contains('active')) {
                const isClickInsideNav = this.navElement.contains(e.target);
                if (!isClickInsideNav) {
                    this.closeMobileMenu();
                }
            }
        });
        
        // Close mobile menu on window resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
        
        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            this.handleHashChange();
        });
    }
    
    /**
     * Navigate to a specific page
     * @param {string} pageId - Page identifier
     */
    navigateTo(pageId) {
        // Hide all sections
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = getElement(pageId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentPage = pageId;
            this.setActivePage(pageId);
            
            // Update URL hash
            window.location.hash = pageId;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    /**
     * Set active state on navigation link
     * @param {string} pageId - Page identifier
     */
    setActivePage(pageId) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${pageId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    /**
     * Get current page
     * @returns {string} Current page identifier
     */
    getCurrentPage() {
        return this.currentPage;
    }
    
    /**
     * Toggle mobile menu
     */
    toggleMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.toggle('active');
            const isExpanded = this.navMenu.classList.contains('active');
            this.mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        }
    }
    
    /**
     * Close mobile menu
     */
    closeMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.remove('active');
            this.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }
    
    /**
     * Handle initial route on page load
     */
    handleInitialRoute() {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            this.navigateTo(hash);
        } else {
            this.navigateTo('anasayfa');
        }
    }
    
    /**
     * Handle hash change events
     */
    handleHashChange() {
        const hash = window.location.hash.replace('#', '');
        if (hash && hash !== this.currentPage) {
            this.navigateTo(hash);
        }
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const navElement = getElement('main-navigation');
    if (navElement) {
        window.navigationInstance = new Navigation(navElement);
    }
});

export default Navigation;

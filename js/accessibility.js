/**
 * Accessibility Module
 * Keyboard Navigation, Focus Management, ARIA Support
 */

class AccessibilityManager {
    constructor() {
        this.keyboardMode = false;
        this.focusableElements = [];
        this.init();
    }
    
    /**
     * Initialize accessibility features
     */
    init() {
        this.detectKeyboardNavigation();
        this.setupSkipToMain();
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupARIALabels();
        this.setupEscapeKeyHandling();
        this.makeCardsKeyboardAccessible();
    }
    
    /**
     * Detect keyboard navigation mode
     */
    detectKeyboardNavigation() {
        // Detect Tab key usage
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                this.keyboardMode = true;
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        // Detect mouse usage
        document.addEventListener('mousedown', () => {
            this.keyboardMode = false;
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    /**
     * Setup skip to main content link
     */
    setupSkipToMain() {
        // Check if skip link already exists
        if (document.querySelector('.skip-to-main')) {
            return;
        }
        
        // Create skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-to-main';
        skipLink.textContent = 'Ana içeriğe atla';
        
        // Add ARIA label
        skipLink.setAttribute('aria-label', 'Ana içeriğe atla');
        
        // Insert at beginning of body
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Handle click
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    /**
     * Setup keyboard navigation for interactive elements
     */
    setupKeyboardNavigation() {
        // Handle Enter key on cards
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const target = e.target;
                
                // Survey cards
                if (target.classList.contains('survey-card')) {
                    e.preventDefault();
                    const button = target.querySelector('.survey-select-btn');
                    if (button) {
                        button.click();
                    }
                }
                
                // Navigation links
                if (target.classList.contains('nav-link')) {
                    e.preventDefault();
                    target.click();
                }
            }
        });
    }
    
    /**
     * Setup focus management for modals/popups
     */
    setupFocusManagement() {
        // Store last focused element before opening modal
        this.lastFocusedElement = null;
        
        // Observe popup creation
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        // Check if it's a popup
                        if (node.classList && node.classList.contains('popup')) {
                            this.handlePopupOpen(node);
                        }
                        
                        // Check if it's a backdrop
                        if (node.classList && node.classList.contains('popup-backdrop')) {
                            this.handleBackdropOpen(node);
                        }
                    }
                });
                
                mutation.removedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        // Check if popup was removed
                        if (node.classList && node.classList.contains('popup')) {
                            this.handlePopupClose();
                        }
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: false
        });
    }
    
    /**
     * Handle popup open
     * @param {HTMLElement} popup - Popup element
     */
    handlePopupOpen(popup) {
        // Store last focused element
        this.lastFocusedElement = document.activeElement;
        
        // Set ARIA attributes
        popup.setAttribute('role', 'dialog');
        popup.setAttribute('aria-modal', 'true');
        
        // Set aria-labelledby if title exists
        const title = popup.querySelector('.popup-title');
        if (title) {
            const titleId = 'popup-title-' + Date.now();
            title.id = titleId;
            popup.setAttribute('aria-labelledby', titleId);
        }
        
        // Set aria-describedby if message exists
        const message = popup.querySelector('.popup-message');
        if (message) {
            const messageId = 'popup-message-' + Date.now();
            message.id = messageId;
            popup.setAttribute('aria-describedby', messageId);
        }
        
        // Focus first focusable element in popup
        setTimeout(() => {
            const focusableElements = this.getFocusableElements(popup);
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        }, 100);
        
        // Trap focus within popup
        this.trapFocus(popup);
    }
    
    /**
     * Handle backdrop open
     * @param {HTMLElement} backdrop - Backdrop element
     */
    handleBackdropOpen(backdrop) {
        backdrop.setAttribute('aria-hidden', 'false');
    }
    
    /**
     * Handle popup close
     */
    handlePopupClose() {
        // Restore focus to last focused element
        if (this.lastFocusedElement) {
            this.lastFocusedElement.focus();
            this.lastFocusedElement = null;
        }
    }
    
    /**
     * Trap focus within element
     * @param {HTMLElement} element - Element to trap focus within
     */
    trapFocus(element) {
        const focusableElements = this.getFocusableElements(element);
        
        if (focusableElements.length === 0) return;
        
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        const handleTabKey = (e) => {
            if (e.key !== 'Tab') return;
            
            // If popup is removed, remove listener
            if (!document.body.contains(element)) {
                document.removeEventListener('keydown', handleTabKey);
                return;
            }
            
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        };
        
        document.addEventListener('keydown', handleTabKey);
    }
    
    /**
     * Get all focusable elements within a container
     * @param {HTMLElement} container - Container element
     * @returns {Array} Array of focusable elements
     */
    getFocusableElements(container) {
        const selector = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
        return Array.from(container.querySelectorAll(selector));
    }
    
    /**
     * Setup ARIA labels for elements
     */
    setupARIALabels() {
        // Add ARIA labels to icon buttons
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenuToggle && !mobileMenuToggle.hasAttribute('aria-label')) {
            mobileMenuToggle.setAttribute('aria-label', 'Menüyü aç/kapat');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
        
        // Add ARIA labels to form fields
        this.setupFormARIA();
        
        // Add ARIA labels to navigation
        const nav = document.querySelector('nav');
        if (nav && !nav.hasAttribute('aria-label')) {
            nav.setAttribute('aria-label', 'Ana navigasyon');
        }
        
        // Add ARIA labels to sections
        this.setupSectionARIA();
        
        // Add ARIA live region for dynamic content
        this.setupLiveRegions();
    }
    
    /**
     * Setup ARIA for form elements
     */
    setupFormARIA() {
        // Observe form creation
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.tagName === 'FORM') {
                        this.enhanceFormAccessibility(node);
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // Enhance existing forms
        document.querySelectorAll('form').forEach(form => {
            this.enhanceFormAccessibility(form);
        });
    }
    
    /**
     * Enhance form accessibility
     * @param {HTMLElement} form - Form element
     */
    enhanceFormAccessibility(form) {
        // Add aria-required to required fields
        form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
            field.setAttribute('aria-required', 'true');
        });
        
        // Link error messages to fields
        form.querySelectorAll('.form-error').forEach(errorElement => {
            const fieldId = errorElement.id.replace('-error', '');
            const field = form.querySelector(`#${fieldId}`);
            if (field) {
                field.setAttribute('aria-describedby', errorElement.id);
                
                // Set aria-invalid based on error presence
                const observer = new MutationObserver(() => {
                    const hasError = errorElement.textContent.trim().length > 0;
                    field.setAttribute('aria-invalid', hasError ? 'true' : 'false');
                });
                
                observer.observe(errorElement, {
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
        });
        
        // Add aria-describedby for KVKK consent
        const kvkkCheckbox = form.querySelector('#kvkkConsent');
        if (kvkkCheckbox) {
            const label = form.querySelector('#kvkk-consent-label');
            if (label && !label.id) {
                label.id = 'kvkk-consent-label';
                kvkkCheckbox.setAttribute('aria-describedby', 'kvkk-consent-label');
            }
        }
    }
    
    /**
     * Setup ARIA for sections
     */
    setupSectionARIA() {
        // Add aria-labelledby to sections
        document.querySelectorAll('.page-section').forEach(section => {
            const heading = section.querySelector('h2');
            if (heading && !heading.id) {
                const sectionId = section.id || 'section-' + Date.now();
                const headingId = sectionId + '-heading';
                heading.id = headingId;
                section.setAttribute('aria-labelledby', headingId);
            }
        });
    }
    
    /**
     * Setup ARIA live regions for dynamic content
     */
    setupLiveRegions() {
        // Create a live region for status messages
        if (!document.getElementById('aria-live-region')) {
            const liveRegion = document.createElement('div');
            liveRegion.id = 'aria-live-region';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            document.body.appendChild(liveRegion);
        }
    }
    
    /**
     * Announce message to screen readers
     * @param {string} message - Message to announce
     * @param {string} priority - 'polite' or 'assertive'
     */
    announce(message, priority = 'polite') {
        const liveRegion = document.getElementById('aria-live-region');
        if (liveRegion) {
            liveRegion.setAttribute('aria-live', priority);
            liveRegion.textContent = message;
            
            // Clear after announcement
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }
    
    /**
     * Setup Escape key handling
     */
    setupEscapeKeyHandling() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                // Close popup if open
                const popup = document.querySelector('.popup');
                if (popup) {
                    const closeButton = popup.querySelector('.popup-close-btn');
                    if (closeButton) {
                        closeButton.click();
                    }
                }
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.nav-menu.active');
                if (mobileMenu) {
                    const toggleButton = document.querySelector('.mobile-menu-toggle');
                    if (toggleButton) {
                        toggleButton.click();
                    }
                }
            }
        });
    }
    
    /**
     * Make cards keyboard accessible
     */
    makeCardsKeyboardAccessible() {
        // Observe card creation
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        // Check if it's a card
                        if (node.classList && (node.classList.contains('card') || node.classList.contains('survey-card'))) {
                            this.makeCardFocusable(node);
                        }
                        
                        // Check for cards within added node
                        if (node.querySelectorAll) {
                            node.querySelectorAll('.card, .survey-card').forEach(card => {
                                this.makeCardFocusable(card);
                            });
                        }
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // Make existing cards focusable
        document.querySelectorAll('.card, .survey-card').forEach(card => {
            this.makeCardFocusable(card);
        });
    }
    
    /**
     * Make a card keyboard focusable
     * @param {HTMLElement} card - Card element
     */
    makeCardFocusable(card) {
        // Skip if already focusable
        if (card.hasAttribute('tabindex')) {
            return;
        }
        
        // Make card focusable
        card.setAttribute('tabindex', '0');
        
        // Add role if it's a survey card
        if (card.classList.contains('survey-card')) {
            card.setAttribute('role', 'button');
            
            // Get card title for aria-label
            const title = card.querySelector('.card-title');
            if (title) {
                card.setAttribute('aria-label', `${title.textContent} anketini başlat`);
            }
        }
    }
}

// Initialize accessibility manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.accessibilityManager = new AccessibilityManager();
});

export default AccessibilityManager;

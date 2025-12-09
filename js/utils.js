/**
 * Utility Functions
 * Helper functions used across the application
 */

/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
export function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format date to ISO string
 * @param {Date} date - Date object
 * @returns {string} ISO formatted date string
 */
export function formatDate(date = new Date()) {
    return date.toISOString();
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Check if string is empty or only whitespace
 * @param {string} str - String to check
 * @returns {boolean} True if empty or whitespace
 */
export function isEmpty(str) {
    return !str || str.trim().length === 0;
}

/**
 * Sanitize HTML to prevent XSS
 * @param {string} str - String to sanitize
 * @returns {string} Sanitized string
 */
export function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

/**
 * Get element by ID with error handling
 * @param {string} id - Element ID
 * @returns {HTMLElement|null} Element or null
 */
export function getElement(id) {
    return document.getElementById(id);
}

/**
 * Add event listener with error handling
 * @param {HTMLElement} element - Element to attach listener to
 * @param {string} event - Event type
 * @param {Function} handler - Event handler function
 */
export function addListener(element, event, handler) {
    if (element && typeof handler === 'function') {
        element.addEventListener(event, handler);
    }
}

/**
 * Remove event listener
 * @param {HTMLElement} element - Element to remove listener from
 * @param {string} event - Event type
 * @param {Function} handler - Event handler function
 */
export function removeListener(element, event, handler) {
    if (element && typeof handler === 'function') {
        element.removeEventListener(event, handler);
    }
}

/**
 * Show element
 * @param {HTMLElement} element - Element to show
 */
export function show(element) {
    if (element) {
        element.classList.remove('hidden');
        element.style.display = '';
    }
}

/**
 * Hide element
 * @param {HTMLElement} element - Element to hide
 */
export function hide(element) {
    if (element) {
        element.classList.add('hidden');
    }
}

/**
 * Toggle element visibility
 * @param {HTMLElement} element - Element to toggle
 */
export function toggle(element) {
    if (element) {
        element.classList.toggle('hidden');
    }
}

export default {
    debounce,
    generateId,
    formatDate,
    isValidEmail,
    isEmpty,
    sanitizeHTML,
    getElement,
    addListener,
    removeListener,
    show,
    hide,
    toggle
};

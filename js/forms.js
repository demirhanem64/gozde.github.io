/**
 * Forms Module
 * Handles survey form rendering, validation, and submission
 */

import { isValidEmail, isEmpty, generateId } from './utils.js';

/**
 * Survey Manager Class
 * Manages survey list display and selection
 */
class SurveyManager {
    constructor() {
        this.surveys = [];
        this.currentSurvey = null;
        this.surveyForm = null;
    }
    
    /**
     * Load surveys from JSON file
     */
    async loadSurveys() {
        try {
            const response = await fetch('data/surveys.json');
            const data = await response.json();
            this.surveys = data.surveys;
            return this.surveys;
        } catch (error) {
            console.error('Error loading surveys:', error);
            return [];
        }
    }
    
    /**
     * Render survey list
     * @param {string} containerId - Container element ID
     */
    async renderSurveyList(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Load surveys if not already loaded
        if (this.surveys.length === 0) {
            await this.loadSurveys();
        }
        
        // Build survey cards HTML
        const surveyCardsHTML = this.surveys.map(survey => {
            return `
                <div class="survey-card card" data-survey-id="${survey.id}">
                    <div class="survey-card-icon">📋</div>
                    <h3 class="card-title">${survey.title}</h3>
                    <p class="card-description">${survey.description}</p>
                    <button class="btn btn-primary survey-select-btn" data-survey-id="${survey.id}">
                        Anketi Başlat
                    </button>
                </div>
            `;
        }).join('');
        
        container.innerHTML = `
            <div class="survey-grid">
                ${surveyCardsHTML}
            </div>
        `;
        
        // Attach event listeners to survey selection buttons
        this.attachSurveySelectionListeners();
        
        // Reinitialize animations for dynamically loaded survey cards
        if (window.animationController) {
            window.animationController.reinitialize();
        }
    }
    
    /**
     * Attach event listeners to survey selection buttons
     */
    attachSurveySelectionListeners() {
        const selectButtons = document.querySelectorAll('.survey-select-btn');
        selectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const surveyId = e.target.getAttribute('data-survey-id');
                this.selectSurvey(surveyId);
            });
        });
    }
    
    /**
     * Select and load a survey
     * @param {string} surveyId - Survey identifier
     */
    selectSurvey(surveyId) {
        const survey = this.surveys.find(s => s.id === surveyId);
        if (!survey) return;
        
        this.currentSurvey = survey;
        
        // Hide survey list
        const surveyList = document.getElementById('survey-list');
        if (surveyList) {
            surveyList.style.display = 'none';
        }
        
        // Show and render survey form
        const formContainer = document.getElementById('survey-form-container');
        if (formContainer) {
            formContainer.style.display = 'block';
            this.surveyForm = new SurveyForm(survey);
            this.surveyForm.render('survey-form-container');
            
            // Add back button
            this.addBackButton(formContainer);
        }
    }
    
    /**
     * Add back button to return to survey list
     * @param {HTMLElement} container - Form container element
     */
    addBackButton(container) {
        const backButton = document.createElement('button');
        backButton.className = 'btn btn-secondary survey-back-btn';
        backButton.textContent = '← Anket Listesine Dön';
        backButton.style.marginBottom = 'var(--spacing-lg)';
        
        backButton.addEventListener('click', () => {
            this.showSurveyList();
        });
        
        // Insert back button at the beginning of container
        container.insertBefore(backButton, container.firstChild);
    }
    
    /**
     * Show survey list and hide form
     */
    showSurveyList() {
        const surveyList = document.getElementById('survey-list');
        const formContainer = document.getElementById('survey-form-container');
        
        if (surveyList) {
            surveyList.style.display = 'block';
        }
        
        if (formContainer) {
            formContainer.style.display = 'none';
            formContainer.innerHTML = '';
        }
        
        this.currentSurvey = null;
        this.surveyForm = null;
    }
    
    /**
     * Get current survey
     * @returns {Object|null} Current survey configuration
     */
    getCurrentSurvey() {
        return this.currentSurvey;
    }
}

class SurveyForm {
    constructor(surveyConfig) {
        this.config = surveyConfig;
        this.formElement = null;
        this.errors = {};
    }
    
    /**
     * Render the survey form
     * @param {string} containerId - Container element ID
     */
    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Create form HTML
        const formHTML = this.buildFormHTML();
        container.innerHTML = formHTML;
        
        this.formElement = container.querySelector('form');
        this.attachEventListeners();
    }
    
    /**
     * Build form HTML structure
     * @returns {string} Form HTML
     */
    buildFormHTML() {
        return `
            <form class="survey-form" novalidate>
                <h3>${this.config.title}</h3>
                <p class="form-description">${this.config.description}</p>
                
                ${this.buildFieldsHTML()}
                ${this.buildKVKKConsentHTML()}
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary" disabled>
                        Gönder
                    </button>
                </div>
            </form>
        `;
    }
    
    /**
     * Build form fields HTML
     * @returns {string} Fields HTML
     */
    buildFieldsHTML() {
        return this.config.fields.map(field => {
            return `
                <div class="form-group">
                    <label for="${field.name}" class="form-label">
                        ${field.label}${field.required ? ' *' : ''}
                    </label>
                    <input 
                        type="${field.type}" 
                        id="${field.name}" 
                        name="${field.name}"
                        class="form-input"
                        placeholder="${field.placeholder || ''}"
                        ${field.required ? 'required' : ''}
                    />
                    <span class="form-error" id="${field.name}-error"></span>
                </div>
            `;
        }).join('');
    }
    
    /**
     * Build KVKK consent checkbox HTML
     * @returns {string} KVKK HTML
     */
    buildKVKKConsentHTML() {
        return `
            <div class="form-group kvkk-consent-group">
                <div class="kvkk-text-container">
                    <h4 class="kvkk-title">KVKK Aydınlatma Metni</h4>
                    <div class="kvkk-content">
                        <p class="kvkk-paragraph">
                            <strong>Veri Sorumlusu:</strong> İstinye Üniversitesi İlk ve Acil Yardım Bölümü
                        </p>
                        <p class="kvkk-paragraph">
                            <strong>Veri Toplama Amacı:</strong> Bu anket formu aracılığıyla toplanan kişisel verileriniz 
                            (ad, soyad, bölüm-sınıf bilgisi ve e-posta adresi), eğitim kalitesinin değerlendirilmesi, 
                            öğrenci geri bildirimlerinin analiz edilmesi ve akademik çalışmaların yürütülmesi amacıyla 
                            toplanmaktadır.
                        </p>
                        <p class="kvkk-paragraph">
                            <strong>Veri İşleme ve Kullanım:</strong> Toplanan verileriniz, yalnızca belirtilen amaçlar 
                            doğrultusunda işlenecek ve anket sonuçlarının değerlendirilmesi için kullanılacaktır. 
                            Verileriniz üçüncü şahıslarla paylaşılmayacak ve ticari amaçlarla kullanılmayacaktır.
                        </p>
                        <p class="kvkk-paragraph">
                            <strong>Veri Saklama:</strong> Kişisel verileriniz, anket değerlendirmesi tamamlandıktan sonra 
                            yasal saklama süreleri ve akademik arşivleme gereklilikleri çerçevesinde güvenli bir şekilde 
                            saklanacaktır. Verileriniz, gerekli güvenlik önlemleri alınarak korunmaktadır.
                        </p>
                        <p class="kvkk-paragraph">
                            <strong>Haklarınız:</strong> 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, 
                            kişisel verilerinize ilişkin bilgi talep etme, düzeltme, silme ve işlenmesine itiraz etme 
                            haklarına sahipsiniz.
                        </p>
                    </div>
                </div>
                <div class="form-checkbox kvkk-checkbox">
                    <input 
                        type="checkbox" 
                        id="kvkkConsent" 
                        name="kvkkConsent"
                        required
                        aria-describedby="kvkk-consent-label"
                    />
                    <label for="kvkkConsent" id="kvkk-consent-label" class="kvkk-consent-label">
                        Yukarıdaki KVKK Aydınlatma Metnini okudum, anladım ve kişisel verilerimin belirtilen 
                        amaçlar doğrultusunda toplanmasını, işlenmesini ve saklanmasını kabul ediyorum.
                    </label>
                </div>
                <span class="form-error" id="kvkkConsent-error"></span>
            </div>
        `;
    }
    
    /**
     * Attach event listeners to form
     */
    attachEventListeners() {
        if (!this.formElement) return;
        
        // Form submission
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submit();
        });
        
        // KVKK consent checkbox
        const kvkkCheckbox = this.formElement.querySelector('#kvkkConsent');
        if (kvkkCheckbox) {
            kvkkCheckbox.addEventListener('change', () => {
                this.updateSubmitButton();
                this.validateKVKKConsent();
            });
        }
        
        // Real-time validation on input and blur
        this.config.fields.forEach(field => {
            const input = this.formElement.querySelector(`#${field.name}`);
            if (input) {
                // Validate on blur (when user leaves field)
                input.addEventListener('blur', () => {
                    this.validateField(field.name);
                });
                
                // Validate on input (real-time feedback while typing)
                // Use debounce to avoid excessive validation
                let inputTimeout;
                input.addEventListener('input', () => {
                    clearTimeout(inputTimeout);
                    inputTimeout = setTimeout(() => {
                        // Only validate if field has been touched (has value or had error)
                        if (input.value.length > 0 || this.errors[field.name]) {
                            this.validateField(field.name);
                        }
                    }, 300);
                });
            }
        });
    }
    
    /**
     * Validate entire form
     * @returns {boolean} True if valid
     */
    validate() {
        this.errors = {};
        let isValid = true;
        
        // Validate each field
        this.config.fields.forEach(field => {
            if (!this.validateField(field.name)) {
                isValid = false;
            }
        });
        
        // Validate KVKK consent
        if (!this.validateKVKKConsent()) {
            isValid = false;
        }
        
        return isValid;
    }
    
    /**
     * Validate a single field
     * @param {string} fieldName - Field name
     * @returns {boolean} True if valid
     */
    validateField(fieldName) {
        const field = this.config.fields.find(f => f.name === fieldName);
        if (!field) return true;
        
        const input = this.formElement.querySelector(`#${fieldName}`);
        const value = input.value;
        const errorElement = this.formElement.querySelector(`#${fieldName}-error`);
        
        // Required field validation
        if (field.required && isEmpty(value)) {
            this.errors[fieldName] = 'Bu alan zorunludur';
            this.showError(input, errorElement, this.errors[fieldName]);
            return false;
        }
        
        // Email validation
        if (field.type === 'email' && !isEmpty(value) && !isValidEmail(value)) {
            this.errors[fieldName] = 'Geçerli bir e-posta adresi giriniz';
            this.showError(input, errorElement, this.errors[fieldName]);
            return false;
        }
        
        // Min length validation
        if (field.validation?.minLength && value.length < field.validation.minLength) {
            this.errors[fieldName] = `En az ${field.validation.minLength} karakter olmalıdır`;
            this.showError(input, errorElement, this.errors[fieldName]);
            return false;
        }
        
        // Clear error if valid
        this.clearError(input, errorElement);
        delete this.errors[fieldName];
        return true;
    }
    
    /**
     * Validate KVKK consent
     * @returns {boolean} True if consented
     */
    validateKVKKConsent() {
        const checkbox = this.formElement.querySelector('#kvkkConsent');
        const errorElement = this.formElement.querySelector('#kvkkConsent-error');
        
        if (!checkbox.checked) {
            this.errors.kvkkConsent = 'KVKK aydınlatma metnini kabul etmelisiniz';
            if (errorElement) {
                errorElement.textContent = this.errors.kvkkConsent;
            }
            return false;
        }
        
        delete this.errors.kvkkConsent;
        if (errorElement) {
            errorElement.textContent = '';
        }
        return true;
    }
    
    /**
     * Show error message
     */
    showError(input, errorElement, message) {
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
    
    /**
     * Clear error message
     */
    clearError(input, errorElement) {
        input.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
    
    /**
     * Update submit button state
     */
    updateSubmitButton() {
        const submitButton = this.formElement.querySelector('button[type="submit"]');
        const kvkkCheckbox = this.formElement.querySelector('#kvkkConsent');
        
        if (submitButton && kvkkCheckbox) {
            submitButton.disabled = !kvkkCheckbox.checked;
        }
    }
    
    /**
     * Submit the form
     */
    async submit() {
        // Validate form first
        if (!this.validate()) {
            return;
        }
        
        // Get submit button and show loading indicator
        const submitButton = this.formElement.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading-spinner"></span> Gönderiliyor...';
        
        try {
            // Collect form data
            const formData = this.getFormData();
            
            // Extract survey number from config ID (e.g., "gozdeanket1" -> 1)
            const surveyNumber = parseInt(this.config.id.replace('gozdeanket', ''));
            
            // Import and use WebhookService
            const { default: WebhookService } = await import('./webhook.js');
            const webhookService = new WebhookService();
            
            // Send data to webhook
            const result = await webhookService.sendSurveyData(surveyNumber, formData);
            
            if (result.success) {
                // Show thank you popup
                this.showThankYouPopup();
                
                // Reset form after successful submission
                this.reset();
            } else {
                // Show error feedback with retry option
                this.showErrorWithRetry(result.message, result.error);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showErrorWithRetry('Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.', error.message);
        } finally {
            // Restore button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    }
    
    /**
     * Get form data as object
     * @returns {Object} Form data
     */
    getFormData() {
        const formData = {};
        
        // Collect all field values
        this.config.fields.forEach(field => {
            const input = this.formElement.querySelector(`#${field.name}`);
            if (input) {
                formData[field.name] = input.value.trim();
            }
        });
        
        // Add KVKK consent
        const kvkkCheckbox = this.formElement.querySelector('#kvkkConsent');
        formData.kvkkConsent = kvkkCheckbox ? kvkkCheckbox.checked : false;
        
        return formData;
    }
    
    /**
     * Show success message
     * @param {string} message - Success message
     */
    showSuccessMessage(message) {
        // Create success alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-success';
        alert.textContent = message;
        
        // Insert at top of form
        this.formElement.insertBefore(alert, this.formElement.firstChild);
        
        // Scroll to top of form
        this.formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Remove alert after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
    
    /**
     * Show error message
     * @param {string} message - Error message
     */
    showErrorMessage(message) {
        // Create error alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-error';
        alert.textContent = message;
        
        // Insert at top of form
        this.formElement.insertBefore(alert, this.formElement.firstChild);
        
        // Scroll to top of form
        this.formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Remove alert after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
    
    /**
     * Reset the form
     */
    reset() {
        if (this.formElement) {
            this.formElement.reset();
            this.errors = {};
            
            // Clear all error messages
            const errorElements = this.formElement.querySelectorAll('.form-error');
            errorElements.forEach(el => el.textContent = '');
            
            // Remove error classes
            const inputs = this.formElement.querySelectorAll('.form-input');
            inputs.forEach(input => input.classList.remove('error'));
            
            // Disable submit button
            const submitButton = this.formElement.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
            }
        }
    }
    
    /**
     * Show thank you popup
     */
    showThankYouPopup() {
        // Create backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'popup-backdrop';
        backdrop.id = 'thank-you-backdrop';
        
        // Create popup
        const popup = document.createElement('div');
        popup.className = 'popup thank-you-popup';
        popup.id = 'thank-you-popup';
        popup.innerHTML = `
            <div class="popup-icon" aria-hidden="true">✅</div>
            <h3 class="popup-title">Teşekkür Ederiz!</h3>
            <p class="popup-message">
                Anket yanıtlarınız başarıyla gönderildi. 
                Katkılarınız için teşekkür ederiz.
            </p>
            <div class="popup-footer">
                <button class="btn btn-primary popup-close-btn" aria-label="Teşekkür mesajını kapat">Tamam</button>
            </div>
        `;
        
        // Add to document
        document.body.appendChild(backdrop);
        document.body.appendChild(popup);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Announce to screen readers
        if (window.accessibilityManager) {
            window.accessibilityManager.announce('Anket başarıyla gönderildi. Teşekkür ederiz.', 'polite');
        }
        
        // Close popup function
        const closePopup = () => {
            popup.classList.add('popup-fade-out');
            backdrop.classList.add('popup-fade-out');
            
            setTimeout(() => {
                popup.remove();
                backdrop.remove();
                document.body.style.overflow = '';
            }, 300);
        };
        
        // Auto-close after 4 seconds
        const autoCloseTimer = setTimeout(closePopup, 4000);
        
        // Manual close on button click
        const closeButton = popup.querySelector('.popup-close-btn');
        closeButton.addEventListener('click', () => {
            clearTimeout(autoCloseTimer);
            closePopup();
        });
        
        // Close on backdrop click
        backdrop.addEventListener('click', () => {
            clearTimeout(autoCloseTimer);
            closePopup();
        });
    }
    
    /**
     * Show error message with retry option
     * @param {string} message - Error message
     * @param {string} errorDetails - Technical error details
     */
    showErrorWithRetry(message, errorDetails = '') {
        // Create backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'popup-backdrop';
        backdrop.id = 'error-backdrop';
        
        // Create popup
        const popup = document.createElement('div');
        popup.className = 'popup error-popup';
        popup.id = 'error-popup';
        popup.innerHTML = `
            <div class="popup-icon error-icon" aria-hidden="true">❌</div>
            <h3 class="popup-title">Bir Hata Oluştu</h3>
            <p class="popup-message">${message}</p>
            ${errorDetails ? `<p class="popup-error-details">${errorDetails}</p>` : ''}
            <div class="popup-footer">
                <button class="btn btn-secondary popup-retry-btn" aria-label="Formu tekrar gönder">Tekrar Dene</button>
                <button class="btn btn-primary popup-close-btn" aria-label="Hata mesajını kapat">Kapat</button>
            </div>
        `;
        
        // Add to document
        document.body.appendChild(backdrop);
        document.body.appendChild(popup);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Announce to screen readers
        if (window.accessibilityManager) {
            window.accessibilityManager.announce(`Hata: ${message}`, 'assertive');
        }
        
        // Close popup function
        const closePopup = () => {
            popup.classList.add('popup-fade-out');
            backdrop.classList.add('popup-fade-out');
            
            setTimeout(() => {
                popup.remove();
                backdrop.remove();
                document.body.style.overflow = '';
            }, 300);
        };
        
        // Retry button handler
        const retryButton = popup.querySelector('.popup-retry-btn');
        retryButton.addEventListener('click', () => {
            closePopup();
            // Trigger form submission again
            this.submit();
        });
        
        // Close button handler
        const closeButton = popup.querySelector('.popup-close-btn');
        closeButton.addEventListener('click', closePopup);
        
        // Close on backdrop click
        backdrop.addEventListener('click', closePopup);
    }
}

// Initialize survey manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const surveyListContainer = document.getElementById('survey-list');
    if (surveyListContainer) {
        window.surveyManager = new SurveyManager();
        window.surveyManager.renderSurveyList('survey-list');
    }
});

export { SurveyForm, SurveyManager };
export default SurveyForm;

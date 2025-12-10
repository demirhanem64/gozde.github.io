/**
 * Webhook Service Module
 * Handles sending survey data to n8n webhooks
 */

import { formatDate, generateId } from './utils.js';

class WebhookService {
    constructor(baseUrl = 'https://demirhanem.com.tr/webhook') {
        this.baseUrl = baseUrl;
    }

    /**
     * Build webhook URL for a specific survey
     * @param {number} surveyNumber - Survey number
     * @returns {string} Complete webhook URL
     */
    buildWebhookUrl(surveyNumber) {
        return `${this.baseUrl}/gozdeanket${surveyNumber}`;
    }

    /**
     * Send survey data to webhook
     * @param {string|number} surveyIdentifier - Webhook URL or Survey Number
     * @param {Object} formData - Form data object
     * @returns {Promise<Object>} Response data
     */
    async sendSurveyData(surveyIdentifier, formData) {
        let url;
        if (typeof surveyIdentifier === 'string' && surveyIdentifier.startsWith('http')) {
            url = surveyIdentifier;
        } else {
            url = this.buildWebhookUrl(surveyIdentifier);
        }

        // Extract survey ID for payload
        let surveyId = formData.surveyId;
        if (!surveyId && typeof surveyIdentifier === 'number') {
            surveyId = `gozdeanket${surveyIdentifier}`;
        }

        const payload = this.buildPayload(surveyId, formData);

        try {
            // Create AbortController for timeout (with fallback for older browsers)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                // Handle different HTTP error codes
                if (response.status >= 500) {
                    throw new Error(`Sunucu hatası (${response.status}). Lütfen daha sonra tekrar deneyin.`);
                } else if (response.status === 404) {
                    throw new Error('Webhook adresi bulunamadı. Lütfen sistem yöneticisi ile iletişime geçin.');
                } else if (response.status === 400) {
                    throw new Error('Form verilerinde bir sorun var. Lütfen tüm alanları kontrol edin.');
                } else {
                    throw new Error(`HTTP hatası: ${response.status}`);
                }
            }

            const data = await response.json();
            return this.handleSuccess(data);
        } catch (error) {
            // Handle specific error types
            if (error.name === 'TimeoutError' || error.name === 'AbortError') {
                return this.handleError(new Error('Bağlantı zaman aşımına uğradı. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.'));
            } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                return this.handleError(new Error('Ağ bağlantısı hatası. Lütfen internet bağlantınızı kontrol edin.'));
            }
            return this.handleError(error);
        }
    }

    /**
     * Build request payload
     * @param {string} surveyId - Survey ID
     * @param {Object} formData - Form data
     * @returns {Object} Formatted payload
     */
    buildPayload(surveyId, formData) {
        return {
            surveyId: surveyId || 'unknown',
            timestamp: formatDate(),
            responses: {
                firstName: formData.firstName || '',
                lastName: formData.lastName || '',
                departmentClass: formData.departmentClass || '',
                email: formData.email || ''
            },
            // Comprehensive data including question titles and answers
            detailedResponses: formData.detailedResponse || [],
            // Fallback for raw data
            rawData: formData,

            kvkkConsent: formData.kvkkConsent || false,
            userAgent: navigator.userAgent,
            submissionId: generateId()
        };
    }

    /**
     * Handle successful response
     * @param {Object} response - Response data
     * @returns {Object} Success result
     */
    handleSuccess(response) {
        return {
            success: true,
            data: response,
            message: 'Anket başarıyla gönderildi'
        };
    }

    /**
     * Handle error response
     * @param {Error} error - Error object
     * @returns {Object} Error result
     */
    handleError(error) {
        console.error('Webhook error:', error);

        return {
            success: false,
            error: error.message,
            message: 'Anket gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
        };
    }
}

export default WebhookService;

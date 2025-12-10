/**
 * Sheets Service Module
 * Handles fetching and parsing data from Google Sheets
 */

class SheetService {
    /**
     * Fetch and parse survey data from Google Sheets
     * @param {string} sheetId - Google Sheet ID
     * @returns {Promise<Object>} Survey configuration data from sheet
     */
    async fetchSurveyData(sheetId) {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch sheet data: ${response.status}`);
            }
            
            const csvText = await response.text();
            return this.parseCSV(csvText);
        } catch (error) {
            console.error('Sheet fetch error:', error);
            throw error;
        }
    }

    /**
     * Parse CSV text into survey structure
     * @param {string} csvText - Raw CSV text
     * @returns {Object} Parsed survey data
     */
    parseCSV(csvText) {
        // Simple CSV parser handling standard comma-separated values
        // Note: Does not handle complex quoted strings with newlines perfectly, 
        // but sufficient for standard simple text questions.
        const rows = csvText.split('\n').map(row => {
            // Remove carriage returns and split by comma
            // This regex handles quoted fields
            const matches = row.trim().match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
            return matches.map(val => val.replace(/^"|"$/g, '').trim());
            // Fallback for simple split if regex fails or for simple rows
        });

        // Use a more robust parsing approach for the specific structure we need
        // We know A column is questions/title, B column is description
        const simpleRows = csvText.split(/\r?\n/);
        const data = [];
        
        simpleRows.forEach(row => {
            if (!row.trim()) return;
            
            // Split by comma but respect quotes
            const parts = [];
            let inQuotes = false;
            let current = '';
            
            for (let i = 0; i < row.length; i++) {
                const char = row[i];
                
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    parts.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            parts.push(current.trim());
            data.push(parts);
        });

        if (data.length === 0) return null;

        // A1: Title
        const title = data[0][0] || 'Anket';
        
        // B1: Description
        const description = data[0][1] || '';

        // Questions start from A2
        const questions = [];
        for (let i = 1; i < data.length; i++) {
            const questionText = data[i][0];
            // Skip empty rows in A column
            if (questionText) {
                questions.push({
                    name: `question_${i}`, // dynamic field name
                    type: 'textarea', // Default to textarea for feedback
                    label: questionText,
                    required: true, // Assuming comments are required as per "yorumunu yazabileceği" implies active input
                    placeholder: 'Cevabınızı buraya yazınız...',
                    validation: {
                        minLength: 2
                    }
                });
            }
        }

        return {
            title,
            description,
            questions
        };
    }
}

export default new SheetService();

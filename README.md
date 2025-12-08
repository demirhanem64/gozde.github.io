# Property-Based Tests

This directory contains property-based tests for the Gözde Ekşi Portfolio Website.

## Running Tests

Since Node.js/npm is not available in this environment, tests are implemented as browser-based HTML files that can be opened directly.

### Color Palette Consistency Test

**File:** `color-palette-property.test.html`

**How to run:**
1. Open `tests/color-palette-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- CSS variables match the defined color palette
- Body background uses palette colors
- Text elements use palette colors  
- Random property-based checks across 100 iterations

**Expected Result:** All tests should pass (green checkmarks)

### Navigation Link Functionality Test

**File:** `navigation-property.test.html`

**How to run:**
1. Open `tests/navigation-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- All navigation links have corresponding sections
- Clicking navigation links updates URL hash
- Clicking navigation links activates target sections
- Only one section is active at a time
- Navigation links get active class when clicked
- Random navigation sequences work correctly (100 iterations)
- Sequential navigation preserves section content
- getCurrentPage() returns correct value

**Expected Result:** All tests should pass (green checkmarks)

### Responsive Layout Adaptation Test

**File:** `responsive-layout-property.test.html`

**How to run:**
1. Open `tests/responsive-layout-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- Mobile menu toggle visibility adapts to viewport width
- Navigation menu layout changes (column on mobile, row on desktop)
- Container padding adjusts for different viewport widths
- Typography scales appropriately for viewport size
- Buttons have touch-friendly sizes (≥44px) on mobile
- Form inputs have touch-friendly sizes (≥44px) on mobile
- Random viewport width checks (100 iterations)

**Expected Result:** All tests should pass (green checkmarks)

### External Link Behavior Test

**File:** `external-links-property.test.html`

**How to run:**
1. Open `tests/external-links-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- All external links have target="_blank" attribute
- All external links have rel="noopener noreferrer" attribute
- Instagram and Facebook links have correct security attributes
- Internal navigation links do NOT have target="_blank"
- All links with target="_blank" have proper rel attribute
- External links prevent window.opener access
- Random external link checks (100 iterations)
- Social media links are correctly identified and secured
- External vs internal link distinction
- Dynamically created external links maintain security
- External links have accessible labels

**Expected Result:** All tests should pass (green checkmarks)

### Unique Webhook URLs Test

**File:** `unique-webhook-urls-property.test.html`

**How to run:**
1. Open `tests/unique-webhook-urls-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- All surveys have unique webhook URLs (pairwise comparison, 100 iterations)
- Webhook URLs follow the expected pattern (https://demirhanem.com.tr/webhook/gozdeanket{N})
- Survey IDs and webhook URLs have consistent numbering (100 iterations)
- Adding new surveys maintains uniqueness (100 iterations)
- Actual survey data has no duplicate webhook URLs

**Expected Result:** All tests should pass (green checkmarks)

### Survey Selection Loading Test

**File:** `survey-selection-loading-property.test.html`

**How to run:**
1. Open `tests/survey-selection-loading-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- Selecting any survey loads the corresponding form with correct configuration (100 iterations)
- Survey list is hidden when a survey is selected (100 iterations)
- Each survey loads with its unique webhook URL (100 iterations)
- Selecting different surveys loads different configurations (50 iterations)
- All required form fields are present for any selected survey (100 iterations)
- Back button functionality returns to survey list (100 iterations)

**Expected Result:** All tests should pass (green checkmarks)

### Form Field Labeling Test

**File:** `form-field-labeling-property.test.html`

**How to run:**
1. Open `tests/form-field-labeling-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- All input fields have either labels or placeholders (100 iterations)
- Configured fields have labels matching their configuration (100 iterations)
- Fields with configured placeholders have them rendered correctly (100 iterations)
- KVKK consent checkbox has an associated label (100 iterations)
- Label 'for' attributes match input 'id' attributes (100 iterations)
- Required fields have asterisk indicator in labels (100 iterations)

**Expected Result:** All tests should pass (green checkmarks)

### Required Field Validation Test

**File:** `required-field-validation-property.test.html`

**How to run:**
1. Open `tests/required-field-validation-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- Validation fails when required fields are empty (100 iterations)
- Each empty required field generates an error (100 iterations)
- Error messages appear in DOM for empty required fields (100 iterations)
- Empty required fields get error CSS class (100 iterations)
- Validation passes when all required fields are filled (100 iterations)
- Validation fails if any single required field is empty (100 iterations)
- Whitespace-only values fail required field validation (100 iterations)
- Error messages are in Turkish (100 iterations)

**Expected Result:** All tests should pass (green checkmarks)

### KVKK Consent Requirement Test

**File:** `kvkk-consent-requirement-property.test.html`

**How to run:**
1. Open `tests/kvkk-consent-requirement-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

**What it tests:**
- Submission is prevented when KVKK consent is not checked (100 iterations)
- Submission is allowed when KVKK consent is checked and all fields are valid (100 iterations)
- Submit button is disabled when KVKK consent is not checked (100 iterations)
- Submit button is enabled when KVKK consent is checked (100 iterations)
- KVKK consent alone is not sufficient - other validations must also pass (100 iterations)
- KVKK checkbox exists and is required in all survey forms (100 iterations)
- KVKK error message is in Turkish (100 iterations)

**Expected Result:** All tests should pass (green checkmarks)

## Test Framework

These tests implement property-based testing principles:
- Tests run multiple iterations (100+) with different inputs
- Tests verify universal properties that should hold for all valid inputs
- Tests check that colors used throughout the site match the defined palette

## Color Palette

The defined color palette (from Requirements 1.1):
- **Turquoise:** #0891b2 (primary)
- **Orange:** #f97316 (secondary)
- Plus variants (light/dark) and semantic colors

All UI elements should use colors from this palette.

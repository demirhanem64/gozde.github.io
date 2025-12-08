# Survey Selection Loading Property Test

## Test Information

**File:** `survey-selection-loading-property.test.html`

**Feature:** gozde-eksi-portfolio-website, Property 23: Survey Selection Loading

**Validates:** Requirements 10.2

**Property:** For any survey option selected by the user, the System should load and display the corresponding survey form with the correct fields and configuration.

## How to Run

1. Open `tests/survey-selection-loading-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

## What It Tests

This property-based test verifies the following behaviors across 100+ random iterations:

### 1. Survey Selection Loading (Property 23)
- Selecting any survey loads the corresponding form
- Form displays correct title and description
- All configured fields are rendered with correct types
- KVKK consent checkbox is present
- Submit button is present and initially disabled

### 2. Survey List Visibility
- Survey list is hidden when a survey is selected
- Form container becomes visible when a survey is selected

### 3. Unique Webhook URLs
- Each survey loads with its correct unique webhook URL
- Webhook URLs follow the expected pattern: `https://demirhanem.com.tr/webhook/gozdeanket{N}`

### 4. Different Survey Configurations
- Selecting different surveys loads different configurations
- Survey IDs and webhook URLs are distinct between different surveys

### 5. Form Field Completeness
- All fields defined in survey configuration are rendered
- Field types, names, and placeholders match configuration
- Field count matches expected count

### 6. Back Button Functionality
- Back button is present after survey selection
- Clicking back button returns to survey list
- Form is hidden after going back
- Current survey is cleared after going back

## Expected Result

All tests should pass (green checkmarks) with the following summary:
- **6/6 tests passed**
- ✓ All tests passed!

## Test Iterations

- Most tests run 100 iterations with random survey selections
- "Different surveys" test runs 50 iterations (requires pairwise comparisons)
- Total property checks: 500+ iterations

## Troubleshooting

If tests fail:

1. **Form not loading:** Check that `js/forms.js` is properly loaded and `SurveyManager` class is exported
2. **Fields missing:** Verify `data/surveys.json` has correct field definitions
3. **Webhook URL mismatch:** Check that survey IDs match webhook URL numbers
4. **Back button not working:** Verify `showSurveyList()` method in `SurveyManager` class

## Related Files

- `js/forms.js` - Survey form implementation
- `data/surveys.json` - Survey configuration data
- `index.html` - Main page with survey containers

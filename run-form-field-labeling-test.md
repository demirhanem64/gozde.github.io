# Form Field Labeling Property Test

## How to Run

1. Open `tests/form-field-labeling-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

## What It Tests

**Feature:** gozde-eksi-portfolio-website, Property 7: Form Field Labeling  
**Validates:** Requirements 5.3

**Property:** For any input field in a survey form, the field should have either a `<label>` element with matching `for` attribute or a `placeholder` attribute providing user guidance.

### Test Cases

1. **All input fields have labels or placeholders** (100 iterations)
   - Verifies every input field has either a label with matching `for` attribute OR a placeholder
   - Tests across all survey configurations

2. **Configured fields have matching labels** (100 iterations)
   - Verifies all configured fields have labels that match their configuration
   - Checks that label text contains the configured label text

3. **Configured placeholders are rendered** (100 iterations)
   - Verifies fields with configured placeholders have them rendered correctly
   - Checks placeholder attribute matches configuration

4. **KVKK consent has label** (100 iterations)
   - Verifies KVKK consent checkbox has an associated label
   - Checks label contains "KVKK" text

5. **Label for attributes match input ids** (100 iterations)
   - Verifies label `for` attributes match input `id` attributes
   - Ensures proper label-input association

6. **Required fields have asterisk indicator** (100 iterations)
   - Verifies required fields have asterisk (*) in their labels
   - Provides visual indication of required fields

## Expected Result

All tests should pass (green checkmarks).

## Requirements Coverage

This test validates:
- **Requirement 5.3:** WHEN a User interacts with form fields THEN the System SHALL provide clear labels and placeholder text for each input

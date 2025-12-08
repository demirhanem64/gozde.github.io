# KVKK Consent Requirement Property Test

## Test Information

**Feature:** gozde-eksi-portfolio-website, Property 10: KVKK Consent Requirement  
**Validates:** Requirements 6.2  
**Property:** For any survey form submission attempt, if the KVKK consent checkbox is not checked, the System should prevent form submission and indicate that consent is required.

## How to Run

1. Open `tests/kvkk-consent-requirement-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

## What It Tests

This property-based test verifies the following behaviors across 100+ iterations with random survey configurations:

### Test 1: Submission Prevented Without KVKK Consent
- Fills all required fields with valid data
- Leaves KVKK consent checkbox unchecked
- Verifies that form validation fails
- Verifies that a KVKK consent error is generated
- Verifies that error message is displayed

### Test 2: Submission Allowed With KVKK Consent
- Fills all required fields with valid data
- Checks the KVKK consent checkbox
- Verifies that form validation passes
- Verifies that no KVKK consent error exists

### Test 3: Submit Button Disabled Without Consent
- Renders survey form
- Ensures KVKK checkbox is unchecked
- Verifies that submit button is disabled

### Test 4: Submit Button Enabled With Consent
- Renders survey form
- Checks the KVKK checkbox
- Verifies that submit button is enabled

### Test 5: KVKK Consent Not Sufficient Alone
- Checks KVKK consent checkbox
- Leaves other required fields empty
- Verifies that validation still fails
- Verifies that other field errors exist

### Test 6: KVKK Checkbox Exists in All Forms
- Verifies KVKK checkbox exists in all survey forms
- Verifies it's a checkbox type input
- Verifies it's marked as required

### Test 7: KVKK Error Message in Turkish
- Generates KVKK consent error
- Verifies error message is in Turkish
- Checks for Turkish characters or keywords

## Expected Result

All tests should pass (green checkmarks).

## Requirements Validation

This test validates **Requirement 6.2**:
> WHEN a User attempts to submit a Survey THEN the System SHALL prevent submission IF the Aydınlatma Metni checkbox is not checked

## Property-Based Testing

This test uses property-based testing principles:
- Runs 100 iterations per test case
- Uses random survey configurations from actual data
- Generates random valid form data
- Verifies universal properties that should hold for all inputs

## Troubleshooting

If tests fail:

1. **KVKK checkbox not found**: Ensure the form renders the KVKK consent checkbox with id="kvkkConsent"
2. **Validation passes without consent**: Check that `validateKVKKConsent()` method properly checks checkbox state
3. **Submit button not disabled**: Verify that `updateSubmitButton()` method correctly manages button state
4. **Error message not displayed**: Ensure error element with id="kvkkConsent-error" exists and is populated
5. **Turkish error message**: Verify that error messages use Turkish text

## Related Files

- Implementation: `js/forms.js` (SurveyForm class)
- Requirements: `.kiro/specs/gozde-eksi-portfolio-website/requirements.md`
- Design: `.kiro/specs/gozde-eksi-portfolio-website/design.md`
- Manual Test: `tests/kvkk-consent-manual-test.md`

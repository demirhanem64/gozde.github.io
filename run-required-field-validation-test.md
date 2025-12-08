# Required Field Validation Property Test

## How to Run

1. Open `tests/required-field-validation-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

## What It Tests

**Feature:** gozde-eksi-portfolio-website, Property 8: Required Field Validation  
**Validates:** Requirements 5.4

**Property:** For any survey form with required fields, attempting to submit the form with empty required fields should prevent submission and display validation messages.

### Test Cases

1. **Validation fails when required fields are empty**
   - Verifies that validation returns false when required fields are left empty
   - Checks that error objects are populated

2. **Each empty required field generates an error**
   - Tests each required field individually
   - Ensures each empty required field produces a specific error

3. **Error messages appear in DOM**
   - Verifies error messages are displayed in the DOM
   - Checks that error elements have text content

4. **Empty required fields get error CSS class**
   - Ensures input fields with errors have the 'error' CSS class applied
   - Validates visual feedback for validation errors

5. **Validation passes with filled fields**
   - Tests that validation succeeds when all required fields have valid values
   - Verifies no errors exist after successful validation

6. **Validation fails if any field is empty**
   - Randomly leaves one required field empty while filling others
   - Ensures validation fails even if only one field is empty

7. **Whitespace-only values fail validation**
   - Tests that fields containing only whitespace (spaces, tabs, newlines) are treated as empty
   - Verifies proper trimming and validation of input values

8. **Error messages are in Turkish**
   - Checks that all error messages are non-empty strings
   - Validates that error messages are properly formatted

## Expected Result

All tests should pass (green checkmarks) with 100+ iterations per test case.

## Property-Based Testing

This test uses property-based testing principles:
- Runs 100+ iterations with different survey configurations
- Tests universal properties that should hold for all valid inputs
- Validates that required field validation works consistently across all surveys

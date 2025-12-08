# Email Format Validation Property Test

## Test Information

**Feature:** gozde-eksi-portfolio-website, Property 9: Email Format Validation  
**Validates:** Requirements 5.5  
**Property:** For any email input field, entering an invalid email format (missing @, invalid domain, etc.) should trigger validation errors and prevent form submission.

## How to Run

1. Open `tests/email-format-validation-property.test.html` in a web browser
2. The tests will run automatically
3. View the results on the page

## What This Test Validates

This property-based test verifies that:

1. **Invalid email formats fail validation** - Any email without @, missing domain, or other format issues should be rejected
2. **Valid email formats pass validation** - Properly formatted emails should be accepted
3. **Error messages appear in DOM** - Invalid emails should display error messages to users
4. **Error CSS class is applied** - Invalid email inputs should get the 'error' CSS class
5. **Form submission is prevented** - Forms with invalid emails should not be submittable
6. **isValidEmail utility works correctly** - The utility function correctly identifies valid/invalid emails
7. **Edge cases are handled** - Special cases like empty strings, whitespace, dots, plus signs, etc. are handled correctly
8. **Errors are cleared** - When a valid email is entered after an invalid one, errors are cleared
9. **Error messages are in Turkish** - All error messages are displayed in Turkish language

## Test Coverage

The test runs 100 iterations for each property, testing with:
- Random invalid email formats (missing @, missing domain, double @, spaces, etc.)
- Random valid email formats (various TLDs, local parts, domains)
- Edge cases (empty, whitespace, special characters)
- All survey configurations from `data/surveys.json`

## Expected Results

All tests should pass, confirming that:
- Email validation correctly rejects invalid formats
- Email validation correctly accepts valid formats
- User feedback (error messages, CSS classes) is properly displayed
- Form submission is properly controlled based on email validity

## Troubleshooting

If tests fail:
1. Check that `js/forms.js` has the `validateField` method for email validation
2. Check that `js/utils.js` has the `isValidEmail` function
3. Verify that error messages are being set in the `errors` object
4. Verify that error CSS classes are being applied/removed correctly
5. Check browser console for any JavaScript errors

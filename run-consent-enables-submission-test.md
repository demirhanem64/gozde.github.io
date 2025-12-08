# Run Consent Enables Submission Property Test

## Property 11: Consent Enables Submission
**Validates: Requirements 6.5**

This property test verifies that when the KVKK consent checkbox changes from unchecked to checked, the submit button becomes enabled.

## How to Run

### Browser-Based Test (Recommended)

1. Open `tests/consent-enables-submission-property.test.html` in a web browser
2. The test will run automatically and display results
3. Look for the summary at the bottom showing pass/fail status

### Jest Test (If Node.js is installed)

```bash
npm test -- consent-enables-submission.test.js --run
```

## What This Test Validates

The test verifies the following properties across 100 random iterations:

1. **Checking KVKK consent enables submit button**: When the KVKK consent checkbox is checked, the submit button should become enabled
2. **Unchecking KVKK consent disables submit button**: When the KVKK consent checkbox is unchecked, the submit button should become disabled
3. **Toggling consistency**: Multiple toggles of the checkbox should consistently update the button state
4. **Initial state**: The submit button should be disabled when the form is first rendered
5. **Event-driven updates**: The change event on the checkbox should automatically update the button state

## Expected Results

All tests should pass, confirming that:
- The submit button is properly controlled by the KVKK consent checkbox
- The button state changes dynamically as the checkbox is toggled
- The implementation correctly enforces the requirement that users must consent before submitting

## Troubleshooting

If tests fail:
1. Check that `js/forms.js` has the `updateSubmitButton()` method implemented
2. Verify that the KVKK checkbox has an event listener for the 'change' event
3. Ensure the submit button's `disabled` attribute is being updated correctly
4. Check browser console for any JavaScript errors

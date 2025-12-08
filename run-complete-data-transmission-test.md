# Running Complete Data Transmission Property Test

## Test Information
- **Feature**: gozde-eksi-portfolio-website
- **Property**: Property 14: Complete Data Transmission
- **Validates**: Requirements 7.3

## Property Statement
For any form submission, the JSON payload sent to the webhook should include all form field values (firstName, lastName, departmentClass, email) with no missing fields.

## Running the Test

### Prerequisites
1. Ensure Node.js and npm are installed
2. Install dependencies: `npm install`

### Run the Test
```bash
npm test -- __tests__/complete-data-transmission.test.js
```

Or run all tests:
```bash
npm test
```

## What This Test Validates

This property-based test verifies that:

1. **All Required Fields Present**: For any valid form data, all required fields (firstName, lastName, departmentClass, email) are present in the webhook payload
2. **Values Match Input**: The transmitted values exactly match the input form data
3. **No Null/Undefined Values**: No field values are null or undefined in the payload
4. **KVKK Consent Included**: The KVKK consent status is included in the payload
5. **Metadata Included**: The payload includes required metadata (surveyId, timestamp, submissionId, userAgent)
6. **Default Values for Missing Fields**: When optional fields are missing, the payload still includes all fields with default values (empty strings)
7. **Schema Compliance**: The payload structure matches the expected schema with all required top-level and nested properties

## Test Coverage

The test runs 100 iterations with randomly generated:
- Survey numbers (1-100)
- Form data with various string lengths
- Email addresses
- Optional/missing field scenarios

## Expected Behavior

All test cases should pass, confirming that:
- The webhook service always transmits complete data
- No form field data is lost during transmission
- The payload structure is consistent and complete
- All required metadata is included with the form data

## Troubleshooting

If tests fail:
1. Check that `js/webhook.js` properly builds the payload with all fields
2. Verify that the `buildPayload` method includes all form fields in the `responses` object
3. Ensure default values (empty strings) are used for missing fields
4. Confirm that metadata fields (surveyId, timestamp, submissionId, userAgent) are always included

## Related Files
- Test file: `__tests__/complete-data-transmission.test.js`
- Implementation: `js/webhook.js`
- Design document: `.kiro/specs/gozde-eksi-portfolio-website/design.md`
- Requirements: `.kiro/specs/gozde-eksi-portfolio-website/requirements.md`

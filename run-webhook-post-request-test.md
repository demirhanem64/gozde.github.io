# Run Webhook POST Request Property Test

## Property 12: Webhook POST Request
**Feature:** gozde-eksi-portfolio-website  
**Validates:** Requirements 7.1

## Property Statement
*For any* valid survey form submission, the System should make an HTTP POST request to the configured webhook endpoint with the form data.

## How to Run the Test

### Option 1: Browser-Based Test (Recommended)
1. Open `tests/webhook-post-request-property.test.html` in a web browser
2. The test will run automatically
3. View the results on the page

### Option 2: Jest Test (Requires Node.js)
```bash
npm test -- webhook-post-request.test.js --run
```

## What This Test Validates

This property-based test runs 100 iterations for each of the following properties:

1. **POST Request Method**: For any valid form data, `sendSurveyData` makes a POST request
2. **Correct URL**: POST request is sent to the correct webhook URL pattern
3. **Content-Type Header**: POST request includes `Content-Type: application/json` header
4. **Valid JSON Body**: POST request body is valid JSON
5. **Fetch Invocation**: Fetch API is invoked exactly once per submission
6. **Different Endpoints**: Different survey numbers result in different webhook endpoints
7. **Success Handling**: Successful POST (200-299) returns success result
8. **Error Handling**: Failed POST (400-599) returns error result

## Expected Behavior

For any valid survey form submission with:
- Survey number (1-100)
- Form data (firstName, lastName, departmentClass, email, kvkkConsent)

The system should:
1. Make an HTTP POST request using the Fetch API
2. Send to URL: `https://demirhanem.com.tr/webhook/gozdeanket{N}`
3. Include header: `Content-Type: application/json`
4. Send valid JSON payload with all form data
5. Return success/error result based on response status

## Test Results

After running the test, you should see:
- ✅ All 8 property tests passing
- 🎉 Summary showing 8/8 tests passed

If any test fails, review the error message to understand which property was violated.

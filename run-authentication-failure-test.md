# How to Run Authentication Failure Property Test

## Test Information
- **Test File:** `tests/authentication-failure-property.test.html`
- **Feature:** portfolio-improvements
- **Property:** Property 9: Authentication failure handling
- **Validates:** Requirements 6.4

## Property Being Tested
**For any incorrect password attempt, the system should show error message and deny access**

## Running the Test

### Method 1: Open in Browser
1. Open `tests/authentication-failure-property.test.html` in a web browser
2. The test will run automatically
3. View results on the page

### Method 2: Using Live Server (Recommended)
1. Install Live Server extension in VS Code (if not already installed)
2. Right-click on `tests/authentication-failure-property.test.html`
3. Select "Open with Live Server"
4. View results in the browser

### Method 3: Local Web Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Then navigate to:
# http://localhost:8000/tests/authentication-failure-property.test.html
```

## Test Coverage

The property test runs 100+ iterations for each of the following scenarios:

1. **Incorrect Passwords Denied** (100 iterations)
   - Generates random incorrect passwords
   - Verifies login fails
   - Verifies error message is shown
   - Verifies user is not authenticated
   - Verifies no session is created

2. **Empty/Whitespace Passwords Rejected** (100 iterations)
   - Tests various whitespace-only inputs
   - Verifies all are rejected with error messages

3. **Non-String Inputs Handled Gracefully** (9 test cases)
   - Tests null, undefined, numbers, booleans, arrays, objects
   - Verifies no exceptions are thrown
   - Verifies all are rejected

4. **Multiple Failed Attempts Denied** (100 iterations)
   - Tests 1-10 consecutive failed login attempts
   - Verifies access is never granted

5. **Error Messages Informative and in Turkish** (100 iterations)
   - Verifies error messages exist
   - Verifies messages are non-empty strings
   - Verifies messages contain Turkish error indicators

6. **Correct Password Works** (Sanity Check)
   - Verifies the correct password ('admin123') still works
   - Ensures tests aren't too restrictive

7. **Password Case Sensitivity** (6 test cases)
   - Tests various case variations of the correct password
   - Verifies password is case-sensitive and requires exact match

## Expected Results

All tests should **PASS** with the following summary:
- ✓ Property 9: Incorrect passwords denied
- ✓ Empty/whitespace passwords rejected
- ✓ Non-string inputs handled gracefully
- ✓ Multiple failed attempts denied
- ✓ Error messages informative and in Turkish
- ✓ Correct password works (sanity check)
- ✓ Password is case-sensitive and exact

**Total:** 7/7 tests passed

## What This Test Validates

This property-based test validates **Requirement 6.4**:
> WHEN yanlış şifre girildiğinde THEN sistem hata mesajı göstermeli ve erişimi engellemeli

The test ensures that:
1. Any incorrect password is rejected
2. Error messages are always shown
3. Access is always denied for incorrect passwords
4. The system handles edge cases gracefully (empty, whitespace, non-string inputs)
5. Multiple failed attempts don't grant access
6. Error messages are informative and in Turkish
7. The correct password still works

## Troubleshooting

### Test Fails to Load
- Ensure `js/admin-auth.js` exists
- Check browser console for errors
- Verify file paths are correct

### Tests Fail
- Check if AdminAuth class is properly implemented
- Verify localStorage is available in the browser
- Check browser console for specific error messages

### Browser Compatibility
- Test in modern browsers (Chrome, Firefox, Edge, Safari)
- Ensure JavaScript is enabled
- Clear localStorage if tests behave unexpectedly

## Notes

- The test uses the default password: `admin123`
- Each test iteration uses randomly generated data
- Tests run automatically on page load
- Results are displayed in a user-friendly format
- The test cleans up localStorage between iterations

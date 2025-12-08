# Task 11.2 Verification Guide

## Quick Verification Steps

### 1. Access Admin Panel
1. Open `admin.html` in your browser
2. Enter the admin password
3. Click "Giriş Yap"

### 2. Navigate to Surveys Section
1. Click the "Anketler" (📋) button in the navigation
2. You should see the survey list view

### 3. Test Add New Survey
1. Click "Yeni Anket" button
2. Verify the form appears with:
   - Title field (empty)
   - Description field (empty)
   - Webhook URL field (empty)
   - Active checkbox (checked by default)
   - Character counter showing "0 / 500"
3. Try submitting empty form - should show validation errors
4. Fill in valid data:
   - Title: "Test Survey"
   - Description: "This is a test survey"
   - Webhook URL: "https://example.com/webhook/test"
5. Click "Kaydet"
6. Verify:
   - Success message appears
   - Form closes
   - New survey appears in the list

### 4. Test Edit Existing Survey
1. Click "Düzenle" button on any survey in the list
2. Verify the form appears with:
   - Form title: "Anket Düzenle"
   - Submit button: "Güncelle"
   - All fields pre-filled with existing data
   - Character counter showing correct count
3. Modify some fields
4. Click "Güncelle"
5. Verify:
   - Success message appears
   - Form closes
   - Changes are reflected in the list

### 5. Test Form Validation
1. Click "Yeni Anket"
2. Test each validation rule:
   - Leave title empty → Error: "Başlık gereklidir"
   - Enter 201 characters in title → Error: "Başlık 200 karakterden uzun olamaz"
   - Leave description empty → Error: "Açıklama gereklidir"
   - Enter 501 characters in description → Error: "Açıklama 500 karakterden uzun olamaz"
   - Leave webhook URL empty → Error: "Webhook URL gereklidir"
   - Enter invalid URL (e.g., "not-a-url") → Error: "Geçerli bir URL giriniz"

### 6. Test Character Counter
1. Click "Yeni Anket"
2. Type in the description field
3. Verify:
   - Counter updates in real-time
   - Shows format "X / 500"
   - Turns red when exceeding 500 characters
   - Returns to normal color when under limit

### 7. Test Cancel Functionality
1. Click "Yeni Anket"
2. Fill in some data
3. Click "İptal" button
4. Verify:
   - Form closes
   - List view appears
   - Form is reset (check by opening again)

### 8. Test Form Reset
1. Click "Yeni Anket"
2. Fill in all fields
3. Click close button (✕)
4. Click "Yeni Anket" again
5. Verify all fields are empty

## Expected Results

✅ All form fields are present and functional
✅ Validation works correctly for all fields
✅ New surveys can be created successfully
✅ Existing surveys can be edited successfully
✅ Form pre-fills correctly when editing
✅ Character counter updates in real-time
✅ Error messages display correctly
✅ Success messages appear after save/update
✅ List refreshes automatically after changes
✅ Cancel/close buttons work correctly

## Automated Testing

Run the automated test suite:
1. Open `test-survey-form.html` in your browser
2. Click each "Run Test" button
3. Verify all tests show green checkmarks (✓)
4. Use the interactive form preview at the bottom

## Requirements Validated

- ✅ **Requirement 8.2**: Admin can add new surveys using the form
- ✅ **Requirement 8.4**: Admin can edit existing surveys with pre-filled form

## Files to Review

- `admin.html` - Contains form HTML and JavaScript
- `js/survey-manager.js` - Contains data management logic
- `test-survey-form.html` - Automated test suite
- `TASK-11.2-COMPLETION-SUMMARY.md` - Detailed implementation documentation

## Troubleshooting

### Form doesn't appear
- Check if you're logged in to admin panel
- Verify you clicked "Anketler" button in navigation
- Check browser console for JavaScript errors

### Validation not working
- Check browser console for errors
- Verify `js/survey-manager.js` is loaded
- Clear browser cache and reload

### Data not saving
- Check LocalStorage is enabled in browser
- Check browser console for errors
- Verify `surveyManager` is initialized

### Pre-fill not working
- Verify survey ID is being passed correctly
- Check `surveyManager.getById()` returns data
- Check browser console for errors

## Success Criteria

All of the following should be true:
- ✅ Form has all required fields (title, description, webhookUrl)
- ✅ Form validation prevents invalid submissions
- ✅ New surveys can be created and appear in list
- ✅ Existing surveys can be edited and changes persist
- ✅ Form pre-fills correctly when editing
- ✅ Character counter works in real-time
- ✅ Error messages are clear and helpful
- ✅ User experience is smooth and intuitive

**If all criteria are met, Task 11.2 is successfully completed! ✅**
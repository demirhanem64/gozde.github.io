# Manual Testing Guide - Google Sheets Announcements Integration

## Overview
This document provides a comprehensive manual testing checklist for the Google Sheets announcements integration feature. Follow each test case systematically to verify all functionality.

## Prerequisites
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Access to the Google Sheets document (ID: 1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0)
- LocalStorage enabled in browser
- Developer console access (F12)

---

## Test Suite 1: End-to-End Flow with Real Google Sheets Data

### Test 1.1: Initial Page Load
**Objective:** Verify announcements load from Google Sheets on first visit

**Steps:**
1. Clear browser cache and LocalStorage
   - Open Developer Console (F12)
   - Go to Application/Storage tab
   - Clear all LocalStorage data
2. Navigate to the homepage (index.html)
3. Wait for page to fully load

**Expected Results:**
- ✅ Console shows: "Google Sheets'ten veri çekiliyor..."
- ✅ Console shows: "X duyuru Google Sheets'ten yüklendi" (where X is the number of active announcements)
- ✅ Announcements section displays announcement cards
- ✅ Only active announcements (isActive=true) are displayed
- ✅ No JavaScript errors in console

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 1.2: Cache Behavior - Subsequent Load
**Objective:** Verify cache is used on second page load

**Steps:**
1. After Test 1.1, refresh the page (F5)
2. Observe console messages

**Expected Results:**
- ✅ Console shows: "Google Sheets verileri cache'ten yüklendi"
- ✅ No new API request is made (check Network tab)
- ✅ Announcements display immediately
- ✅ Same announcements as first load

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 1.3: Cache Expiration (5 Minutes)
**Objective:** Verify cache expires after 5 minutes

**Steps:**
1. After Test 1.2, wait 5 minutes and 10 seconds
2. Refresh the page
3. Observe console messages and Network tab

**Expected Results:**
- ✅ Console shows: "Google Sheets'ten veri çekiliyor..."
- ✅ New API request is made to Google Sheets
- ✅ Fresh data is fetched and cached
- ✅ Console shows: "X duyuru Google Sheets'ten yüklendi"

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Test Suite 2: Announcement Display

### Test 2.1: Announcement Cards Display
**Objective:** Verify announcements display correctly on homepage

**Steps:**
1. Load the homepage
2. Scroll to the "Duyurular" section
3. Inspect each announcement card

**Expected Results:**
- ✅ All announcement cards are visible
- ✅ Each card shows: Title, Date, Time, Summary
- ✅ Date is formatted in Turkish (e.g., "15 Ocak 2025")
- ✅ Time is in HH:MM format
- ✅ "Yeni" badge appears on announcements from last 7 days
- ✅ No "Yeni" badge on announcements older than 7 days
- ✅ Cards are sorted by date/time (newest first)

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 2.2: Active Filtering
**Objective:** Verify only active announcements are displayed

**Steps:**
1. Open Google Sheets document
2. Note which announcements have "Aktif Mi?" = "Hayır" or FALSE
3. Check homepage announcements

**Expected Results:**
- ✅ Inactive announcements do NOT appear on homepage
- ✅ Only announcements with "Aktif Mi?" = "Evet" or TRUE are shown

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Test Suite 3: Popup Modal Interactions

### Test 3.1: Open Popup
**Objective:** Verify popup opens when clicking announcement card

**Steps:**
1. Click on any announcement card
2. Observe the popup modal

**Expected Results:**
- ✅ Popup modal appears
- ✅ Backdrop (dark overlay) appears behind popup
- ✅ Popup displays: Title, Date, Time, Full Content
- ✅ Content matches the clicked announcement
- ✅ Close button (×) is visible
- ✅ Body scroll is disabled (page doesn't scroll)

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 3.2: Close Popup - Close Button
**Objective:** Verify popup closes when clicking close button

**Steps:**
1. Open any announcement popup (Test 3.1)
2. Click the close button (×) in top-right corner

**Expected Results:**
- ✅ Popup closes with fade-out animation
- ✅ Backdrop disappears
- ✅ Body scroll is restored
- ✅ Focus returns to page

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 3.3: Close Popup - Backdrop Click
**Objective:** Verify popup closes when clicking backdrop

**Steps:**
1. Open any announcement popup
2. Click on the dark backdrop area (outside the popup)

**Expected Results:**
- ✅ Popup closes
- ✅ Backdrop disappears
- ✅ Body scroll is restored

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 3.4: Close Popup - ESC Key
**Objective:** Verify popup closes when pressing ESC key

**Steps:**
1. Open any announcement popup
2. Press the ESC key on keyboard

**Expected Results:**
- ✅ Popup closes
- ✅ Backdrop disappears
- ✅ Body scroll is restored

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 3.5: Popup Content Accuracy
**Objective:** Verify popup displays exact announcement content

**Steps:**
1. Note the title, date, time, and summary of an announcement card
2. Click the card to open popup
3. Compare popup content with card content

**Expected Results:**
- ✅ Popup title matches card title exactly
- ✅ Popup date matches card date exactly
- ✅ Popup time matches card time exactly
- ✅ Popup shows full content (not just summary)

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Test Suite 4: Responsive Design

### Test 4.1: Desktop View (≥1024px)
**Objective:** Verify 3-column grid layout on desktop

**Steps:**
1. Open homepage in browser
2. Resize window to 1200px width or larger
3. Observe announcements section

**Expected Results:**
- ✅ Announcements display in 3-column grid
- ✅ Cards are evenly spaced
- ✅ Layout is balanced and readable

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 4.2: Tablet View (768px-1023px)
**Objective:** Verify 2-column grid layout on tablet

**Steps:**
1. Resize browser window to 800px width
2. Observe announcements section

**Expected Results:**
- ✅ Announcements display in 2-column grid
- ✅ Cards adjust to fit tablet width
- ✅ Layout remains readable

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 4.3: Mobile View (<768px)
**Objective:** Verify single-column layout on mobile

**Steps:**
1. Resize browser window to 375px width (iPhone size)
2. Observe announcements section

**Expected Results:**
- ✅ Announcements display in single column
- ✅ Cards stack vertically
- ✅ Text is readable without horizontal scrolling
- ✅ Popup modal fits mobile screen

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Test Suite 5: Error Scenarios

### Test 5.1: API Failure with Cache Fallback
**Objective:** Verify system uses cache when API fails

**Steps:**
1. Load page normally (cache is populated)
2. Disconnect from internet or block Google Sheets domain
3. Clear cache timestamp in LocalStorage (keep cached data)
4. Refresh page

**Expected Results:**
- ✅ Console shows error message about API failure
- ✅ Console shows: "Hata nedeniyle eski cache verisi kullanılıyor"
- ✅ Announcements still display from cache
- ✅ No user-facing error message

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 5.2: API Failure without Cache
**Objective:** Verify graceful handling when both API and cache fail

**Steps:**
1. Clear all LocalStorage
2. Disconnect from internet
3. Load page

**Expected Results:**
- ✅ Console shows error message
- ✅ Empty state message displays: "Henüz Duyuru Yok"
- ✅ No JavaScript errors
- ✅ Page remains functional

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 5.3: Malformed Data Handling
**Objective:** Verify system skips invalid rows

**Steps:**
1. Open Google Sheets
2. Add a row with missing required fields (e.g., no title or content)
3. Clear cache and reload page
4. Check console

**Expected Results:**
- ✅ Console shows: "Skipping invalid row: X"
- ✅ Valid announcements still display
- ✅ Invalid row is skipped without breaking page
- ✅ No JavaScript errors

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Test Suite 6: Cross-Browser Testing

### Test 6.1: Google Chrome
**Browser Version:** _____________

**Steps:**
1. Open homepage in Chrome
2. Perform Tests 1.1, 3.1, 3.4, 4.1

**Expected Results:**
- ✅ All features work correctly
- ✅ No console errors
- ✅ Animations are smooth

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 6.2: Mozilla Firefox
**Browser Version:** _____________

**Steps:**
1. Open homepage in Firefox
2. Perform Tests 1.1, 3.1, 3.4, 4.1

**Expected Results:**
- ✅ All features work correctly
- ✅ No console errors
- ✅ Animations are smooth

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 6.3: Safari (macOS/iOS)
**Browser Version:** _____________

**Steps:**
1. Open homepage in Safari
2. Perform Tests 1.1, 3.1, 3.4, 4.1

**Expected Results:**
- ✅ All features work correctly
- ✅ No console errors
- ✅ Animations are smooth

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 6.4: Microsoft Edge
**Browser Version:** _____________

**Steps:**
1. Open homepage in Edge
2. Perform Tests 1.1, 3.1, 3.4, 4.1

**Expected Results:**
- ✅ All features work correctly
- ✅ No console errors
- ✅ Animations are smooth

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Test Suite 7: Console Messages Verification

### Test 7.1: Successful Initialization
**Objective:** Verify correct console messages on success

**Steps:**
1. Clear cache
2. Load page
3. Check console messages

**Expected Results:**
- ✅ "Google Sheets'ten veri çekiliyor..." appears
- ✅ "X duyuru Google Sheets'ten yüklendi" appears (X = number of announcements)
- ✅ "✅ X duyuru Google Sheets'ten yüklendi" appears
- ✅ No error messages

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 7.2: Cache Hit Messages
**Objective:** Verify console messages when using cache

**Steps:**
1. Load page (cache populated)
2. Refresh page
3. Check console

**Expected Results:**
- ✅ "Google Sheets verileri cache'ten yüklendi" appears
- ✅ No API request messages

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Test Suite 8: Data Validation

### Test 8.1: Date Format Parsing
**Objective:** Verify different date formats are parsed correctly

**Steps:**
1. In Google Sheets, add announcements with:
   - DD/MM/YYYY format (e.g., 15/01/2025)
   - YYYY-MM-DD format (e.g., 2025-01-15)
   - Date() format from Google Sheets
2. Clear cache and reload page

**Expected Results:**
- ✅ All date formats are parsed correctly
- ✅ Dates display in Turkish format (e.g., "15 Ocak 2025")
- ✅ Sorting works correctly regardless of input format

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 8.2: Time Format Parsing
**Objective:** Verify time formats are normalized

**Steps:**
1. In Google Sheets, add announcements with:
   - HH:MM format (e.g., 09:30)
   - Single digit hour (e.g., 9)
2. Clear cache and reload page

**Expected Results:**
- ✅ All times display in HH:MM format
- ✅ Single digit hours are padded (9 becomes 09:00)

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

### Test 8.3: Title and Summary Length
**Objective:** Verify validation of title and summary lengths

**Steps:**
1. Check that titles don't exceed 200 characters
2. Check that summaries don't exceed 150 characters
3. Observe display on cards

**Expected Results:**
- ✅ Titles display correctly (max 200 chars)
- ✅ Summaries display correctly (max 150 chars)
- ✅ No text overflow issues

**Status:** [ ] Pass [ ] Fail

**Notes:**
_______________________________________

---

## Summary

### Overall Test Results
- **Total Tests:** 28
- **Passed:** _____
- **Failed:** _____
- **Skipped:** _____

### Critical Issues Found
1. _______________________________________
2. _______________________________________
3. _______________________________________

### Minor Issues Found
1. _______________________________________
2. _______________________________________
3. _______________________________________

### Recommendations
_______________________________________
_______________________________________
_______________________________________

### Tester Information
- **Name:** _______________________________________
- **Date:** _______________________________________
- **Environment:** _______________________________________

---

## Quick Reference: Console Commands

### Clear Cache
```javascript
localStorage.removeItem('google_sheets_announcements_cache');
localStorage.removeItem('google_sheets_last_fetch');
console.log('Cache cleared');
```

### Force Refresh from Google Sheets
```javascript
const sheetsIntegration = new GoogleSheetsIntegration('1FXAumUTfYi0Q4XInTnF4oext2YobLw2rm3DoNsQHwJ0');
sheetsIntegration.clearCache();
location.reload();
```

### Check Cache Status
```javascript
const cached = localStorage.getItem('google_sheets_announcements_cache');
const lastFetch = localStorage.getItem('google_sheets_last_fetch');
console.log('Cached data:', cached ? JSON.parse(cached) : 'No cache');
console.log('Last fetch:', lastFetch ? new Date(parseInt(lastFetch)) : 'Never');
```

### Manually Trigger Announcement Rendering
```javascript
renderAnnouncements();
```

---

## Notes
- This testing guide covers all requirements from the specification
- Each test should be performed in order for best results
- Document any deviations or unexpected behavior in the Notes sections
- Take screenshots of any issues for bug reports

# KVKK Aydınlatma Metni - Manual Test Guide

## Test Overview
This document provides manual testing instructions for the KVKK Aydınlatma Metni (GDPR Consent) component.

## Prerequisites
1. Open `index.html` in a web browser
2. Navigate to the "Anketler" (Surveys) section
3. Select any survey to open the form

## Test Cases

### Test 1: KVKK Component Rendering
**Expected Result:** KVKK component should be visible with all required sections

**Steps:**
1. Open a survey form
2. Scroll to the bottom of the form
3. Verify the following elements are present:
   - KVKK title: "KVKK Aydınlatma Metni"
   - Scrollable content box with KVKK text
   - Checkbox with consent label
   - Submit button (initially disabled)

**Pass Criteria:**
- ✓ All elements are visible
- ✓ KVKK text is readable and properly formatted
- ✓ Checkbox is unchecked by default
- ✓ Submit button is disabled by default

### Test 2: KVKK Content Completeness
**Expected Result:** KVKK text should contain all required information

**Steps:**
1. Read the KVKK text in the scrollable box
2. Verify it contains the following sections:
   - Veri Sorumlusu (Data Controller)
   - Veri Toplama Amacı (Data Collection Purpose)
   - Veri İşleme ve Kullanım (Data Processing and Usage)
   - Veri Saklama (Data Storage)
   - Haklarınız (Your Rights)

**Pass Criteria:**
- ✓ All five sections are present
- ✓ Text is in Turkish
- ✓ Content is clear and informative

### Test 3: Submit Button State Management
**Expected Result:** Submit button should be enabled only when KVKK checkbox is checked

**Steps:**
1. Verify submit button is disabled initially
2. Check the KVKK consent checkbox
3. Verify submit button becomes enabled
4. Uncheck the KVKK consent checkbox
5. Verify submit button becomes disabled again

**Pass Criteria:**
- ✓ Button is disabled when checkbox is unchecked
- ✓ Button is enabled when checkbox is checked
- ✓ State changes immediately when checkbox is toggled

### Test 4: Form Validation Without KVKK Consent
**Expected Result:** Form submission should be blocked without KVKK consent

**Steps:**
1. Fill in all required form fields (Ad, Soyad, Bölüm-Sınıf, E-posta)
2. Leave KVKK checkbox unchecked
3. Try to click the submit button (it should be disabled)
4. Check the KVKK checkbox
5. Uncheck it again
6. Verify error message appears

**Pass Criteria:**
- ✓ Submit button remains disabled without consent
- ✓ Error message is displayed when validation fails
- ✓ Error message text: "KVKK aydınlatma metnini kabul etmelisiniz"

### Test 5: Form Validation With KVKK Consent
**Expected Result:** Form should validate successfully with KVKK consent

**Steps:**
1. Fill in all required form fields correctly
2. Check the KVKK consent checkbox
3. Verify submit button is enabled
4. Click submit button
5. Verify no KVKK-related error messages appear

**Pass Criteria:**
- ✓ Submit button is enabled
- ✓ No error messages for KVKK consent
- ✓ Form proceeds to submission (webhook call)

### Test 6: KVKK Text Scrollability
**Expected Result:** KVKK text should be scrollable if content exceeds container height

**Steps:**
1. Observe the KVKK content box
2. Verify it has a maximum height (300px)
3. Try scrolling within the content box
4. Verify all content is accessible

**Pass Criteria:**
- ✓ Content box has scrollbar if needed
- ✓ All text is readable by scrolling
- ✓ Scrolling is smooth

### Test 7: Visual Styling
**Expected Result:** KVKK component should have proper styling

**Steps:**
1. Verify the KVKK section has:
   - Light background color
   - Border around the component
   - Proper spacing and padding
   - Clear visual hierarchy
2. Hover over the checkbox area
3. Verify hover effect is visible

**Pass Criteria:**
- ✓ Component is visually distinct from other form elements
- ✓ Colors match the site's color palette (turquoise/orange)
- ✓ Hover effects work properly
- ✓ Text is readable with good contrast

## Requirements Validation

### Requirement 6.1
✓ KVKK Aydınlatma Metni is presented before the submit button

### Requirement 6.2
✓ Form submission is prevented if KVKK checkbox is not checked

### Requirement 6.3
✓ Aydınlatma Metni provides clear information about:
  - Data collection (what data is collected)
  - Data usage (how data will be used)
  - Data storage (how data will be stored)

## Test Results
- [ ] All tests passed
- [ ] Some tests failed (document failures below)

## Notes
Add any observations or issues found during testing:

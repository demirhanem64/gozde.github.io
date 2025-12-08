# Quick Start: Running Property-Based Tests

## ✅ Task 2.1: Color Palette Consistency Test

**Status:** Implemented and ready to run  
**Test File:** `tests/color-palette-property.test.html`

### How to Run (Simple - 2 Steps)

1. **Open the test file in your browser:**
   - Navigate to: `tests/color-palette-property.test.html`
   - Double-click the file, or
   - Right-click → Open with → Your browser (Chrome, Firefox, Edge, etc.)

2. **View the results:**
   - The test runs automatically when the page loads
   - Look for green ✓ (PASS) or red ✗ (FAIL) indicators
   - Check the summary at the bottom for overall results

### What to Expect

The test should show **4 passing tests**:

1. ✓ CSS Variables match defined palette
2. ✓ Body background color is in palette  
3. ✓ Text elements use palette colors
4. ✓ Property test: 100 random element checks

### If Tests Fail

If any test shows red ✗ FAIL:

1. Read the error details shown below the test name
2. Check which color is causing the issue
3. Verify that color is defined in `css/variables.css`
4. Make sure no hardcoded colors are used outside the palette

### Test Details

- **Property tested:** Color Palette Consistency
- **Validates:** Requirements 1.1
- **Iterations:** 100+ random checks
- **Coverage:** All UI elements (nav, buttons, cards, backgrounds, text)

### Color Palette Reference

All colors should be from this palette:
- Turquoise: #0891b2, #06b6d4, #0e7490
- Orange: #f97316, #fb923c, #ea580c
- Neutrals: #f0fdfa, #fff7ed, #0f172a, #64748b, #ffffff
- Semantic: #10b981, #ef4444, #f59e0b

---

**Need help?** See `tests/run-tests.md` for detailed instructions.

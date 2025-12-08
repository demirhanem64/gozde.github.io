# How to Run Property-Based Tests

## Test: Color Palette Consistency (Property 1)

**Status:** ✅ Implemented  
**Feature:** gozde-eksi-portfolio-website  
**Property:** Property 1: Color Palette Consistency  
**Validates:** Requirements 1.1  

### Running the Test

**Option 1: Browser-Based Test (Recommended)**

1. Navigate to the project directory
2. Open `tests/color-palette-property.test.html` in any modern web browser:
   - Right-click the file → Open with → Choose your browser
   - Or drag and drop the file into a browser window
3. The test will run automatically
4. View results on the page:
   - ✓ Green = Test passed
   - ✗ Red = Test failed

**Option 2: Command Line (Requires Node.js)**

If Node.js and npm are installed:

```bash
npm install
npm test
```

### What This Test Validates

The property-based test verifies that:

1. **CSS Variables Match Palette**: All CSS custom properties (--color-*) match the defined color palette
2. **Body Background**: The body background color is from the palette
3. **Text Colors**: All text elements (h1, h2, p, a) use palette colors
4. **Random Element Checks**: 100 iterations of random element selection to verify all computed colors are in the palette

### Expected Results

All tests should **PASS** because:
- The `css/variables.css` file defines the correct color palette
- The `css/base.css` file uses CSS variables from the palette
- No hardcoded colors outside the palette are used

### Color Palette Reference

From Requirements 1.1:

**Primary Colors:**
- Turquoise: #0891b2
- Turquoise Light: #06b6d4
- Turquoise Dark: #0e7490

**Secondary Colors:**
- Orange: #f97316
- Orange Light: #fb923c
- Orange Dark: #ea580c

**Neutral Colors:**
- Background: #f0fdfa
- Background Alt: #fff7ed
- Text: #0f172a
- Text Light: #64748b
- White: #ffffff

**Semantic Colors:**
- Success: #10b981
- Error: #ef4444
- Warning: #f59e0b

### Troubleshooting

**If tests fail:**

1. Check that all CSS files are loaded correctly
2. Verify no inline styles with hardcoded colors
3. Check browser console for errors
4. Ensure CSS variables are defined in `css/variables.css`

**Common issues:**

- Browser caching: Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- File paths: Ensure the test file can access CSS files (relative paths)
- CSS not loaded: Check browser network tab

### Test Implementation Details

The test uses:
- **Property-based testing**: Tests universal properties across many inputs
- **100+ iterations**: Each property is tested multiple times with different selectors
- **Color normalization**: Handles rgb(), rgba(), and hex color formats
- **Computed styles**: Tests actual rendered colors, not just CSS source

This ensures comprehensive coverage and catches edge cases that example-based tests might miss.

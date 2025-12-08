# Running External Link Behavior Property Test

## Quick Start

**Test File:** `tests/external-links-property.test.html`

### How to Run

1. **Open the test file in your browser:**
   - Navigate to the `tests` folder
   - Double-click `external-links-property.test.html`, or
   - Right-click → Open with → Your browser (Chrome, Firefox, Edge, Safari, etc.)

2. **View the results:**
   - The test runs automatically when the page loads
   - Look for green ✓ (PASS) or red ✗ (FAIL) indicators
   - Check the summary at the bottom for overall results

### What This Test Validates

**Property 5: External Link Behavior**  
**Validates: Requirements 4.3**

> For any external link (social media, university website), the link should have target="_blank" and rel="noopener noreferrer" attributes to open in a new tab securely.

### Test Coverage

The test includes 12 comprehensive checks:

1. ✓ All external links have `target="_blank"` attribute
2. ✓ All external links have `rel="noopener noreferrer"` attribute
3. ✓ Instagram link has correct security attributes
4. ✓ Facebook link has correct security attributes
5. ✓ Internal navigation links do NOT have `target="_blank"`
6. ✓ All links with `target="_blank"` have proper rel attribute
7. ✓ External links prevent window.opener access
8. ✓ Property test: 100 random external link checks
9. ✓ Social media links are correctly identified and secured
10. ✓ External and internal links are correctly distinguished
11. ✓ Dynamically created external links maintain security attributes
12. ✓ External links have accessible labels

### Expected Results

All 12 tests should pass (green checkmarks) with a 100% pass rate.

### Why This Matters

**Security:** The `rel="noopener noreferrer"` attribute prevents:
- **Tabnabbing attacks:** External sites cannot access `window.opener` to redirect your page
- **Referrer leakage:** Prevents sending referrer information to external sites

**User Experience:** The `target="_blank"` attribute:
- Opens external links in a new tab
- Keeps users on your site while allowing them to explore external resources

### If Tests Fail

If any test shows red ✗ FAIL:

1. **Read the error details** shown below the test name
2. **Check the HTML** in `index.html` for external links:
   - Instagram link: `https://www.instagram.com/gozdeksii`
   - Facebook link: `https://www.facebook.com/share/1FgoxGv3SZ/`
3. **Verify attributes:**
   ```html
   <a href="https://www.instagram.com/gozdeksii" 
      target="_blank" 
      rel="noopener noreferrer">
   ```
4. **Fix any missing attributes** and re-run the test

### Current Implementation

The test validates the existing external links in the contact section:

```html
<!-- Instagram Link -->
<a href="https://www.instagram.com/gozdeksii" 
   class="social-link instagram" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Instagram profilimi ziyaret edin">
    <span class="social-icon">📷</span>
    <span class="social-name">Instagram</span>
    <span class="social-handle">@gozdeksii</span>
</a>

<!-- Facebook Link -->
<a href="https://www.facebook.com/share/1FgoxGv3SZ/" 
   class="social-link facebook" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Facebook profilimi ziyaret edin">
    <span class="social-icon">👥</span>
    <span class="social-name">Facebook</span>
    <span class="social-handle">Gözde Ekşi</span>
</a>
```

### Property-Based Testing

This test uses property-based testing principles:
- **100+ iterations** with random selections
- **Universal properties** that must hold for ALL external links
- **Comprehensive coverage** of edge cases and scenarios

### Browser Compatibility

This test works in all modern browsers:
- ✓ Chrome/Edge (Chromium)
- ✓ Firefox
- ✓ Safari
- ✓ Opera

### Next Steps

After confirming all tests pass:
1. Mark task 6.1 as complete in `tasks.md`
2. Proceed to task 7: "Üniversitem sayfasını oluştur"
3. Ensure any future external links follow the same pattern

---

**Need help?** See `tests/README.md` for more information about all property tests.

# Accessibility Testing Checklist

## Quick Start
1. Open `test-accessibility.html` in your browser
2. Follow the test instructions on the page
3. Use this checklist to verify each feature

## ✅ Keyboard Navigation

### Tab Key Navigation
- [ ] Press Tab repeatedly - focus moves through all interactive elements
- [ ] Focus indicator (orange outline) is visible on each element
- [ ] Tab order is logical and follows visual layout
- [ ] No elements are skipped
- [ ] No keyboard traps (can Tab out of all elements)

### Shift+Tab Navigation
- [ ] Press Shift+Tab - focus moves backward through elements
- [ ] Works consistently in reverse order

### Enter Key Activation
- [ ] Press Enter on buttons - buttons activate
- [ ] Press Enter on links - links navigate
- [ ] Press Enter on cards - cards activate (if clickable)

### Space Key Activation
- [ ] Press Space on buttons - buttons activate
- [ ] Press Space on checkboxes - checkboxes toggle

### Escape Key
- [ ] Press Escape when popup is open - popup closes
- [ ] Press Escape when mobile menu is open - menu closes

## ✅ Focus Indicators

### Visual Appearance
- [ ] Focus outline is orange (#f97316)
- [ ] Focus outline is 3px thick
- [ ] Focus outline has 3px offset from element
- [ ] Focus outline is visible on all backgrounds

### Elements with Focus Indicators
- [ ] Buttons (primary and secondary)
- [ ] Links (navigation and content)
- [ ] Form inputs (text, email, checkbox)
- [ ] Cards (survey cards, info cards)
- [ ] Mobile menu toggle
- [ ] Popup close buttons

## ✅ ARIA Labels and Attributes

### Navigation
- [ ] `<nav>` has `aria-label="Ana navigasyon"`
- [ ] Mobile menu toggle has `aria-label`
- [ ] Mobile menu toggle has `aria-expanded` (true/false)

### Forms
- [ ] Required inputs have `aria-required="true"`
- [ ] Inputs have `aria-describedby` linking to error messages
- [ ] Invalid inputs have `aria-invalid="true"`
- [ ] Valid inputs have `aria-invalid="false"`
- [ ] KVKK checkbox has `aria-describedby`

### Popups/Modals
- [ ] Popups have `role="dialog"`
- [ ] Popups have `aria-modal="true"`
- [ ] Popups have `aria-labelledby` (links to title)
- [ ] Popups have `aria-describedby` (links to message)

### Cards
- [ ] Survey cards have `role="button"`
- [ ] Survey cards have descriptive `aria-label`
- [ ] Cards have `tabindex="0"` (keyboard focusable)

### External Links
- [ ] External links have `target="_blank"`
- [ ] External links have `rel="noopener noreferrer"`
- [ ] External links have descriptive `aria-label`

## ✅ Screen Reader Support

### Test with Screen Reader (NVDA/JAWS/VoiceOver)
- [ ] All headings are announced correctly
- [ ] All buttons are announced with their labels
- [ ] All links are announced with their text
- [ ] Form labels are associated with inputs
- [ ] Error messages are announced
- [ ] Success messages are announced
- [ ] KVKK consent text is readable

### Live Regions
- [ ] Success messages are announced automatically
- [ ] Error messages are announced automatically
- [ ] Form submission status is announced

### Semantic HTML
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Sections have appropriate landmarks
- [ ] Lists are properly marked up

## ✅ Color Contrast

### Text Contrast (WCAG AA: 4.5:1 for normal text)
- [ ] Body text on white background: Pass
- [ ] White text on turquoise background: Pass
- [ ] White text on orange background: Pass
- [ ] Form labels: Pass
- [ ] Error messages: Pass
- [ ] Link text: Pass

### Non-Text Contrast (WCAG AA: 3:1)
- [ ] Button borders: Pass
- [ ] Form input borders: Pass
- [ ] Focus indicators: Pass
- [ ] Card borders: Pass

### Tools to Use
- Chrome DevTools Lighthouse
- WebAIM Contrast Checker
- axe DevTools

## ✅ Skip to Main Content

### Functionality
- [ ] Reload page and press Tab once
- [ ] "Ana içeriğe atla" link appears
- [ ] Link is visible and styled
- [ ] Clicking link jumps to main content
- [ ] Main content receives focus

## ✅ Focus Management

### Modal/Popup Focus
- [ ] Open popup - focus moves to popup
- [ ] Tab within popup - focus stays in popup
- [ ] Tab at last element - focus cycles to first element
- [ ] Shift+Tab at first element - focus cycles to last element
- [ ] Close popup - focus returns to trigger element

### No Focus Loss
- [ ] Focus is never lost during navigation
- [ ] Focus is always visible
- [ ] Focus position is logical

## ✅ Touch Target Sizes

### Minimum Size (44x44px)
- [ ] All buttons are at least 44x44px
- [ ] All links are at least 44x44px
- [ ] Checkboxes are at least 24x24px (with padding)
- [ ] Mobile menu toggle is large enough
- [ ] Card click areas are adequate

### Mobile Testing
- [ ] Test on actual mobile device
- [ ] All targets are easy to tap
- [ ] No accidental taps on nearby elements

## ✅ Reduced Motion Support

### Enable Reduced Motion
**Windows**: Settings → Accessibility → Visual effects → Animation effects OFF
**macOS**: System Preferences → Accessibility → Display → Reduce motion ON

### Verify
- [ ] Hover animations are disabled
- [ ] Transform animations are disabled
- [ ] Scroll animations are disabled
- [ ] Essential feedback is maintained
- [ ] Page is still usable

## ✅ High Contrast Mode

### Enable High Contrast
**Windows**: Settings → Accessibility → Contrast themes
**macOS**: System Preferences → Accessibility → Display → Increase contrast

### Verify
- [ ] Text is readable
- [ ] Borders are visible
- [ ] Focus indicators are stronger
- [ ] All content is accessible

## ✅ Form Accessibility

### Form Labels
- [ ] All inputs have associated labels
- [ ] Labels are visible
- [ ] Labels are clickable (focus input)

### Required Fields
- [ ] Required fields are marked with *
- [ ] Required fields have `aria-required="true"`

### Error Messages
- [ ] Errors appear below fields
- [ ] Errors are linked with `aria-describedby`
- [ ] Errors are announced to screen readers
- [ ] Error text is clear and helpful

### Validation
- [ ] Real-time validation works
- [ ] Validation doesn't interfere with typing
- [ ] Valid fields are indicated
- [ ] Invalid fields are indicated

## ✅ Responsive Design

### Mobile (< 768px)
- [ ] All features work on mobile
- [ ] Touch targets are adequate
- [ ] Mobile menu is accessible
- [ ] Forms are usable

### Tablet (768-1024px)
- [ ] Layout adapts appropriately
- [ ] All features remain accessible

### Desktop (> 1024px)
- [ ] Full functionality available
- [ ] Optimal layout and spacing

## Browser Testing

### Chrome/Edge
- [ ] All features work
- [ ] No console errors
- [ ] Lighthouse score > 90

### Firefox
- [ ] All features work
- [ ] No console errors

### Safari
- [ ] All features work
- [ ] No console errors

### Mobile Browsers
- [ ] iOS Safari works
- [ ] Chrome Mobile works
- [ ] Touch interactions work

## Automated Testing

### Lighthouse (Chrome DevTools)
- [ ] Run Lighthouse audit
- [ ] Accessibility score > 90
- [ ] Review and fix any issues

### axe DevTools
- [ ] Install axe DevTools extension
- [ ] Run full page scan
- [ ] Review and fix any issues

### WAVE
- [ ] Visit wave.webaim.org
- [ ] Enter site URL
- [ ] Review and fix any issues

## Final Verification

### Overall Experience
- [ ] Site is fully keyboard accessible
- [ ] Site works with screen readers
- [ ] Color contrast is sufficient
- [ ] Focus is always visible
- [ ] No keyboard traps
- [ ] All interactive elements are accessible
- [ ] Error messages are helpful
- [ ] Success feedback is clear

### WCAG 2.1 Level AA
- [ ] All Level A criteria met
- [ ] All Level AA criteria met
- [ ] Documentation is complete

## Sign-Off

**Tested By**: _________________

**Date**: _________________

**Browser/OS**: _________________

**Screen Reader** (if applicable): _________________

**Issues Found**: _________________

**Status**: ☐ Pass ☐ Fail ☐ Needs Review

## Notes

_Use this space for additional notes or observations:_

---

**Next Steps**: If any issues are found, document them and create tasks to address them.

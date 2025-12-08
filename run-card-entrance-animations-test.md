# Card Entrance Animations Property Test

## Test Information

**Feature:** gozde-eksi-portfolio-website, Property 22: Card Entrance Animations  
**Validates:** Requirements 9.4  
**Property:** For any card or section element, when it enters the viewport or is rendered, it should have an entrance animation (fade, slide, scale).

## How to Run the Test

1. Open `tests/card-entrance-animations-property.test.html` in a web browser
2. Click the "Run Property Test" button
3. Wait for all 100+ test iterations to complete
4. Review the test results

## What This Test Validates

This property-based test verifies that:

1. **Card Elements Have Entrance Animations**: All card types (survey-card, contact-card, info-card, expertise-item, bio-section, campus-item) have entrance animations applied
2. **Stagger Classes Are Applied**: Each card receives a stagger delay class (card-stagger-1 through card-stagger-8)
3. **Animation CSS Is Defined**: The cardEnter animation is properly defined in CSS
4. **Stagger Delays Are Progressive**: Delays increase progressively (0.1s, 0.2s, 0.3s, etc.)
5. **Animation Properties Are Valid**: Animation name is "cardEnter" and duration is greater than 0

## Expected Results

✅ **All tests should pass** if:
- Card elements receive entrance animation classes
- Stagger delay classes are applied based on card index
- The cardEnter CSS animation is defined
- Animation delays increase progressively
- Animation duration is reasonable (0.3s - 1.5s)

## Test Coverage

- **100 iterations** testing random card types
- **2 special tests** for CSS animation and stagger progression
- **Total: 102 tests**

## Card Types Tested

- `.survey-card` - Survey selection cards
- `.contact-card` - Contact information cards
- `.info-card` - Information display cards
- `.expertise-item` - Expertise list items
- `.bio-section` - Biography sections
- `.campus-item` - Campus information items

## Animation Requirements

According to the design document, card entrance animations should:
- Include fade, slide, and scale effects
- Use staggered timing (0.1s increments)
- Trigger when cards enter the viewport
- Use the Intersection Observer API
- Have reasonable animation duration (0.6s)
- Use ease-out timing function

## Troubleshooting

If tests fail:

1. **Check CSS**: Ensure `css/animations.css` defines the `cardEnter` animation
2. **Check JavaScript**: Ensure `js/animations.js` initializes card entrance animations
3. **Check Stagger Classes**: Verify stagger delay classes are defined in CSS
4. **Check Animation Controller**: Ensure AnimationController applies stagger classes to cards
5. **Check Browser Console**: Look for any JavaScript errors

## Related Files

- `css/animations.css` - Animation definitions
- `js/animations.js` - Animation controller
- `test-card-entrance-animations.html` - Manual visual test
- `__tests__/card-entrance-animations.test.js` - Jest unit test

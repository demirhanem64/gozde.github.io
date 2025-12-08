# Running the Unique Webhook URLs Property Test

## Test Information

**Property:** Property 25 - Unique Webhook URLs  
**Feature:** gozde-eksi-portfolio-website  
**Validates:** Requirements 10.4  

**Property Statement:**  
*For any* two different surveys (survey1, survey2), their webhook URLs should be distinct (gozdeanket1 vs gozdeanket2).

## How to Run

1. Open `tests/unique-webhook-urls-property.test.html` in a web browser
2. The test will run automatically and display results
3. Check for green (PASS) or red (FAIL) indicators

## What This Test Validates

This property-based test verifies that:

1. **Pairwise Uniqueness**: For any two different surveys selected randomly, their webhook URLs are different (100 iterations)

2. **Set Uniqueness**: All webhook URLs in the surveys collection form a unique set with no duplicates

3. **Pattern Compliance**: Each webhook URL follows the expected pattern: `https://demirhanem.com.tr/webhook/gozdeanket{N}`

4. **Consistent Numbering**: The number in the survey ID matches the number in the webhook URL (e.g., `gozdeanket1` → `.../webhook/gozdeanket1`)

5. **Future Extensibility**: Simulated addition of new surveys maintains uniqueness (100 iterations with different survey numbers)

6. **Actual Data Verification**: The actual survey data in `data/surveys.json` has unique webhook URLs

## Expected Results

All 5 test cases should pass:
- ✅ Test 1: All surveys have unique webhook URLs (100 iterations)
- ✅ Test 2: Webhook URLs follow pattern and are unique
- ✅ Test 3: Survey IDs and webhook URLs have consistent numbering (100 iterations)
- ✅ Test 4: Adding new surveys maintains uniqueness (100 iterations)
- ✅ Test 5: Verify actual survey data has unique URLs

## Current Survey Configuration

The test validates against the surveys defined in `data/surveys.json`:
- gozdeanket1: https://demirhanem.com.tr/webhook/gozdeanket1
- gozdeanket2: https://demirhanem.com.tr/webhook/gozdeanket2
- gozdeanket3: https://demirhanem.com.tr/webhook/gozdeanket3

## Why This Property Matters

Unique webhook URLs are critical because:
- Each survey needs its own endpoint to route responses correctly
- Duplicate URLs would cause data to be mixed between different surveys
- The system relies on URL uniqueness to maintain data integrity
- Future surveys must not conflict with existing webhook endpoints

## Property-Based Testing Approach

This test uses property-based testing with 100+ iterations to verify:
- The property holds for random pairs of surveys
- The property holds when simulating future survey additions
- The property is maintained across the entire survey collection

This provides stronger guarantees than testing specific examples alone.

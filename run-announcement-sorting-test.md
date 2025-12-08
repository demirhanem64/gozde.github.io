# Run Announcement Sorting Property Test

## Test Information
- **Property**: Property 5 - Announcement sorting invariant
- **Validates**: Requirements 3.3
- **Feature**: portfolio-improvements

## Property Statement
*For any* list of announcements, they should always be sorted by date in descending order (newest first).

## How to Run the Test

### Browser-Based Test (Recommended)
1. Open `tests/announcement-sorting-property.test.html` in a web browser
2. The test will run automatically when the page loads
3. View the results on the page

### Command Line Test (Requires Node.js)
```bash
npm test -- __tests__/announcement-sorting.test.js --run
```

## Test Coverage

The property test includes 6 test cases:

1. **Announcements are always sorted by date descending (newest first)**
   - Generates random sets of 2-15 announcements
   - Verifies sorting order is maintained
   - Verifies sorting is stable (consistent across multiple calls)
   - Runs 100 iterations

2. **Sorting is maintained after adding new announcements**
   - Creates initial set of 3-10 announcements
   - Adds a new random announcement
   - Verifies sorting order is still correct
   - Runs 100 iterations

3. **Sorting handles announcements with same date but different times**
   - Creates 3-8 announcements with the same date
   - Each has a different random time
   - Verifies time-based sorting when dates are equal
   - Runs 100 iterations

4. **Empty list returns empty sorted list**
   - Tests edge case of empty announcement list
   - Runs 1 iteration

5. **Single announcement returns list with one item**
   - Tests edge case of single announcement
   - Runs 100 iterations

6. **Sorting does not modify original announcements array**
   - Verifies that getSortedByDate() returns a new array
   - Original array order should remain unchanged
   - Runs 100 iterations

## Expected Results

All 6 tests should pass with the following output:
- ✅ Test 1: PASSED - 100 iterations completed successfully
- ✅ Test 2: PASSED - 100 iterations completed successfully
- ✅ Test 3: PASSED - 100 iterations completed successfully
- ✅ Test 4: PASSED - 1 iterations completed successfully
- ✅ Test 5: PASSED - 100 iterations completed successfully
- ✅ Test 6: PASSED - 100 iterations completed successfully

## What This Test Validates

This property test validates Requirement 3.3:
> WHEN örnek duyurular listelediğinde THEN sistem duyuruları tarih sırasına göre (en yeni en üstte) göstermeli

The test ensures that:
- Announcements are always sorted by date in descending order (newest first)
- When dates are equal, announcements are sorted by time in descending order
- Sorting is stable and consistent
- Sorting does not mutate the original data
- Edge cases (empty list, single item) are handled correctly
- Sorting is maintained even after adding new announcements

## Implementation Details

The test uses a simple property-based testing framework that:
- Generates random announcement data (dates, times, titles, content)
- Creates multiple announcements with varied dates and times
- Verifies the sorting invariant holds across all generated data
- Runs 100 iterations per test to ensure robustness
- Tests edge cases and boundary conditions

## Files
- **Test File**: `tests/announcement-sorting-property.test.html`
- **Jest Test**: `__tests__/announcement-sorting.test.js`
- **Implementation**: `js/announcements.js` (AnnouncementManager.getSortedByDate())

# Task 3.1: Announcement Sorting Property Test

## Overview
This document describes the property-based test implementation for announcement sorting (Property 5).

## Test File
- **Location**: `__tests__/announcement-sorting.test.js`
- **Property**: Property 5 - Announcement sorting invariant
- **Validates**: Requirements 3.3

## Property Definition
**Property 5: Announcement sorting invariant**
*For any* list of announcements, they should always be sorted by date in descending order (newest first)

## Test Implementation

### Test Suite Structure
The test suite includes 6 comprehensive test cases:

#### 1. Main Sorting Property Test
**Purpose**: Verify announcements are always sorted by date descending (newest first)
- Generates 2-15 random announcements with varied dates and times
- Creates all announcements in the manager
- Calls `getSortedByDate()` to get sorted list
- Verifies each announcement is >= the next one (newer or equal)
- Verifies sorting is stable (multiple calls return same order)
- **Iterations**: 100

#### 2. Sorting After Addition Test
**Purpose**: Verify sorting is maintained after adding new announcements
- Generates 3-10 initial announcements
- Generates 1 new announcement to add
- Adds new announcement to existing set
- Verifies sorting order is still maintained
- **Iterations**: 100

#### 3. Same Date Different Times Test
**Purpose**: Verify sorting handles announcements with same date but different times
- Generates a common date
- Generates 3-8 different times
- Creates announcements with same date but different times
- Verifies time-based sorting when dates are equal
- **Iterations**: 100

#### 4. Empty List Test
**Purpose**: Verify empty list returns empty sorted list
- Creates manager with no announcements
- Calls `getSortedByDate()`
- Verifies empty array is returned

#### 5. Single Announcement Test
**Purpose**: Verify single announcement returns list with one item
- Generates 1 random announcement
- Creates announcement in manager
- Verifies sorted list contains exactly 1 item
- **Iterations**: 100

#### 6. Non-Mutating Sort Test
**Purpose**: Verify sorting does not modify original announcements array
- Generates 3-10 random announcements
- Records original order of IDs
- Calls `getSortedByDate()`
- Verifies original order is unchanged
- **Iterations**: 100

## Test Configuration

### Fast-check Configuration
```javascript
fc.assert(
  fc.property(
    // generators...
    (data) => {
      // test logic...
    }
  ),
  { numRuns: 100 } // 100 iterations as specified in design
);
```

### Data Generators
```javascript
// Announcement generator
fc.record({
  title: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  date: fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31') })
    .map(d => d.toISOString().split('T')[0]), // YYYY-MM-DD format
  time: fc.tuple(
    fc.integer({ min: 0, max: 23 }),
    fc.integer({ min: 0, max: 59 })
  ).map(([h, m]) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`), // HH:MM format
  summary: fc.string({ minLength: 1, maxLength: 150 }).filter(s => s.trim().length > 0),
  content: fc.string({ minLength: 1, maxLength: 1000 }).filter(s => s.trim().length > 0),
  isActive: fc.boolean()
})
```

## Verification Logic

### Sorting Verification
```javascript
for (let i = 0; i < sortedAnnouncements.length - 1; i++) {
  const current = sortedAnnouncements[i];
  const next = sortedAnnouncements[i + 1];
  
  const currentDateTime = `${current.date} ${current.time}`;
  const nextDateTime = `${next.date} ${next.time}`;
  
  // Current should be >= next (newer or equal)
  expect(currentDateTime >= nextDateTime).toBe(true);
}
```

### Stability Verification
```javascript
const sortedAgain = manager.getSortedByDate();
expect(sortedAgain.length).toBe(sortedAnnouncements.length);

for (let i = 0; i < sortedAnnouncements.length; i++) {
  expect(sortedAgain[i].id).toBe(sortedAnnouncements[i].id);
}
```

## Test Tagging
Each test includes the required comment tag:
```javascript
/**
 * Property-Based Test for Announcement Sorting
 * **Feature: portfolio-improvements, Property 5: Announcement sorting invariant**
 * **Validates: Requirements 3.3**
 * 
 * Property: For any list of announcements, they should always be sorted 
 * by date in descending order (newest first)
 */
```

## Edge Cases Covered

1. **Empty list**: Returns empty array
2. **Single item**: Returns array with one item
3. **Same dates, different times**: Sorts by time when dates are equal
4. **Random order input**: Always produces sorted output
5. **Multiple calls**: Sorting is stable and consistent
6. **Non-mutating**: Original array is not modified

## Running the Test

### Command
```bash
npm test -- __tests__/announcement-sorting.test.js
```

### Expected Output
```
PASS  __tests__/announcement-sorting.test.js
  Property 5: Announcement sorting invariant
    ✓ Announcements are always sorted by date descending (newest first)
    ✓ Sorting is maintained after adding new announcements
    ✓ Sorting handles announcements with same date but different times
    ✓ Empty list returns empty sorted list
    ✓ Single announcement returns list with one item
    ✓ Sorting does not modify original announcements array

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
```

## Implementation Verification

### Code Review Checklist
- ✅ Test file created at `__tests__/announcement-sorting.test.js`
- ✅ Proper test tagging with Feature and Property number
- ✅ 100 iterations configured for property tests
- ✅ Comprehensive generators for valid announcement data
- ✅ Main sorting property verified
- ✅ Edge cases covered (empty, single, same date)
- ✅ Stability and non-mutation verified
- ✅ No syntax errors (verified with getDiagnostics)
- ✅ Follows existing test patterns from announcement-uniqueness.test.js

### Manual Code Review
The test implementation:
1. Correctly imports fast-check and jest globals
2. Properly mocks localStorage for Node.js environment
3. Uses appropriate generators that match the data model
4. Verifies the core sorting property across 100 iterations
5. Tests edge cases and invariants
6. Follows the established testing patterns in the codebase

## Conclusion

✅ **Task 3.1 Complete**: Property test for announcement sorting has been implemented according to specifications.

The test:
- Validates Property 5 from the design document
- Verifies Requirements 3.3 (announcements sorted by date, newest first)
- Runs 100 iterations as specified
- Covers edge cases and invariants
- Follows the established testing patterns
- Is ready for execution when npm/node environment is available

**Note**: Test execution requires npm/node environment which is not available in the current system. The test has been verified for syntax correctness and logical soundness through code review.

## Task: Anagram Checker

### Description

Create a function that determines whether two strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity.

_Note: Ignore spaces and punctuation, and consider only lowercase characters._

**Examples:**

- `anagrams('rail safety', 'fairy tales')` -> `true`
- `anagrams('RAIL! SAFETY!', 'fairy tales')` -> `true`
- `anagrams('hi there', 'bye there')` -> `false`

### Pattern: Frequency Counter

This solution uses the **Frequency Counter** pattern. Instead of using nested loops (which would result in $O(n^2)$ time complexity), we use an object (hash map) to store the frequency of each character. This allows us to achieve a much more efficient linear time complexity of $O(n)$.

### Implementation Details

1. **Clean the strings:** Remove non-alphanumeric characters and convert to lowercase.
2. **Count frequencies:** Use a JavaScript object to map characters to their counts.
3. **Compare:** Verify if both maps are identical.

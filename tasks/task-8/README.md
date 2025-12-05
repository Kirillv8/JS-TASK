Challenge: Sum of Numbers in StringObjective:

Implement a function that takes a string $s$ containing both digits and non-digit characters and returns the total sum of all multi-digit numbers found within that string. Consecutive digits must be treated as a single number.

Key Conditions:

The function must correctly parse and sum numbers of any length (e.g., '1' and '123').

Non-digit characters (e.g., letters, symbols) act as delimiters (разделители) between numbers.

The input will always be a string.

Example Usage:

Input: abc123d4e

Found Numbers: 123, 4

Expected Output (Sum): 127

Input: 1a1b1c

Found Numbers: 1, 1, 1

Expected Output (Sum): 3

Input: test007string

Found Numbers: 7

Expected Output (Sum): 7

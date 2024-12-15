# Unexpected Null Handling in Addition Function

This repository demonstrates a subtle bug in a JavaScript function that handles null values in an unexpected way. The function `foo` is intended to add two numbers, but it returns `null` if either input is `null`. While this works as designed, it could lead to unexpected results with falsy values other than `null`.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a solution to address the unexpected behavior.

## Bug Description

The issue stems from a strict check for `null` values only.  The function doesn't account for other falsy values like `0`, `false`, or an empty string, which might also indicate invalid input in many practical scenarios. Therefore, the behavior may not align with expectations in scenarios where 0 or an empty string represent valid values and not an indication for the function to return null.

## Solution

The solution implements more robust input validation by checking if the values are numbers using `typeof`. This approach prevents unexpected behavior and improves the function's overall reliability.
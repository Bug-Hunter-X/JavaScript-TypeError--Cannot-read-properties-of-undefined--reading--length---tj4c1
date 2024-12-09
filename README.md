# JavaScript TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error and its solution. The `bug.js` file contains code that throws a `TypeError` when attempting to access the `length` property of a non-array or non-string value. The `bugSolution.js` file provides a corrected version with robust error handling.

## Bug Description
The original code lacks proper input validation, leading to a `TypeError` when the input is `undefined`, a number, or an object.  The solution implements type checking and default handling to prevent these errors.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` in your terminal. Observe the error messages.
3. Run `node bugSolution.js` to see the corrected output.

## Solution
The corrected code thoroughly checks the input type before attempting to access its `length` property, using `typeof` for type checking and providing a default value (0) when the input is invalid. 
// Problem Description
// Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// For an input string to be valid:

// Open brackets must be closed by the same type of brackets.( can be closed by ) only

// Open brackets must be closed in the correct order. ([]) is valid, ([)] is not.

// Note: An empty string is also considered valid.

// Input format
// One line containing a string with a bracket sequence.

// Output format
// Return "true" if balanced, false otherwise.

// Constraints
// 0 <= | S | <= 10^5

// Sample Input 1
// ()[]{}

// Sample Output 1
// true

// Explanation 1
// The given sequence of brackets is valid as per the rules specified.

// Sample Input 2
// ([)]

// Sample Output 2
// false

// Explanation 2
// The given sequence of brackets is invalid as per the rules specified.

function validParenthesis(s) {
  const stack = new Stack();
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      let top = stack.pop();

      if (top !== map[c]) {
        return false;
      }
    }
  }

  return stack.items.length === 0;
}

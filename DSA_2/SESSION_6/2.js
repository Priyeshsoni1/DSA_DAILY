// Problem Description
// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Input format
// A 32 bit integer N

// Output format
// A single integer

// Sample Input 1
// 12

// Sample Output 1
// 21

// Explanation
// There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

// Constraints
// 0<= N <= 10^9

function nextGreaterElementWithSameSetOfDigits(n) {
  // Convert the number to an array of digits
  let digits = n.toString().split("").map(Number);

  let i = digits.length - 2;

  // Step 2: Find the break-point (first decreasing element from the right)
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no break-point exists, return -1 (no larger number with same set of digits)
  if (i < 0) return -1;

  // Step 3: Find the smallest element greater than digits[i] to the right of index i
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Step 4: Swap digits[i] with digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Step 5: Reverse the right half of the array after index i
  let left = i + 1,
    right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  // Convert the digits back to a number
  return parseInt(digits.join(""));
  const result = parseInt(digits.join(""), 10);

  // Check if the result exceeds 32-bit integer limit
  return result > Math.pow(2, 31) - 1 ? -1 : result;
}

// Example usage
const n = 123476;
console.log(nextGreaterElementWithSameSetOfDigits(n)); // Output: 123647

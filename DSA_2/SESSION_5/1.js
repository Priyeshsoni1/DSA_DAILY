// Problem Description
// Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.

// If there is no such sub-array print -1.

// Input format
// There are 2 lines of input.

// First line contains an integer N.

// Next line consists of N integers, the values of the array.

// Output format
// Print the elements of the sub-array with spaces which have the largest length and sum of elements equal to zero.

// Sample Input 1
// 6

// 2 3 1 -4 0 6

// Sample Output 1
// 3 1 -4 0

// Explanation
// The largest subarray with sum zero is (3, 1, -4, 0)

// Constraints
// 1 <= N <= 10^5

// -10^4 <= arr[i] <= 10^4

function largestSubarraySumZero(n, arr) {
  let prefixSum = 0; // To store the cumulative sum
  let map = new Map(); // To store cumulative sum and its first occurrence index
  let maxLen = 0; // To store the maximum length of subarray with sum zero
  let startIdx = -1; // To store the starting index of the largest subarray
  let endIdx = -1; // To store the ending index of the largest subarray

  for (let i = 0; i < n; i++) {
    prefixSum += arr[i]; // Update the cumulative sum

    // If the prefix sum is zero, the subarray from 0 to i has a sum of zero
    if (prefixSum === 0) {
      if (i + 1 > maxLen) {
        maxLen = i + 1;
        startIdx = 0;
        endIdx = i;
      }
    }

    // If the prefix sum has been seen before, there is a subarray with sum zero
    if (map.has(prefixSum)) {
      let prevIndex = map.get(prefixSum);
      let subarrayLen = i - prevIndex;
      if (subarrayLen > maxLen) {
        maxLen = subarrayLen;
        startIdx = prevIndex + 1;
        endIdx = i;
      }
    } else {
      // Store the first occurrence of this prefix sum
      map.set(prefixSum, i);
    }
  }

  // If no valid subarray is found
  if (maxLen == 0) {
    return [-1];
  } else {
    // Print the subarray with sum zero
    return arr.slice(startIdx, startIdx + maxLen);
  }
}

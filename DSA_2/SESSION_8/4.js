// Problem Description
// Given a sorted integer array of length n with possible duplicate elements. Find the number of occurrences of an integer k using binary search.

// Input format
// There are 2 lines of input.

// First line contains 2 space separated integers n, k - Number of elements, the integer k.

// Second line contains n space separated integers - The integer array.

// Output format
// Print the number of occurrences of the integer k.

// Sample Input 1
// 5 2

// -1 2 2 4 7

// Sample Output 1
// 2

// Explanation 1
// The integer 2 occurs 2 times in the given array.

// Constraints
// 1 <= n <= 10^6

// -10^9 <= k <= 10^9

// -10^9 <= A[i] <= 10^9

// Resource
// Count number of occurrences (or frequency) in a sorted array

// Video : Count occurrences of a number in a sorted array with duplicates using Binary Search

// Crio Methodology - Problem Approach

function countOccurrences(n, k, arr) {
  // Helper function to find the first occurrence of k
  function findFirst(arr, k) {
    let i = 0,
      j = arr.length - 1;
    let first = -1; // Initialize result
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (arr[mid] === k) {
        first = mid; // Update first and search in the left half
        j = mid - 1;
      } else if (arr[mid] < k) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return first;
  }

  // Helper function to find the last occurrence of k
  function findLast(arr, k) {
    let i = 0,
      j = arr.length - 1;
    let last = -1; // Initialize result
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (arr[mid] === k) {
        last = mid; // Update last and search in the right half
        i = mid + 1;
      } else if (arr[mid] < k) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return last;
  }

  // Find first and last occurrences
  let first = findFirst(arr, k);
  if (first === -1) {
    return 0; // If the first occurrence is -1, k is not present
  }

  let last = findLast(arr, k);

  // Number of occurrences is last - first + 1
  return last - first + 1;
}

// Sample input
let n = 5,
  k = 2;
let arr = [-1, 2, 2, 4, 7];
console.log(countOccurrences(n, k, arr)); // Output: 2

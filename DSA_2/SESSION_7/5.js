// Problem Description
// Find the minimum difference possible between any two elements in the given array.

// Input format
// There are 2 lines of input.

// First line will contain a single integer n representing the size of the array.

// Second line will contain n space separated integers representing the array.

// Output format
// Output the answer in single line.

// Sample Input 1
// 3

// 1 2 4

// Sample Output 1
// 1

// Explanation 1
// 2 - 1 = 1 minimum difference

// Constraints
// 2<=n<=100000

// 1<=A[i]<=1000000000

// Resource
// Find minimum difference between any two elements

// Video : Find minimum difference between any two elements

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video

function minDiff(n, arr) {
  // Sort the array in ascending numerical order
  arr.sort((a, b) => a - b);

  // Initialize minValue with a large value
  let minValue = Number.MAX_SAFE_INTEGER;

  // Loop through the array and calculate differences between consecutive elements
  for (let i = 1; i < n; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff < minValue) {
      minValue = diff;
    }
  }

  return minValue;
}

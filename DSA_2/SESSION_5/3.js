// Problem Description
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input format
// First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

// Second line of input contains N integers denoting the array elements.

// Output format
// Print the maximum sum of a subarray of size k.

// Sample Input 1
// 4 2

// 100 200 300 400

// Sample Output 1
// 700

// Explanation
// We get maximum sum by adding subarray {300,400}

// of size 2.

function maximumSubarraySumSizeK(N, A, K) {
  if (K > N) return 0; // No subarray of size K is possible if K > N

  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first subarray of size K
  for (let i = 0; i < K; i++) {
    currentSum += A[i];
  }

  maxSum = currentSum;

  // Slide the window across the array
  for (let right = K; right < N; right++) {
    currentSum += A[right] - A[right - K]; // Update the sum by sliding the window
    maxSum = Math.max(maxSum, currentSum); // Keep track of the maximum sum
  }

  return maxSum;
}

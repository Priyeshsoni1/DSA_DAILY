// Problem Description
// Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 present in the array, return -1

// Input format
// There are 2 lines of input

// First line will contain a single integer n.

// Next line will contain n space separated integers.

// Output format
// Print the index of first occuring if present, otherwise print -1.

// Sample Input 1
// 4

// 0 0 1 1

// Sample Output 1
// 2

// Constraints
// 1<=n<=100000

// 0<=Ai<=1

// Resource
// Find the index of first 1 in a sorted array of 0's and 1's

function zeroOnes(n, arr) {
  let i = 0,
    j = arr.length - 1;
  let ans = -1;
  while (j >= i) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] == 1) {
      ans = mid;
      j = mid - 1;
    } else i = mid + 1;
  }
  return ans;
}

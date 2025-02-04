// Problem Description
// Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// Input format
// There are 2 lines of input.

// First line contains an integer N ,the number of input integers in the array.

// Second line contains N space separated integers.

// Output format
// N space separated elements which satisfy the given condition.

// Sample Input 1
// 6

// 1 5 1 1 6 4

// Sample Output 1
// 1 4 1 5 1 6

// Explanation 1
// nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].

// Constraints
// 1 <= N <= 100000

// -10^9 <= A[i] <= 10^9

function wiggleSort(arr, n) {
  for (let i = 1; i < n; i += 2) {
    // If arr[i] is less than arr[i-1], swap them
    if (i > 0 && arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }

    // If arr[i] is less than arr[i+1], swap them
    if (i < n - 1 && arr[i] < arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  return arr;
}

// Example Usage
const arr = [1, 5, 1, 1, 6, 4];
const n = arr.length;

console.log(wiggleSort(arr, n).join(" "));

// Problem Description
// Given an array A having N elements, the task is to find the next greater element(NGE) for each element of the array in order of their appearance in the array. If no such element exists, output -1. This should be achieved with a time complexity of O(n).

// Input format
// There are 2 lines of input

// The first line contains an integer N denoting the size of the array.

// The second line contains N space separated positive integers denoting the values in the array A.

// Output format
// Print N space separated integers, which are the next greater element for each array element. If no such greater element exists for any element, output -1

// Function definition
// You have to implement the given function. It accepts the original array as an argument, and returns the new next greater element array.

// Constraints
// 1 <= N <= 10^5

// 0 <= Values in the array <= 10^9

// Sample Input 1
// 4

// 1 3 2 4

// Sample Output 1
// 3 4 4 -1

function nextLargerElement(n, arr) {
  const stack = [];
  const result = new Array(n).fill(-1);

  let j = arr.length - 1;
  while (j >= 0) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[j]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[j] = stack[stack.length - 1];
    }

    // Push the current element onto the stack
    stack.push(arr[j]);
    j--;
  }
  return result;
}

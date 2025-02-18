// Problem Description
// Given an array of N elements and an integer B, you have to find the count of distinct numbers in all windows of size B.

// You have to return an array of size N-B+1 where i'th element in the array is the number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1. If B > N, return an empty array.

// Input format
// There are 2 lines of input

// First line contains two space separated integers N and B.

// Second line contains N space separated integers representing the array A.

// Output format
// Return the array space separated in the first line.

// Function definition
// You have to implement the given function. It accepts three arguments - n, b and the input array. You have to return the new array as described.

// Sample Input 1
// 6 3

// 1 2 1 3 4 3

// Sample Output 1
// 2 3 3 2

// Explanation
// First range will be [1,2,1] , in which number of distinct elements are 2

// Second range will be [2,1,3], in which number of distinct elements are 3

// Third range will be [1,3,4], in which number of distinct elements are 3

// Fourth range will be [3,4,3], in which number of distinct elements are 2

function countDistinctElements(n, b, arr) {
  if (b > n) return [];

  const map = new Map();
  const result = [];
  for (let i = 0; i < b; i++) map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  result.push(map.size);

  for (let i = b; i < arr.length; i++) {
    const valPrev = arr[i - b];
    const valNew = arr[i];

    if (map.get(valPrev) > 0) {
      map.set(valPrev, map.get(valPrev) - 1);
      if (map.get(valPrev) == 0) map.delete(valPrev);
    }

    map.set(valNew, (map.get(valNew) || 0) + 1);
    result.push(map.size);
  }
  return result;
}

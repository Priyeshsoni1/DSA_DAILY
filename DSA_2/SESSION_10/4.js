// Problem Description
// Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// Single line containing one 32-bit unsigned integer N.

// Output format
// Single line containing number of 1 bits in N.

// Sample Input 1
// 5

// Sample Output 1
// 2

// Explanation 1
// Binary representation of 5 is:

// 101

// Hence total number of 1 bits = 2

// Constraints
// 0<=N<=2^

function numberOfOneBits(n) {
  let count = 0;
  n = BigInt(n);
  while (n > 0) {
    count++;
    n = n & (n - 1n);
  }
  return count;
}

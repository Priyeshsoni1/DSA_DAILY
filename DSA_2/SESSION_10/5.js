// Problem Description
// Given two numbers, write a program to count the number of bits that need to be flipped to convert the first number to the second number.

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// A single line that contains two space separated integers A and B.

// Output format
// A single line that contains an integer which represents the number of bits needed to flip to convert integer A to integer B

// Constraints
// 0 <= A, B <= 10^18

// Sample Input 1
// 29 15

// Sample Output 1
// 2

// Explanation 1
// Binary of 29 is 11101 and Binary of 15 is 01111. So, 2 bits need to be flipped.

// Sample Input 2
// 7 10

// Sample Output 2
// 3

// Explanation 2
// Binary of 7 is 00000111 and Binary of 10 is 00001010. So, 3 bits need to be flipped.

function countConversionBits(a, b) {
  // Implement it here
  let xor = BigInt(a ^ b);
  let count = 0;
  while (xor > 0) {
    count++;
    xor = xor & (xor - 1n);
  }
  return count;
}

// Problem Description
// Given an unsigned integer N, swap all odd bits with even bits. Every even position bit is swapped with the adjacent bit on the right side and every odd position bit is swapped with adjacent on the left side. Assume a 32 bit integer.

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// N which represents an unsigned integer.

// Output format
// Single output integer after the algorithm has successfully swapped bits of the input.

// Constraints
// 0 <= N <= 2147483647

// Sample Input 1
// 22

// Sample Output 1
// 41

// Explanation 1
// The given number is 22 (00010110), it should be converted to 41 (00101001).

// Sample Input 2
// 13

// Sample Output 2
// 14

function swapAllOddAndEvenBits(n) {
  let j = 0;
  let number = n.toString(2); // convert to binary string
  let result = 0;

  // If the binary string length is odd, pad with '0' at the front
  if (number.length % 2 !== 0) {
    number = "0" + number;
  }

  // Start swapping odd and even bits
  for (let i = number.length - 1; i >= 0; i -= 2) {
    let evenBit = parseInt(number[i]); // Even bit (right side)
    let oddBit = parseInt(number[i - 1]); // Odd bit (left side)

    // Swap the bits and add them to the result
    result += evenBit * Math.pow(2, j + 1) + oddBit * Math.pow(2, j);
    j += 2;
  }

  return result;
}

function swapAllOddAndEvenBits(n) {
  // Mask to get even bits: 0xAAAAAAAA (binary: 101010...)
  let evenBits = n & 0xaaaaaaaa;

  // Mask to get odd bits: 0x55555555 (binary: 010101...)
  let oddBits = n & 0x55555555;

  // Right shift even bits
  evenBits >>= 1;

  // Left shift odd bits
  oddBits <<= 1;

  // Combine the results using bitwise OR
  return evenBits | oddBits;
}

const n = 23; // Binary: 10111
console.log(swapAllOddAndEvenBits(n).toString(2)); // Expected output: Swapped binary number

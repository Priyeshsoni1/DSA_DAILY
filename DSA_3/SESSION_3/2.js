// Problem Description
// You are given a string consisting of lower and upper case characters.
// You need to find the length of the longest palindrome which you can create by using the characters from the string.
// Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.

// Input format
// There are 2 lines of input

// First line contains the size of the string

// Second line contains the string.

// Output format
// Print the length of the longest palindrome possible.

// Sample Input 1
// 4 bbde

// Sample Output 1
// 3

// Explanation
// The possible 3 size palindrome strings are :- beb and bdb

// Constraints
// 1 <= Size of String <= 10^4

// Resource
function longestPalindrome(n, str) {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  let oddComes = false;
  let ans = 0;
  for (let [_, value] of map) {
    if (value % 2 == 0) ans += value;
    else {
      oddComes = true;
      ans += value - 1;
    }
  }
  if (oddComes) ans++;
  return ans;
}

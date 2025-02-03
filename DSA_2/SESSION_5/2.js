// Problem Description
// Given a string, find the length of the longest substring that contains at most K distinct characters.

// Note:

// Uppercase and Lowercase characters should be considered as different characters.

// There can be numbers and special characters as well.

// Input format
// There are 2 lines of input.

// First-line contains two space-separated integers representing the value of N and K.

// The next line contains the string S of length N.

// Output format
// The length of the longest substring T that contains at most K distinct characters.

// Constraints
// 1 <= N <= 10^5

// 0 <= K <= 256

// Sample Input 1
// 5 3

// abacd

// Sample Output 1
// 4

// Explanation 1
// The longest substring that has 3 distinct characters, "abac", is of length 4.

// Sample Input 2
// 6 3

// Xyyzya

// Sample Output 2
// 5

// Explanation
// There are 2 substrings, "Xyyzy" and “yyzya” which are the longest ones having 3 distinct characters and their length is 5.

// Crio Methodology - Problem Approach

function lengthOfLongestSubstringKDistinct(s, k) {
  if (k == 0) return 0;
  let charMap = new Map();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);
    while (charMap.size > k) {
      // Decrease the frequency of the character at the 'left' pointer
      charMap.set(s[left], charMap.get(s[left]) - 1);

      // If the frequency becomes 0, remove the character from the map
      if (charMap.get(s[left]) === 0) {
        charMap.delete(s[left]);
      }

      // Move the 'left' pointer to shrink the window
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

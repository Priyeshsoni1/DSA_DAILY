// Problem Description
// A string S is given consisting of lowercase alphabetical characters only. You need to return a sorted string using Count Sort.

// Input format
// First line will contain a single integer n representing size of the given string.

// Second line will contain a single string S of size n.

// Output format
// Output the string in a single line.

// Sample Input 1
// 10

// abcdeedcba

// Sample Output 1
// aabbccddee

// Constraints
// 1<=n<=10^6

// String S will contain lowercase alphabetical characters only

function countSort(n, str) {
  let freq = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    let index = str.charCodeAt(i) - "a".charCodeAt(0);
    freq[index]++;
  }
  let sortedString = "";
  for (let i = 0; i < 26; i++) {
    sortedString += String.fromCharCode(i + "a".charCodeAt(0)).repeat(freq[i]);
  }
  return sortedString;
}

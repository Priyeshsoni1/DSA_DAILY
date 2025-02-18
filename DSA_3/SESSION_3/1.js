// Problem Description
// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.

// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.

// Note that indexing starts at 0.

// Input format
// There is one line of input, containing two space-separated strings S and P.

// Output format
// First-line should contain the number of such starting indices.

// Next line should contain the indices in increasing order separated by a space.

// Sample Input 1
// aaba ab

// Sample Output 1
// 2

// 1 2

// Explanation 1
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

// Sample Input 2
// bacdgabcda abcd

// Sample Output 2
// 3

// 0 5 6

// Explanation 2
// The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

const compare = (map1, map2) => {
  if (map1.size != map2.size) return false;

  for (let [key, value] of map2) {
    if (map1.get(key) != value) return false;
  }

  return true;
};

function findAllAnagramsInAString(s, p) {
  const map1 = new Map();
  const map2 = new Map();
  const result = [];

  for (let i = 0; i < p.length; i++) {
    map1.set(p[i], (map1.get(p[i]) || 0) + 1);
  }
  let i = 0,
    j = 0;
  while (i < s.length) {
    map2.set(s[i], (map2.get(s[i]) || 0) + 1);

    if (i - j + 1 == p.length) {
      if (compare(map1, map2)) result.push(j);

      map2.set(s[j], (map2.get(s[j]) || 0) - 1);
      if (map2.get(s[j]) == 0) map2.delete(s[j]);
      j++;
    }

    i++;
  }
  return result;
}

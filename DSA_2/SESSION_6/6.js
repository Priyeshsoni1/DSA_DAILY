function longestSubarrayHavingSumK(N, K, nums) {
  let sum = 0;
  let maxLength = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum == K) maxLength = i + 1;
    if (map.has(sum - K)) {
      maxLength = Math.max(maxLength, i - map.get(sum - K));
    }
    if (!map.has(sum)) map.set(sum, i);
  }
  return maxLength;
}

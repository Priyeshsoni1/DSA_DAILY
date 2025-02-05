function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    let s1 = nums[i];

    while (right > left) {
      const s2 = nums[right] + nums[left] + s1;

      if (s2 == 0) {
        result.push([s1, nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] == nums[left - 1]) left++;
        while (left < right && nums[right] == nums[right + 1]) right--;
      } else if (s2 > 0) right--;
      else left++;
    }
  }
  return result;
}

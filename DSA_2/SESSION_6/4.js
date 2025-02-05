function moveZeroes(nums) {
  let countZero = 0;
  // const arr=nums[0].toString.split('').map(Number)

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (parseInt(nums[i]) == 0) countZero += 1;
    else {
      result.push(nums[i]);
    }
  }
  result.push(...Array(countZero).fill(0));
  return result;
}

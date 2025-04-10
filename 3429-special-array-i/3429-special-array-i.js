/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
      return nums.every((a, b) => b === 0 || (a % 2 !== nums[b - 1] % 2));

};
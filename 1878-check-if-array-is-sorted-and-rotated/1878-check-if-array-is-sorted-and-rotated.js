/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    return  nums.filter((a, b) => a > nums[(b + 1) % nums.length]).length < 2;
};
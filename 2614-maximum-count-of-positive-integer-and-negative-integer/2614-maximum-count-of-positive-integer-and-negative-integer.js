/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let res=Math.max(nums.filter(n=>n >0).length, nums.filter(n=> n<0).length)
    return res
};
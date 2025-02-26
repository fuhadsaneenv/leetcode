/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums);
    return Array.from({ length: nums.length }, (_, i) => i + 1).filter(n => !set.has(n));
};
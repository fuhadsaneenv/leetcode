/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let distinctNums = [...new Set(nums)].sort((a, b) => b - a);
    return distinctNums.length >= 3 ? distinctNums[2] : distinctNums[0];
    
};
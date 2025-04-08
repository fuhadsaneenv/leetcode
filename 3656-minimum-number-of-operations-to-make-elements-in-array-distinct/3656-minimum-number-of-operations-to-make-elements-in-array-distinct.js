/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let res=new Set(nums).size===nums.length?0:1+minimumOperations(nums.slice(3))
    return res
};
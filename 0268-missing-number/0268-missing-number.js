/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let a=nums.reduce((acc,crn)=> acc+crn,0)
    let b=nums.length
    let c=b * (b + 1) /2
    let d= c-a
    return d
};
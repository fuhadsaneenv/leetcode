/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let a=nums.filter(x=>nums.indexOf(x)===nums.lastIndexOf(x))
    let res=a.reduce((c,d)=>c+d,0)
    return res
};
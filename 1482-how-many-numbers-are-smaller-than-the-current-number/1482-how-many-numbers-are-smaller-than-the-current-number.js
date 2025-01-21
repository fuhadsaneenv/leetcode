/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(current=>{
        return nums.filter((num)=> num < current).length
    })
};
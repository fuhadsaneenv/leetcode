/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if (nums.length % 2) return false;

    let res = {};
    for (let num of nums) res[num] = (res[num] || 0) + 1;

    return Object.values(res).every(c => c % 2 === 0);
};
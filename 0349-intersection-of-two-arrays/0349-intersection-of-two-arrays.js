/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res=new Set(nums1)
    let res1=new Set(nums2)
    return [...res].filter(num=> res1.has(num))
};
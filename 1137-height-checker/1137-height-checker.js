/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  return heights.filter((h, i)=>h!==[...heights].sort((a, b)=>a-b)[i]).length
  
};
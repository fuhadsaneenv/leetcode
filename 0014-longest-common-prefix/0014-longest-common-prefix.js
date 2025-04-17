/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((a, b) => {
    while (!b.startsWith(a)) a = a.slice(0, -1);
    return a
  });  
};
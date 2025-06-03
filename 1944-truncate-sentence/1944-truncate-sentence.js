/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let splt=s.split(" ")
    let res=splt.slice(0,k).join(" ")
    return res
};
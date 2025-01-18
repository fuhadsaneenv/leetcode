/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a=s.toLowerCase().replace(/[^a-z0-9]/g,"")
    return a===a.split('').reverse().join('');
    
};
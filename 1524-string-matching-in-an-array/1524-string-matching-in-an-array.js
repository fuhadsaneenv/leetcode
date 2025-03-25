/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return  words.filter(w => words.some(a => a !== w && a.includes(w)));
};
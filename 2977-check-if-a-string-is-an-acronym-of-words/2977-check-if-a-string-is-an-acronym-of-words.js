/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let a=words.map(word=>word[0]).join('')
    return a==s
};
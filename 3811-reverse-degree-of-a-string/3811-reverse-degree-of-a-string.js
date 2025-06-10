/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    return [...s].reduce((s, c, i) => s + (123 - c.charCodeAt()) * (i + 1), 0);

};
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
     let words = sentence.split(" ");
  return words.every((a, b) => a.slice(-1) === words[(b + 1) % words.length][0]);
};
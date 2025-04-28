/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res=[]
    let a=word1.split('')
    let b=word2.split('')

    let len=Math.max(a.length,b.length)

    for(i=0;i<len;i++){
        res.push(a[i])
        res.push(b[i])
    }
    return res.join('')
};
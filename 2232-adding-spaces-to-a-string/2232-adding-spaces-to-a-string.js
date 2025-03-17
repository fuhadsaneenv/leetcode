/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
        let result = "";
    let sp = 0;
    for(let i = 0; i < s.length; i++){
        if (i != spaces[sp]){
            result += s[i];
        } else{
            result += ' ';
            result += s[i];
            sp += 1;
        }
    }
    return result;

};
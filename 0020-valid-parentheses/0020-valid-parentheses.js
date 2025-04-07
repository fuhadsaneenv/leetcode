/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let a =[]
    for(let b of s){
        if(b==="(")a.push(")")
        else if(b==="[")a.push("]")
        else if(b==="{")a.push("}")
        else if(a.pop()!== b)return false
    }
    return !a.length

};
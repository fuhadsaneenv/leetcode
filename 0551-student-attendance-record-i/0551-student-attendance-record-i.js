/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent=0

    for(i=0;i<s.length;i++){
        if(s[i]==="A"){
            absent++
            if(absent>=2) return false
        }
        if(s[i]==="L" && s[i+1]==="L" && s[i+2]==="L"){
            return false
        }
    }
    return true
};
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let up=word.toUpperCase()
    let lw=word.toLowerCase()
    if(word===up){
        return true
    }else if(word===lw){
        return true
    }else if(
         word[0] === word[0].toUpperCase() &&
        word.slice(1) === word.slice(1).toLowerCase()
    ){
        return true
    }   else{
        return false
    }
    
};
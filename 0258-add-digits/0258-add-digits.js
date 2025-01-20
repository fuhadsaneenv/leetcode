/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>=10){
        num =num.toString().split('').reduce((sum,digit)=> sum+Number(digit),0)
    }
    return num
};
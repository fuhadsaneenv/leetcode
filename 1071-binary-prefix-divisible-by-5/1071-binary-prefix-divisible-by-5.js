/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let num=0
    let a =[]
    for(i=0;i<nums.length;i++){
        num=num*2+nums[i]

        if(num%5===0){
            a.push(true)
        }else{
            a.push(false)
        }
       num=num%5
    }
     return a
    
};
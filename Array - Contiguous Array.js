/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
*/
var findMaxLength = function(nums) {
    let sum = 0;
    let map = new Map();
    let length = 0;
    map.set(0,-1);
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]==0){
            sum -= 1;
        }else{
            sum += 1;
        }
        if(map.has(sum)){
            length = Math.max(length,i - map.get(sum))
        }
        
        if(!map.has(sum)){
            map.set(sum,i)
        }
    }
    return length
};

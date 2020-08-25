/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
*/
//Brute force
var missingNumber = function(nums) {
    let result = false;
    for(let i=0; i<=nums.length;i++){
        for(let j=0; j<nums.length; j++){
            if(i==nums[j]){
                result = true;
                break;
            }
        }
        if(result == false){
            return i;
        }else{
            result = false;
        }
    }
}
===================================================================================================================
//Using hash set
var missingNumber = function(nums) {
    let set = new Set();

    for(let num of nums){
        set.add(num)
    }
    
    for(let i=0; i<=nums.length; i++){
        if(!set.has(i)){
            return i
        }
    }
}
=============================================================================================================================
//Soring
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let i=0; i<=nums.length; i++){
        if(i != nums[i]|| nums[i]==undefined){
            return i;
        }
    }
}

/*
Given an array nums of n integers and an integer target, find three integers in nums
such that the sum is closest to target. Return the sum of the three integers. You may
assume that each input would have exactly one solution.
*/
//brute force
var threeSumClosest = function(nums, target) {
    let min = Infinity;
    let result = null;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if(Math.abs(nums[i]+nums[j]+nums[k]-target)<min){
                    result = nums[i]+nums[j]+nums[k];
                    min = Math.abs(nums[i]+nums[j]+nums[k]-target);
                }
            }
        }
    }
    return result;
};
=======================================================================================================================================
//2 pointers

var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);

    let result = nums[0] + nums[1] + nums[nums.length-1]
    let start = null;
    let end = null;
    let sum = 0;
    
    for(let i=0; i<nums.length-2;i++){
        start = i+1;
        end = nums.length-1;
        while(start<end){
            sum = nums[i]+nums[start]+nums[end];
            if(sum>target){
                end--
            }else{
                start++
            }
            if(Math.abs(sum-target) < Math.abs(result-target)){
                result = sum;
            }
            
        }
    }
    return result;
};

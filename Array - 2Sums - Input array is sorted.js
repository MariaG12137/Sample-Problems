/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
*/
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length-1;
    
    while(l<r){
        if(numbers[l]+numbers[r] == target){
        return [l+1,r+1]
        }else if(numbers[l]+numbers[r] < target){
            l++;
        }else if(numbers[l]+numbers[r] > target){
            r--;
        }
    }
    return false;
};
===================================================================================================================================================
/*
Array is not sorted
*/
var twoSum = function(nums, target) {
    let map = new Map();
    for(i=0; i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],[i])
        }else{
            map.get(nums[i]).push(i)
        }
    }
    nums.sort((a,b)=>a-b);
    let l=0;
    let r=nums.length-1;
    
    while(l<r){
        if(nums[l]+nums[r]==target){
            return [map.get(nums[l]).pop(),map.get(nums[r]).pop()]
        } else if(nums[l]+nums[r]<target){
            l++;
        }else{
            r--;
        }
    }
};
    

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
//2Pass hashMap solution
var twoSum = function(nums, target) {
    let map = new Map();
    let set = new Set();
    let result = [];
    
    for(let i=0; i<nums.length;i++){
        map.set(nums[i],i)
    }
    for(let j=0; j<nums.length;j++){
        if(map.has(target-nums[j]) && (!set.has(nums[j])) && map.get(target-nums[j])>j){
            set.add(nums[j]);
            result.push([j, map.get(target-nums[j])])
        }
    }
    console.log(map);
    console.log(set);
    console.log(result)
    return result[0]
};

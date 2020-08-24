/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.
*/
//HashMap Solution
var threeSum = function(nums) { 
    nums.sort((a,b)=> a-b);
    let map = new Map();
    let set = new Set();
    let result = [];
    for(let i=0; i<nums.length;i++){
        map.set(nums[i],i)//the numbers i need uniquely
    }
    for(let i=0; i<nums.length; i++){
        for(let j=i+1;j<nums.length; j++){
            if(map.has(-nums[i]-nums[j]) && (!set.has([nums[i],nums[j]].join('-'))) && map.get(-nums[i]-nums[j])>j){
                set.add([nums[i],nums[j]].join('-'));
                result.push([nums[i],nums[j],-nums[i]-nums[j]])
               }
        }
    }
    return result; 
};

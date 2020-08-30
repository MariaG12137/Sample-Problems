/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.
*/
//brute force solution - time limit exceeded
var threeSum = function(nums) {
    let set = new Set();
    let result = [];
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k]==0){
                    if(!set.has([nums[i],nums[j],nums[k]].join(' '))){
                        set.add([nums[i],nums[j],nums[k]].join(' '));
                        result.push([nums[i],nums[j],nums[k]]);
                    }
                }
            }
        }
    }
    return result;
};
=================================================================================================================================
//HashMap Solution: time limit passes
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
=====================================================================================================================================================
//two pointer solution
var threeSum = function(nums) { 
    nums.sort((a,b)=> a-b);
    console.log(nums);
    let map = new Map();
    let set = new Set();
    let result = [];
    
    for(let i=0; i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i]);
            
            let l = i+1;
            let r = nums.length-1;
            while(l<r){
                
                if(nums[i]+nums[l]+nums[r]==0 && !set.has([nums[l],nums[r]].join(' '))){
                    set.add([nums[l],nums[r]].join(' '));
                    result.push([nums[i],nums[l],nums[r]]);
                    l++;
                    r--;
                }
                else if(nums[l]+nums[r]>-nums[i]){
                    r--;
                }
                else{
                    l++;
                }
                
            }
        }
    }
    
    return result; 
};

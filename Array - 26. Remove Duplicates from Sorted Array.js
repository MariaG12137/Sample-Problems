/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/
var removeDuplicates = function(nums) {
    let count = 0;
    let current = nums[0];
    for(let num of nums){
        if (num > current){
            ++count;
            nums[count] = num;
            current = num;
        }
    }
    return count+1;
};

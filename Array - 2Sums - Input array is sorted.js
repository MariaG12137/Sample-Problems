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

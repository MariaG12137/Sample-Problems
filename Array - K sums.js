class Solution {
    
    public List<List<Integer>> fourSum(int[] nums, int target) {
        return multiSum(4, nums, target);
    }
    
    public List<List<Integer>> multiSum(int sumNum, int[] nums, int target) {
        List<List<Integer>> ret = new ArrayList<>();
        if (nums == null || nums.length < sumNum) {
            return ret;
        }
        Arrays.sort(nums);
        return multiSum(sumNum, nums, target, ret, 0, nums.length - 1);
    }

    private List<List<Integer>> multiSum(int sumNum, int[] nums, int target, List<List<Integer>> ret, int start, int end) {
        //if order == 2, return twoSum
        if (sumNum == 2) {
            return twoSum(nums, target, ret, start, end);
        }
        //else, loop through array
        for (int i = start; i < end; i++) {
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            int tmpTarget = target - nums[i];
            List<List<Integer>> tmpRet = null;
            //If order>3 recursively call multiSum
            if (sumNum > 3) {
                tmpRet = multiSum(sumNum - 1, nums, tmpTarget, new ArrayList<>(), i + 1, end);
            } 
            //if order == 3, set start = i+1. Find 2sum that adds up to target-nums[i] after i
            else {
                tmpRet = twoSum(nums, tmpTarget, new ArrayList<>(), i + 1, end);
            }
            
            //add nums[i] to the Finalresult
            for (List<Integer> tmpList : tmpRet) {
                tmpList.add(nums[i]);
            }
            add result to ret
            ret.addAll(tmpRet);

        }
        return ret;
    }
    //2 twoSums with pointer. Find 2 numbers that match target within start and end
    private List<List<Integer>> twoSum(int[] nums, int target, List<List<Integer>> ret, int start, int end) {
        int left = start, right = end;
        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum < target) {
                left++;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
            } else if (sum > target) {
                right--;
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            } else {
                List<Integer> list = new ArrayList<>();
                list.add(nums[left]);
                list.add(nums[right]);
                ret.add(list);

                left++;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                right--;
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
            }
        }
        return ret;
    }
}

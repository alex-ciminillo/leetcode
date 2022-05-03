




var twoSum = function(nums, target) {
    map = {}
    for (i = 0; i < nums.length; i++) {
        let otherHalf = target - nums[i];
        if (otherHalf in map) {
            return [map[otherHalf], i];
        }
        map[nums[i]] = i;
    }
    return null;
};
















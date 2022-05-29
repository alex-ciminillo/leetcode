

var containsDuplicate = function(nums) {
    // create hash
    // loop through array adding 1 to each hash element
    // check all values to see if any is > 1
    let numsObject = {}
    for (let i = 0; i < nums.length; i++) {
        if (numsObject[nums[i]]) return true;
        numsObject[nums[i]] = true;
    }
    return false;
    
};






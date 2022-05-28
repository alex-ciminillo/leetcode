findDisappearedNumbers = function(nums) {
    //put in an object. 
    //then loop through a number of times equal
    //to the object and make sure that each index is there
    
    let numsObject = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        numsObject[currentNum] = true;
    }
    let missingNums = []
    for (let i = 0; i < nums.length; i++) {
        let currentNum = i + 1;
        if (!numsObject[currentNum]) {
            missingNums.push(currentNum);
        }
    }
    return missingNums;
    
};
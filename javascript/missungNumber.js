




var missingNumber = function(nums) {
  
    let newArray = new Array(nums.length + 1).fill(-1)
    
    for (let num of nums) {
        newArray[num] = num
    }

    return newArray.indexOf(-1)
    
};



















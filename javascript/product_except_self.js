productExceptSelf = function(nums) {
    
    let output = [];
    let multRight = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = multRight;
        multRight *= nums[i];
    }
    let multLeft = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= multLeft;
        multLeft *= nums[i];
    }
    return output;
    
    
};
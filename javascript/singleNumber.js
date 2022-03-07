// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.






let singleNumber = function(nums) {
    let map=new Map();
    let val=0;
    
    for(let x of nums){
        if(map.has(x)){
        map.set(x,map.get(x)+1);
    }
    else{
        map.set(x,1);
    }
}
console.log(map,'map');
    for(let [k,v] of map){
        if(map.get(k)===1){
            val=k;
            break;
        }
    }
    return val;
};









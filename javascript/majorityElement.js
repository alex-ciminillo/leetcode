// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?





let majorityElement = function(nums) {
    let n=nums.length;
    let final=0;
    let num=n/2;
    if(n===1){
        return nums[0];
    }
    let map=new Map();
    
    for(let i=0;i<n;i++){
        if(map.has(nums[i])){
        map.set(nums[i],map.get(nums[i])+1);
    }
    else{
        map.set(nums[i],1);
    }
}
    console.log(map);
    for(let [k,v] of map){
        if(v>num){
            final=k;
            break;
        }
    }
    return final;
};



















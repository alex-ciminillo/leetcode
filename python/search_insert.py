
# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You must write an algorithm with O(log n) runtime complexity.

 

# Example 1:

# Input: nums = [1,3,5,6], target = 5
# Output: 2
# Example 2:

# Input: nums = [1,3,5,6], target = 2
# Output: 1
# Example 3:

# Input: nums = [1,3,5,6], target = 7
# Output: 4
# Example 4:

# Input: nums = [1,3,5,6], target = 0
# Output: 0
# Example 5:

# Input: nums = [1], target = 0
# Output: 0
 

# Constraints:

# 1 <= nums.length <= 104
# -104 <= nums[i] <= 104
# nums contains distinct values sorted in ascending order.
# -104 <= target <= 104



# first attempt recursion
# def searchInsert(self, nums: List[int], target: int) -> int:
        
#     middle = len(nums) // 2
    
#     if not nums:
#         return 1
    
#     print(f'{nums[middle]}')
    
#     if target == nums[middle]:
#         return middle
    
#     if nums[middle] < target and len(nums) == 1:
#         return (middle + 1)
    
#     if nums[middle] > target and len(nums) == 1:
#         return middle
    
#     if nums[middle] < target and nums[(middle + 1)] > target:
#         return (middle + 1)
    
#     if nums[middle] > target and nums[(middle - 1)] < target:
#         return middle
    
#     left = nums[0:middle]
#     right = nums[(middle + 1):]
#     print('--------')
#     print(f'{nums[middle]}')
#     print(f'{right}')
#     print(f'{left}')
#     if target > left[-1]:
#         print("hi")
#         find = self.searchInsert(right, target)
#         return middle + 1 + find
#     else:
#         find = self.searchInsert(left, target)
#         return find


# optimized iteration
from typing import List

def searchInsert(nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        middle = (left + right) // 2
        if nums[middle] == target:
            return middle
        if nums[middle] > target:
            right = middle - 1
        else:
            left = middle + 1
    return left

arr = [0,1,2,3,4,6,7,8,9]
target = 5
print(searchInsert(arr,target))














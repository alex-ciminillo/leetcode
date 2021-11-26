# Given an integer array nums, find the contiguous subarray 
#(containing at least one number) which has the largest sum and return its sum.

# A subarray is a contiguous part of an array.

 

# Example 1:

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Example 2:

# Input: nums = [1]
# Output: 1
# Example 3:

# Input: nums = [5,4,-1,7,8]
# Output: 23
 

# Constraints:

# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104
 

# Follow up: If you have figured out the O(n) solution, 
#try coding another solution using the divide and conquer approach, which is more subtle.


#first attempt - time limit exceeded for calculation - O(n)
# def max_sub_array(nums)
#     return nums.max if nums.all? { |num| num < 0 }
#     current_array = [nums[0]]
#     old_arr = [nums[0]]
#     old_sum = nums[0]
#     current_sum = nums[0]
#     nums = nums[1..-1]
#     nums.each do |num|
#         if current_sum < 0
#             current_sum = 0
#             current_array = []
#         end
#         current_sum += num
#         current_array << num
#         if current_sum < 0
#             current_sum = 0
#             current_array = []
#         end
#         if current_sum > old_sum
#             old_sum = current_sum
#             old_arr = current_array.dup
#         end
#     end
#     old_arr.sum
# end


#optimized
def max_sub_array(nums)
    max_arr = nums[0]
    current_arr = nums[0]
    nums = nums[1..-1]
    nums.each do |num|
        current_arr = num > current_arr + num ? num : current_arr + num
        max_arr = current_arr > max_arr ? current_arr : max_arr
    end
    max_arr
end

nums = [-2,1]
p max_sub_array(nums)


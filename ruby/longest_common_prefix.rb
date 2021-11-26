
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

 

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
 

# Constraints:

# 1 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] consists of only lower-case English letters.




def longest_common_prefix(arr)
    longest = arr[0]
    arr.each do |word|
        longest = "" if word == ""
       word.each_char.with_index do |char, idx|
            break if idx == longest.length
            if char != longest[idx]
                longest = word[0...idx]
                break
            elsif idx == (word.length - 1)
                longest = word
            end
       end
    end
    longest
end

strs = ["flower","flow","flight"]
p longest_common_prefix(strs)
























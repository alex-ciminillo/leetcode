# Implement strStr().

# Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

# Clarification:

# What should we return when needle is an empty string? This is a great question to ask during an interview.

# For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

# Example 1:

# Input: haystack = "hello", needle = "ll"
# Output: 2
# Example 2:

# Input: haystack = "aaaaa", needle = "bba"
# Output: -1
# Example 3:

# Input: haystack = "", needle = ""
# Output: 0

# Constraints:

# 0 <= haystack.length, needle.length <= 5 * 104
# haystack and needle consist of only lower-case English characters.


def str_str(haystack, needle)
    return 0 if needle.empty?
    hash = Hash.new { |h, k| h[k] = [] }
    haystack.each_char.with_index { |char, idx| hash[char] << idx }

    prev = needle[0]
    needle[1..-1].each_char do |char|
        return -1 if hash[char].empty?
        if !hash[prev].include?(hash[char][0] + 1)
            return -1
        end
    end
    true
end

haystack = "help"
needle = "lp"

p str_str(haystack, needle)


















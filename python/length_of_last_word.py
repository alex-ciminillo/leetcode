# Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

# A word is a maximal substring consisting of non-space characters only.

# Example 1:

# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.
# Example 2:

# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.
# Example 3:

# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.
 

# Constraints:

# 1 <= s.length <= 104
# s consists of only English letters and spaces ' '.
# There will be at least one word in s.


#first attempt, iteration, O(n)
# def lengthOfLastWord(s: str) -> int:
#     only_words_arr = []
#     sentence_arr = s.split(' ')
#     for i in sentence_arr:
#         if len(i) != 0:
#             only_words_arr.append(i)
#     return len(only_words_arr[-1])


#optimized
# def lengthOfLastWord(s: str) -> int:
#     s = s.split(' ')
#     i = len(s) - 1
#     while i >= 0:
#         if len(s[i]) != 0:
#             return len(s[i])
#         i -= 1

#optimized even more
def lengthOfLastWord(s: str) -> int:
    return 0 if not s or s.isspace() else len(s.split()[-1])

s = '   fly me   to   the moon  '
print(lengthOfLastWord(s))
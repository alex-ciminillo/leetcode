# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
 

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false
# Example 4:

# Input: s = "([)]"
# Output: false
# Example 5:

# Input: s = "{[]}"
# Output: true
 

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.



# def is_valid(s)
#     open_par = {
#         ")"=> "(",
#         "]"=> "[",
#         "}"=> "{"
#     }
#     close_par = ")]}"
#     init_par = "([{"
#     current = [s[0]]
#     return false if close_par.include?(current[-1]) || init_par.include?(s[-1])
#     (1...s.length).each do |idx|
#         if idx == (s.length - 1)
#             return false if current[-1] != open_par[s[idx]] || current.length > 1
#         elsif close_par.include?(s[idx])
#             return false if current[-1] != open_par[s[idx]]
#             current.pop
#         else
#             current << s[idx]
#         end
#     end
#     true
# end


#optimized
def is_valid(s)
    hash = {
        ")"=> "(",
        "]"=> "[",
        "}"=> "{"
            }
    stack = []
    s.each_char do |char|
        if hash.has_key?(char)
            if stack[-1] == hash[char]
                stack.pop
            else
                stack << char
            end
        else
            stack << char
        end
    end
    stack.empty?
end




s = "([]"
p is_valid(s)


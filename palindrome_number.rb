# Given an integer x, return true if x is palindrome integer.

# An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

# Example 1:

# Input: x = 121
# Output: true

# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
# Example 4:

# Input: x = -101
# Output: false
 
# Constraints:

# -231 <= x <= 231 - 1
 
# Follow up: Could you solve it without converting the integer to a string?

# without turning number into string
def is_palindrome(x)
    return false if x < 0
    return true if x == 0
    mult = 1
    num = 12
    until num == 0
        mult = mult*10
        num = x / mult
    end
    num = mult
    until x < 10
        if x / (num/10) != x % (num/(num/10))
            return false
        end
        o_x = x
        o_num = num
        minus_back = x % (num/(num/10))
        minus_front = x / (num/10)
        num = num/10
        x = (x - minus_front*num - minus_back)/10
        num = num/10
        if o_x > 999 && x > 0
            if x < o_x/(x*100)
                return false
            end
        end
    end
    true
end

# using a string
def is_palindrome(x)
    x.to_s.reverse == x.to_s
end


p is_palindrome(30000100003)



















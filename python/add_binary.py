
# Given two binary strings a and b, return their sum as a binary string.

# Example 1:

# Input: a = "11", b = "1"
# Output: "100"
# Example 2:

# Input: a = "1010", b = "1011"
# Output: "10101"
 

# Constraints:

# 1 <= a.length, b.length <= 104
# a and b consist only of '0' or '1' characters.
# Each string does not contain leading zeros except for the zero itself.


# first attempt, built in conversion function, limited to low ammount of numbers
# def addBinary(a: str, b: str) -> str:
#     return '{0:b}'.format(int(a,2) + int(b, 2))


# using carry method
# def addBinary(a: str, b: str) -> str:
    # length = max(len(a), len(b))
    # a, b = a.zfill(length), b.zfill(length)
    # ans = []
    # carry = 0

    # for i in range(length - 1, -1, -1):
    #     if a[i] == '1':
    #         carry += 1
    #     if b[i] == '1':
    #         carry += 1
        
    #     if carry % 2 == 1:
    #         ans = ['1'] + ans
    #     else:
    #         ans = ['0'] + ans

    #     carry //= 2

    # if carry == 1:
    #     ans = ['1'] + ans
    
    # return ''.join(ans)



def addBinary(a: str, b: str) -> str:
    x = 1
    y = 3
    while y:
        answer = x ^ y
        carry = (x & y) << 1
        x, y = answer, carry
    return bin(x)[2:]


a = "1010"
b = "1011"

print(addBinary(a,b))
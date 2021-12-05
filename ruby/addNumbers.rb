

def addNumbers(a,b)

    until b.zero?
        answer = a^b
        carry = (a & b) << 1
        p "---------"
        p answer
        p carry
        a,b = answer, carry
    end
    return a

end


p addNumbers(3,3)





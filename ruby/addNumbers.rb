

def addNumbers(a,b)

    until b.zero?
        answer = a^b
        carry = (a & b) << 1
        a,b = answer, carry
    end
    return a

end


p addNumbers(55,32)





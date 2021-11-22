


def roman_to_integer(s)
    order = "MDCLXVI"
    hash = {
        "I" => 1,
        "V" => 5,
        "X" => 10,
        "L" => 50,
        "C" => 100,
        "D" => 500,
        "M" => 1000
    }
    total = 0
    s.each_char.with_index do |char, idx| 
        if idx != s.length - 1
            if order.index(char) <= (order.index(s[idx + 1]))
                total += hash[char]
            else
                total -= hash[char]
            end
        else
            total += hash[char]
        end
    end
    total
end


p roman_to_integer("III")
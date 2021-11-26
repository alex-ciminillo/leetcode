# Merge two sorted linked lists and return it as a sorted list. 
# The list should be made by splicing together the nodes of the first two lists.

# Example 1:
# Input: l1 = [1,2,4], l2 = [1,3,4]
# Output: [1,1,2,3,4,4]

# Example 2:
# Input: l1 = [], l2 = []
# Output: []

# Example 3:
# Input: l1 = [], l2 = [0]
# Output: [0]
 
# Constraints:

# The number of nodes in both lists is in the range [0, 50].
# -100 <= Node.val <= 100
# Both l1 and l2 are sorted in non-decreasing order.

#first answer
# def merge_two_lists(l1, l2)
#     val_arr = []
#     val = 0
#     node = l1
#     until node.nil?
#         val_arr << node.val
#         node = node.next
#     end
#     val = 0
#     node = l2
#     until node.nil?
#         val_arr << node.val
#         node = node.next
#     end
# end

#optimized (recursive and self-sorting)
# def merge_two_lists(l1, l2)
#     if l1 == nil
#         return l2
#     elsif l2 == nil
#         return l1
#     elsif l1.val > l2.val
#         merge_two_lists(l1.next, l2)
#         return l1
#     else
#         merge_two_lists(l2.next, l1)
#         return l2 
#     end
# end

class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

# optimized (iteration)
def merge_two_lists(l1, l2)
    combined = ListNode.new(-1)
    combined_node = combined
    until l1.nil? || l2.nil?
        if l1.val <= l2.val
            combined_node.next = l1
            l1 = l1.next
        else
            combined_node.next = l2
            l2 = l2.next
        end 
        combined_node = combined_node.next
    end

    combined_node.next = l1.nil? ? l2 : l1
    return combined.next
end





// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
 

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000




var minDepth = function(root) {
    if (root === null) {
        return 0;
    };
    root.level = 1;
    let queue = {'head': root, 'tail': root};
    while (queue.head) {
        if (queue.head.left === queue.head.right) {
            break;
        };
        if (queue.head.left !== null) {
            queue.head.left.level = queue.head.level + 1;
            queue.tail.next = queue.head.left;
            queue.tail = queue.tail.next;
        };
        if (queue.head.right !== null) {
            queue.head.right.level = queue.head.level + 1;
            queue.tail.next = queue.head.right;
            queue.tail = queue.tail.next;
        };
        queue.head = queue.head.next;
    };
    return queue.head.level;
};




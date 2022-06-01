// DFS



function isSubTree(root, subRoot) {

    function isEqual(r1, r2) {
        if (r1 == null && r2 == null) return true
        if (r1 == null || r2 == null) return false
        if (r1.val !== r2.val) return false

        return isEqual(r1.left, r2.left) && isEqual(r1.right, r2.right)
    }

    function dfs(node) {
        if (isEqual(node, subRoot)) return true
        if (node == null) return false

        return dfs(node.left) || dfs(node.right)
    }

    return dfs(root)

}


// BFS


function bfsIsSubtree(root, subRoot) {


    function isEqual(r1, r2) {
        const queue = [[r1, r2]]
        while (queue.length > 0) {
            const [node1, node2] = queue.pop()
            if (node1 == null && node2 == null) continue
            if (node1 == null || node2 == null) return false
            if (node1.val !== node2.val) return false
            queue.push([node1.right, node2.right], [node1.left, node2.left])
        }
        return true
    }

    const queue = [root]
    while (queue.length > 0) {
        const node = queue.pop()
        if (node == null) continue
        if (isEqual(node, subRoot)) return true
        queue.push(node.right, node.left)
    }
    return false




}





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
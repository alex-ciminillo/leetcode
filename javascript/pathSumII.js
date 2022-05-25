

function hasPathSum(root, target) {

    if (root == null) return false
    if (root.left == null && root.right == null) {
        return target - root.val === 0
    }

    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val)

}










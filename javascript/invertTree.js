

//DFS

function invertTree(root) {

    if (root == null) return null;


    const left = root.left;
    const right = root.right;

    root.left = invertTree(root.right);
    root.right = invertTree(root.left);

    return root;

}

//bfs

function bfsInvertTree(root) {

    if (root == null) return null

    const queue = [root]
    while (queue.length > 0) {
        const node = queue.pop()
        const left = node.left;
        const right = node.right;
        node.left = right;
        node.right = left;
        if (node.right !== null) queue.push(node.right)
        if (node.left !== null) queue.push(node.left)
    }
    return root;

}
















function isSameTree(p, q) {

    //make base statements
    //  if p && q are null return true
    //  if p || q are null return false
    //  if p.val !== q.val return false
    //return recursion statement


    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);


}







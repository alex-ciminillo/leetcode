var deleteDuplicates = function(head) {
    if(!head) return head
    var cur = head
    
    while(cur!=null && cur.next != null) {
        if(cur.next.val === cur.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
}
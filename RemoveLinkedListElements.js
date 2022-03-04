/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if (!head) return head;

    var node = head;
    var pre;

    while (node) {
        if (node.val === val) {
            if (!pre) {
                head = head.next;
              } else {
                pre.next = node.next;
              }
          } else {
            pre = node;
          }
          node = node.next;
      }

      return head;
  };


  /*

  - Initialize a node variable to point to the head of the list.
  

  */
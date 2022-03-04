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
  - Initialize a pre variable to null.
  - Loop through the list until we reach the end.
  - If the current node’s value is equal to the value we’re looking for, we check if pre is null.
  - If it is, we set head to the next node. 
  - Otherwise, we set pre’s next to the current node’s next.
  

  */
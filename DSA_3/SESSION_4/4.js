// Problem Description
// Given a linked list, remove the Kth node from the end of the list and return its head.

// Note: the given K will always be a valid node.

// Input format
// There are three lines of input

// First line contains N, the number of nodes in the linked list

// Second line contains N integers, denoting the values of the linked list

// Third line contains K, the node to be deleted from the end.

// Output format
// Return the head of the LL after deleting the Kth node from the end.

// Function definition
// You have to complete the given function. It accepts two arguments - the head of the linked list, and k. You have to return the head of the LL after making the necessary change.

// Constraints
// 1 <= N<= 10^5

// -10^9 <= value <= 10^9

// 1 <= K <= N

// Sample Input 1
// 5

// 1 5 2 4 3

// 2

// Sample Output 1
// 1 5 2 3

// Explanation 1
// The 2nd node from the end is 4, removing which, gives us 1 5 2 3

// Sample Input 2
// 5

// 3 1 3 2 4

// 4

// Sample Output 2
// 3 3 2 4

function deleteKthToLast(head, k) {
  if (!head) return head;
  if (head.next == null) {
    return null;
  }
  let curr = head,
    i = 1;
  let ref = new ListNode(null);
  let temp = head;
  while (i != k) {
    curr = curr.next;
    i++;
  }

  while (curr.next != null) {
    ref = temp;
    temp = temp.next;
    curr = curr.next;
  }

  ref.next = temp.next;
  if (temp == head) head = head.next;
  return head;
}

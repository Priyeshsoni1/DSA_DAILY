// Problem Description
// Given a linked list, determine if it has a cycle in it.

// A linked list cycle means that for last node of LL, called last, last->next is not NULL, but instead points to some other node of the LL(not last itself)

// Internally, to represent a cycle in the given linked list, we use an integer pos which represents the zero-indexed position of the node that the last node of the LL is connected to. If pos = -1, it means that there is no cycle in the LL. Note that pos is not passed as a parameter.

// For instance, consider an LL 1->2->3->4 and pos = 1. This means that there is a cycle such that 4 is connected to the node at position 1, that is, the node with value 2.

// Input format:
// There are 2 lines of input.

// First line contains space separated integers, denoting the elements of the linked list.

// The next line contains one integer - pos, the position that the tail connects to.

// Output format
// Print "true" without quotes if it has a cycle in it else “false”.

// Function definition
// You have to complete the given function. It accepts a single argument, the head of the LL, and returns a boolean value - true if there’s a cycle, false if not. You will NOT have access to the variable pos in the function.

// Sample Input 1
// 3 2 0 -4

// 1

// Sample Output 1
// true

function linkedListCycle(head) {
  if (!head || !head.next) return false;

  let fast = head.next,
    slow = head;
  while (slow != null && fast != null && fast.next != null) {
    if (fast == slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}

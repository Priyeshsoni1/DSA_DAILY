// Problem Description
// Given a pointer to a node in a sorted circular singly linked list( sorted in ascending order), write a function to insert a value K into the list such that the linked list still remains a sorted circular list.

// Note1: If the given pointer is null i.e. empty list, create a circular list with a new node and return the reference to the new node. Otherwise,return the initial input pointer given.

// Note2: The list could have duplicate values. You can insert the new value in any place which will keep the list sorted.

// Input Format
// First line contains N, the number of nodes in the linked list.

// The next line contains N space-separated integers, representing the nodes of the circular linked list.

// The last line contains a single integer K, denoting the value that is to be inserted.

// Output Format
// Return the original pointer given as an argument, after modifying the list by inserting the value. The output prints the modified linked list starting from the returned node.

// Constraints
// 0 <= N <= 10^5

// 0 <= value <= 10^9

// 0 <= K <= 10^9

// Sample Input 1
// 7

// 4 5 9 10 0 1 2

// 7

// Sample Output 1
// 4 5 7 9 10 0 1 2

function insertIntoSortedCircularList(head, insertVal) {
  if (!head) {
    let value = new ListNode(insertVal);
    value.next = value;
    return value;
  }
  let prev = head,
    curr = head.next;
  while (curr != head) {
    if (prev.val <= insertVal && curr.val >= insertVal) break;

    if (prev.val > curr.val)
      if (prev.val <= insertVal || curr.val >= insertVal) break;
    prev = prev.next;
    curr = curr.next;
  }

  let value = new ListNode(insertVal);

  prev.next = value;

  value.next = curr;

  return head;
}

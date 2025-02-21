// Problem Description
// You’re given two numbers represented by two linked lists, where each node contains a single digit. The digits are stored in forward order i.e the one’s digit is at the tail of the list. Write a function that adds the two numbers and returns the sum as a linked list in the same order.

// Input format
// There are 4 lines of input.

// First line contains N, the size of the first list

// Next line contains N space separated integers

// Third line contains M, the size of the second list

// Next line contains M space separated integers

// Output format
// Return the resultant list after adding given lists.

// Function definition
// The given function accepts two arguments - representing the heads of the two lists,and returns the new head.

// Constraints
// 1 <= N <= 1e5

// 1 <= M <= 1e5

// 0 <= value <= 9

// Sample Input 1
// 3

// 6 1 7

// 3

// 2 9 5

// Sample Output 1
// 9 1 2

// Explanation 1
// 617 + 295 = 912.

// Sample Input 2
// 2

// 4 9

// 1

// 5

// Sample Output 2
// 5 4

// Explanation 2
// 49 + 5 = 54.

//----------wrong approach----------------

function reverse(head) {
  let prev = null,
    mid = head,
    curr = head;
  while (curr != null) {
    curr = curr.next;
    mid.next = prev;
    prev = mid;
    mid = curr;
  }

  return prev;
}
function sumLists2(head1, head2) {
  let r1 = reverse(head1);
  let r11 = r1;
  let r2 = reverse(head2);
  let q = 0;
  let r1prev = null;
  while (r1 != null && r2 != null) {
    let v1 = r1 ? r1.val : 0; // Check if r1 is not null or undefined, then access r1.val
    let v2 = r2 ? r2.val : 0; // Check if r2 is not null or undefined, then access r2.val

    let r = (v1 + v2 + q) % 10;
    q = Math.floor((v1 + v2 + q) / 10);
    r1.val = r;

    r1prev = r1;
    r1 = r1.next;
    r2 = r2.next;
  }

  if (r2 != null) r1prev.next = r2;
  while (r2 != null) {
    // Check if r1 is not null or undefined, then access r1.val
    let v2 = r2 ? r2.val : 0;
    let r = (v2 + q) % 10;
    q = Math.floor((v2 + q) / 10);
    r2.val = r;
    r1prev = r2;
    r2 = r2.next;
  }

  if (q == 1) {
    const value = r1prev.val + q;
    q = Math.floor(value / 10);
    let rem = value % 10;
    const carryNode = new ListNode(rem);
    r1prev.next = carryNode;
    if (q == 1) {
      const carryNode = new ListNode(q);
      r1prev.next = carryNode;
    }
  }

  return reverse(r11);
}
// second approch working ----------------

function reverse(head) {
  let prev = null,
    mid = head,
    curr = head;
  while (curr != null) {
    curr = curr.next;
    mid.next = prev;
    prev = mid;
    mid = curr;
  }

  return prev;
}
function sumLists2(head1, head2) {
  let r1 = reverse(head1);

  let r2 = reverse(head2);
  let carry = 0;
  let resultHead = new ListNode(0);
  let current = resultHead;
  while (r1 !== null || r2 !== null || carry !== 0) {
    let v1 = r1 ? r1.val : 0; // Check if r1 is not null or undefined, then access r1.val
    let v2 = r2 ? r2.val : 0; // Check if r2 is not null or undefined, then access r2.val

    let r = (v1 + v2 + carry) % 10;
    carry = Math.floor((v1 + v2 + carry) / 10);
    current.next = new ListNode(r);
    current = current.next;

    if (r1) r1 = r1.next;
    if (r2) r2 = r2.next;
  }

  return reverse(resultHead.next);
}

// Problem Description
// Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

// Input format
// First line contains an integer N, indicating the number of meetings.

// Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

// Output format
// Print the minimum number of rooms required.

// Constraints
// N <= 100000

// 0 <= S,E <= 1000000000 (10^9)

// Si < Ei

// Sample Input 1
// 3

// 0 20

// 5 10

// 10 15

// Sample Output 1
// 2

// Explanation 1
// One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

// So, only 2 rooms are required if total for the 3 meetings.

function meetingRooms(meetings) {
  if (meetings.length === 0) return 0;

  // Separate the start and end times
  let starts = meetings.map((meeting) => meeting[0]);
  let ends = meetings.map((meeting) => meeting[1]);

  // Sort both arrays
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let rooms = 0;
  let maxRooms = 0;
  let startPointer = 0;
  let endPointer = 0;

  while (startPointer < meetings.length) {
    if (starts[startPointer] < ends[endPointer]) {
      rooms++;
      startPointer++;
    } else {
      rooms--;
      endPointer++;
    }
    maxRooms = Math.max(maxRooms, rooms);
  }
  return maxRooms;
}

// You are given a list of marks over 5 subjects scored by n students. You need to sort the student by following rules.

// The student whose sum of marks will be highest must come at the top of the leaderboard.

// Students whose total sum of marks are the same will be sorted alphabetically ascending by name.

// In all other cases, student with lesser id will come before in the leaderboard

// Input format
// First line will contain a single integer n number of students.

// Next n lines will contain space separated unique integer Id, string S name of the student followed by 5 integers marks scored out of 100.

// Output format
// Print space separated list of sorted ids of the student in a single line

// Sample Input 1
// 3

// 1 Alan 45 56 21 32 74

// 2 Fabien 95 94 93 92 91

// 3 Gamora 85 65 54 65 76

// Sample Output 1
// 2 3 1

// Explanation 1
// Fabien has the most marks obtained and then Gamora and followed by Alan

// Constraints
// 1<=n<=50000

// 1<=|S|<=10

// Name of the Student will be in alphabetically lowercase characters.

// 1<=Marks[i]<=100

// 1<=Student id<=10^7

function marksSort(n, students) {
  // Map to create new arrays with sum of marks and also include the original index for stable sorting
  const processedStudents = students.map((arr) => {
    const id = arr[0];
    const name = arr[1];
    const marks = arr.slice(2).map(Number); // Ensure marks are numbers
    const sum = marks.reduce((acc, item) => acc + item, 0); // Sum of marks
    return [id, name, sum]; // Include the original index for stable sorting
  });

  // Sort based on the sum of marks, lexicographically by name, and maintain original order if both are equal
  processedStudents.sort((a, b) => {
    if (b[2] !== a[2]) {
      return b[2] - a[2]; // Sort by sum of marks (descending)
    } else if (
      a[1].localeCompare(b[1], undefined, { sensitivity: "base" }) !== 0
    ) {
      return a[1].localeCompare(b[1], undefined, { sensitivity: "base" }); // Sort by name (case-insensitive)
    } else {
      return a[0] - b[0]; // If sum and name are equal, maintain original order
    }
  });

  // Return the IDs of the sorted students
  const idArray = processedStudents.map((item) => item[0]);
  return idArray;
}

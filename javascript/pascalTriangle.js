// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30




var generate = function(numRows) {
    let output = [[1]];
    for (let i = 0; i < numRows - 1; i++) {
        let x = output[output.length - 1];
        let row = [1];
        for (let j = 1; j < x.length; j++) {
            row.push(x[j]+x[j-1])
        }
        row.push(1);
        output.push(row);
    }
    return output;
};









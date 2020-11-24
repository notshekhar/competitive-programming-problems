// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -105 ≤ inputArray[i] ≤ 105.

// [output] integer

// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

function arrayChange(arr) {
    let moves = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) {
            let diff = arr[i - 1] - arr[i] + 1
            moves += diff
            arr[i] += diff
        }
    }
    return moves
}

let a = [1, 1, 1]
let a1 = [-1000, 0, -2, 0]
let a2 = [2, 1, 10, 1]
let a3 = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]

let o = arrayChange(a1)
console.log(o) //output should be 3

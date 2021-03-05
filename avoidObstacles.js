// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Non-empty array of positive integers.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
// 1 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The desired length.

//solution1
//one possible solution is:
//setp1: create a variable jump and init its lenght by 1
//step2: check if that length  is enough to jump from every obstacle if obstacle is divisible by jump then lenght is not enough to jump throught all
//step3: so increment jump length and repeat step2
//step4: return jump

//solution1:
function avoidObstaclesS1(obstacles) {
    let jump = 1
    while (!checkJump(jump)) {
        jump++
    }
    return jump
    function checkJump(len) {
        for (let i = 0; i < obstacles.length; i++) {
            if (obstacles[i] % len == 0) return false
        }
        return true
    }
}
//solution1 optimal way to write
function avoidObstaclesS1O(arr) {
    for (let i = 0; ; i++) if (arr.every((e) => e % i)) return i
}
//solution2:
//step1:

let ob1 = [1, 4, 10, 6, 2] // -> 7
let ob = [5, 3, 6, 7, 9] // -> 4
let o = avoidObstaclesS1O(ob)
console.log(o)

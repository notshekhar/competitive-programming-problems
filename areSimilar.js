// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Array of integers.

// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
// 1 ≤ a[i] ≤ 1000.

// [input] array.integer b

// Array of integers of the same length as a.

// Guaranteed constraints:
// b.length = a.length,
// 1 ≤ b[i] ≤ 1000.

// [output] boolean

// true if a and b are similar, false otherwise.


function areSimilar(a, b) {
    if (a.length != b.length) return false
    let indexes = [0, 0]
    let counter = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            indexes[counter] = i
            counter++
        }
        if (counter > 2) return false
    }
    let temp = a[indexes[0]]
    a[indexes[0]] = a[indexes[1]]
    a[indexes[1]] = temp
    if (a[indexes[0]] != b[indexes[0]] || a[indexes[1]] != b[indexes[1]])
        return false
    return true
}

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
let arr11 = [1, 2, 3, 1]
let arr12 = [2, 1, 1, 3]
let o = areSimilar(arr11, arr12)
console.log(o)
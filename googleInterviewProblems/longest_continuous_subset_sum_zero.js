// Given an array consisting of positive and negative integers.
// Find the length of the longest continuous subset whose sum is zero
//Input: [10, 95, -97, -387, -435, -570, 897, 127, 23, 284]
//Output: 5

const getAllSubsets = (theArray) =>
    theArray.reduce(
        (subsets, value) =>
            subsets.concat(subsets.map((set) => [value, ...set])),
        [[]]
    )
const sum = (arr) => arr.reduce((a, e) => (a += e))

const foo = (arr) => {
    let subsets = getAllSubsets(arr)
    let max_length = 0
    subsets.forEach((subset) => {
        if (subset.length != 0 && sum(subset) == 0) {
            if (max_length < subsets.length) max_length = subset.length
        }
    })
    return max_length
}

console.log(foo([95, -97, -387, -435, -5, -70, 897, 127, 23, 284]))

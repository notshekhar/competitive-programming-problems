let testCases = [{ arr: [1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10], sum: 15 }]

for (let i = 0; i < testCases.length; i++)
    console.log(
        "testcase",
        i,
        "->",
        findLongestSubarrayBySum(testCases[i].arr, testCases[i].sum)
    )

function findLongestSubarrayBySum(arr, s) {
    let boundary = [0, 0]
    let [left, right] = [0, 1]
    let sum = 0
    let logest = 0
    while (right < arr.length) {
        // sum+=
    }
}

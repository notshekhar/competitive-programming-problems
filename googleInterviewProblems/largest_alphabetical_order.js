// Given a string that outputs the largest alphabetical order of all consecutive substrings
// Input: "ab"
// Output: "b"

const getAllSubsets = (theArray) =>
    theArray.reduce(
        (subsets, value) =>
            subsets.concat(subsets.map((set) => [value, ...set])),
        [[]]
    )

const foo = (string) => {
    let arr = string.split("")
    let subsets = getAllSubsets(arr)
    subsets = subsets.map((subset) => subset.reverse().join("")).sort()
    return subsets[subsets.length - 1]
}

console.log(foo("abcdef"))

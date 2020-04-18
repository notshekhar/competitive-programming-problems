// Google Coding Interview
// You are given with an array of integers that contain numbers in random order.
// Write a program to find and return the number which occurs maximum times in the given input.
// If more than one element occurs same number of times in the input, return the element which is present in the input first.
// Input : [132, 12, 2, 11, 12, 2, 1, 2, 2, 11, 1226]
// Output : 2

const foo = (arr) => {
    let distonary = {}
    let tf = true //this will save time complexity
    for (let number of arr) {
        if (distonary[number] != undefined) {
            distonary[number] += 1
            tf = false
            continue
        }
        distonary[number] = 1
    }
    if (tf) return arr[0] //using this simple tracker we can reduce time complexity
    let max = 0
    let number
    for (let frequency in distonary) {
        if (distonary[frequency] > max && distonary != max) {
            max = distonary[frequency]
            number = frequency
        }
    }
    return number
}

console.log(foo([132, 12, 2, 11, 12, 2, 1, 2, 2, 11]))

//time complexity: O(2n)
//space complexity: O(n)

// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(str) {
    let dist = {}
    for (let i = 0; i < str.length; i++) {
        if (dist[str[i]]) dist[str[i]] = dist[str[i]] + 1
        else dist[str[i]] = 1
    }
    let odds = 0
    for (let el in dist) {
        if (dist[el] % 2 == 1) odds++
        if (odds >= 2) return false
    }
    return true
}
let c = "aadc"
let b = "ccaabb" // -> cabbac
let a = "aabb" // -> abba
let o = palindromeRearranging(c)
console.log(o) //output = true

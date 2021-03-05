// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be isBeautifulString(inputString) = true.

// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

// For inputString = "aabbb", the output should be isBeautifulString(inputString) = false.

// Since there are more bs than as, this string is not beautiful.

// For inputString = "bbc", the output should be isBeautifulString(inputString) = false.

// Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 50.

// [output] boolean

// Return true if the string is beautiful, false otherwise.

//There is on more solution to this but it will take O(n^2)
//for that we willhave to find frequency for each letter in string and check if  the previous letter length is lessthen or more then the previous letter frequency

function isBeautifulString(inputString) {
    // O(n) + O(nlog(n))
    let string = inputString.split("").sort().join("") // O(nlog(n))
    return checkFrequency(string) //Time Complexity -> O(n)
}

function checkFrequency(inputString) {
    let prevCount = false
    let currentCount = 1
    for (let i = 1; i < inputString.length; i++) {
        if (inputString[i - 1] == inputString[i]) currentCount++
        else {
            if (!prevCount) prevCount = currentCount
            else {
                if (prevCount < currentCount) return false
                else prevCount = currentCount
            }
            console.log(prevCount)
            currentCount = 1
        }
    }
    return prevCount == currentCount
}

console.log(isBeautifulString("fyudhrygiuhdfeis"))

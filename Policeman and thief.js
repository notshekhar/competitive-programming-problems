// Given an array of size n that has the following specifications:
// 1. Each element in the array contains either a policeman or a thief
// 2. Each policeman can catch only one thief
// 3. A policeman cannot catch a thief who is more than K units away from the policeman
// Find the maximum number of thieves that can be caught
//Input: ["p", "t", "t", "p", "t"], k=1
//Output: 2
// Input: ["t", "t", "p", "p", "t"], k=2
//Output: 2

const testCase = ["p", "t", "t", "p", "t"]
const k = 1

;(function solve(arr, k) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        let person = arr[i]
        if (person === "p") {
            //check left side
            if (i != 0) {
                let condition = i - k - 1
                for (let j = i - 1; j > condition; j--) {
                    if (j == -1) break
                    if (arr[j] == 1) {
                        condition--
                        continue
                    }
                    if (arr[j] == "t") {
                        arr[j] = -1
                        arr[i] = 1
                        counter++
                        break
                    }
                }
            }
            //check right side
            if (i != arr.length - 1 && arr[i] != 1)
                for (let j = i + 1; j < i + k + 1; j++) {
                    if (j == arr.length) break
                    if (arr[j] == "t") {
                        arr[j] = -1
                        arr[i] = 1
                        counter++
                        break
                    }
                }
        }
    }
    console.log(counter, arr)
})(testCase, k)

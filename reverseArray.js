const reverseArray = (arr) => {
    let length = arr.length
    for (let i = 0; i < length / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[length - 1 - i]
        arr[length - 1 - i] = temp
    }
    return arr
}
//Time complexity = O(n/2)
//Space compexity = O(2)

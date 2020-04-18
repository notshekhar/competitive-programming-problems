//we are given a sorted array consisting of only integers
//where every element appeards exactly twice,
// expect fro one element which appears exactly that appears only once.
//Input: [1,1,2,3,3,4,4,8,8]
//Output: 2

const foo = (arr) => {
    let number = arr[0]
    for (let i = 1; i < arr.length; i += 2) {
        if (number == arr[i]) {
            number = arr[i + 1]
            continue
        }
        return number
    }
}

console.log(foo([1, 1, 2, 3, 3, 4, 4, 8, 8]))

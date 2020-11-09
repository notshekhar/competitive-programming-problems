let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
let arr11 = [1, 2, 3, 1]
let arr12 = [2, 1, 1, 3]

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

let o = areSimilar(arr11, arr12)
console.log(o)
const u = (a, d, k) => {
    let r = 1.00136521495144
    return (a - d * k) * Math.pow(r, k - 1)
}
const getR = (a, d, k) => {
    return
}

const s = (a, d, n, x) => {
    let sum = -x
}

let [a, d, n, x] = [1, 1, 3000, 100000000]

console.log(s(a, d, n, x))



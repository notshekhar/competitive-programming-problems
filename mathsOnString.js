const print = s => console.log(s)
let [at, smt, mt] = [0, 0, 0]
class Number {
    constructor(str) {
        this.n = str.split("").reverse()
    }
    get number() {
        return this.n.reverse().join("")
    }
    get len() {
        return this.n.length
    }
    copy() {
        let number = new Number("0")
        for (let i = 0; i < this.len; i++) {
            number.n[i] = this.n[i]
        }
        return number
    }
    addS(s2) {
        let carry = 0
        let num1 = this.copy()
        let num2 = s2.copy()
        let [smaller, bigger] = [num1, num2].sort((a, b) => a.len - b.len)
        let length = smaller.len
        for (let i = 0; i < length; i++) {
            let acc = parseInt(smaller.n[i]) + parseInt(bigger.n[i])
            let _acc = JSON.stringify(acc)
            bigger.n[i] = acc > 9 ? _acc[1] : _acc
            carry = acc > 9 ? 1 : 0
            bigger.n[i + 1] =
                bigger.n[i + 1] != undefined
                    ? parseInt(bigger.n[i + 1]) + carry + ""
                    : carry + ""
        }
        return bigger
    }
    mul_single_number(n) {
        if (n == 0) return "0"
        let carry = 0
        const length = this.len
        let number = this.copy()
        for (let i = 0; i < length; i++) {
            let mul = parseInt(number.n[i]) * n + carry
            mul = JSON.stringify(mul)
            number.n[i] = mul.length > 1 ? mul[1] : mul
            carry = mul.length > 1 ? parseInt(mul[0]) : 0
        }
        if (carry != 0) number.n.push(carry + "")
        return number
    }
    mulS(n, limit) {
        let result = new Number("0")
        let zero = []
        let number = n.n
        let length = n.len
        for (let i = 0; i < length; i++) {
            let r = this.mul_single_number(parseInt(number[i]))
            r.n = [...zero, ...r.n]
            result = result.addS(r)
            zero.push("0")
        }
        if (limit) result = result.slice(0, limit)
        return result
    }
    compareS(s2) {
        if (this.length < s2.length) return -1
        if (this.length > s2.length) return 1

        let length = this.length
        for (let i = 0; i < length; i++) {
            if (parseInt(this[i]) < parseInt(s2[i])) return -1
            if (parseInt(this[i]) > parseInt(s2[i])) return 1
        }
        return 0
    }
}

let n = new Number("123")

let b = new Number("999999999999999999")

let t = Date.now()
let c = n.mulS(b)
print(Date.now() - t)
print(c)
// print(a)
// print([at, smt, mt])

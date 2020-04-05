const fn = number => addS(number, addS(number, addS(number, "000")))
const addS = (s1, s2) => {
    let carry = 0
    let result = ""
    let [smaller, bigger] = [s1, s2].sort((a, b) => a.length - b.length)
    let marker = smaller.length - 1
    for (let i = bigger.length - 1; i > -1; i--) {
        let acc =
            smaller[marker] != undefined
                ? parseInt(smaller[marker]) + parseInt(bigger[i]) + carry
                : parseInt(bigger[i]) + carry

        let _acc = JSON.stringify(acc)
        carry = _acc.length > 1 ? parseInt(_acc[0]) : 0
        result = _acc.length > 1 ? _acc[1] + result : _acc + result
        marker -= 1
    }
    return result
}

//main program
let number = "000"
for (let n = 0; n < 1000; n++) {
    let result = fn(number)
    if (result.length == 3)
        if (result[0] == result[1] && result[0] == result[2])
            if (result[result.length - 1] == number[number.length - 1])
                console.log(number, fn(number))
                
    number = addS(number, "1")
}

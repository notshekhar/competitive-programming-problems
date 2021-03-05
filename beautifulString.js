function isBeautifulString(inputString) {
    a = new Array(26).fill(0)
    inputString.split``.map((v) => a[Buffer(v)[0] - 97]++)
    m = a[0]
    return a.every((v) => m >= v && ((m = v), 1))
}

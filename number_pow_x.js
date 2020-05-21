const pow = (number, p) => {
    if (p == 0) return 1
    if (p % 2 == 0)
        return pow(number, parseInt(p / 2)) * pow(number, parseInt(p / 2))
    if (p % 2 != 0)
        return (
            number * pow(number, parseInt(p / 2)) * pow(number, parseInt(p / 2))
        )
}

// O(logn) multiplication instead of O(n) requied by the naive approach.

const foo = (s1, s2) => {
    for (let i = 0; i < s2.length; i++) {
        if (s1[i] != s2[i]) return s2[i]
    }
}

console.log(foo("shekhar", "shekhare"))

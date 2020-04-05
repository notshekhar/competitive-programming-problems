// Input: two string s-string, p-pattern
// Output: boolean (does string matches pattern)
// Constraints: valid pattern, non-empty
// Edge Cases:
//   "aa.*bb": anything can match

//   3 different conditions
//       a-z: direct match
//       .: "wild card"
//       *: 0 or more occurrences of the previous character
//          what is the previous character in the pattern string
//          0 of that character, or more.

// ..................................................................................

//print function
const print = s => {
    console.log(s)
}

//match a equal length string with a dot or without dot
const match_string = (s, p) => {
    for (let i = 0; i < p.length; i++) {
        if (p[i] != ".") if (p[i] != s[i]) return false
    }
    return true
}
// print(match_string("shekhar", ".hekhar"))

//deal with unequal length can contain any character * or a .
const match_star = (s, p) => {
    let marker = 0
    for (let i = 0; i < s.length; i++) {
        console.log(p[marker])
        if (p[marker] != ".") {
            if (p[marker] != "*") {
                if (p[marker] != s[i]) return false
            } else {
                let e = p[marker - 1]
                if (e == ".") {
                    return true
                }
                while (e == s[i]) {
                    if (s[i + 1] == e) {
                        i++
                    } else {
                        break
                    }
                    continue
                }
            }
        }
        marker++
    }
    return true
}

const isMatch = (s, p) => {
    if (p == "*") return true
    if (!p.includes("*")) {
        if (s.length != p.length) {
            return false
        }

        return check_dot(s, p)
    }

    return match_star(s, p)
}

print(isMatch("aaaashekhaaaarrrr", ".*")) //true

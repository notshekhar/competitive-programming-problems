// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

let str1 = "foo(bar(baz))blim"
let str2 = "foo(bar)baz(blim)"
let str3 = "foo(bar)baz"
let str = "((()))hello(bar)"

function reverseInParentheses(str) {
    let pattern = /\(\w+\)/g
    let empty = /\(\)/g
    let newstring
    newstring = str.replace(pattern, (e) => {
        let a = ""
        for (let i = 1; i < e.length - 1; i++) {
            a = e[i] + a
        }
        return a
    })
    newstring = newstring.replace(empty, (e) => "")
    if (newstring.match(pattern) || newstring.match(empty))
        return reverseInParentheses(newstring)
    else return newstring
}

let o = reverseInParentheses(str)
console.log(o)

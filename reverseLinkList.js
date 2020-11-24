function printList(head) {
    let current = head
    let str = ""
    while (current) {
        str += current.next ? `${current.value} -> ` : `${current.value}`
        current = current.next
    }
    console.log(str)
}
function LinkList(value, next) {
    this.value = value
    this.next = next ? next : false
}
let e = new LinkList(4)
let d = new LinkList(3, e)
let c = new LinkList(2, d)
let b = new LinkList(1, c)
let a = new LinkList(0, b)

printList(a) // Input: a -> b -> c -> d -> e -> false
// Output: e -> d -> c -> b -> a -> false

function reverseLinkList(head) {
    let current = head
    let previous = false
    let next = false

    while (current) {
        //do something
        next = current.next
        current.next = previous
        previous = current
        current = next
    }
}
//should output this
reverseLinkList(a)
printList(e)

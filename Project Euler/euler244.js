//Solving this problem using BFS(Breadth First Search)

const calculateSum = path => {
    let checksum = 0
    for (let i = 0; i < path.length; i++) {
        let number = moves[path[i]]
        checksum = (checksum * 243 + number) % 100000007
    }
    return checksum
}
const checkState = (b1, b2) => {
    if (b1.length != b2.length) return false
    if (b1[0].length != b2[0].length) return false
    for (let i = 0; i < b1.length; i++) {
        for (let j = 0; j < b1[0].length; j++) {
            if (b1[i][j] != b2[i][j]) return false
        }
    }
    return true
}

class queue {
    constructor(data) {
        this.data = [] || data
    }
    get length() {
        return this.data.length
    }
    isEmpty() {
        if (this.length == 0) return true
        return false
    }
    pop() {
        return this.data.splice(0, 1)[0]
    }
    push(n) {
        this.data.push(n)
    }
}
class Node {
    constructor(board, p, m) {
        this.board = board
        this.parent = null || p
        this.move = null || m
    }
    copy = _ => {
        let state = []
        for (let i = 0; i < this.board.length; i++) {
            state[i] = []
            for (let j = 0; j < this.board[0].length; j++) {
                state[i][j] = this.board[i][j]
            }
        }
        let node = new Node(state)
        return node
    }
    difference = other => {
        let diff = 0
        let b1 = this.copy()
        let b2 = other.copy()
        for (let i = 0; i < b1.board.length; i++) {
            for (let j = 0; j < b1.board[0].length; j++) {
                if (b1.board[i][j] != b2.board[i][j]) diff++
            }
        }
        return diff
    }
    getSuccessors = _ => {
        let valids = []
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (this.board[i][j] == w) {
                    if (this.board[i - 1] != undefined) {
                        let newState = this.copy()
                        newState.board[i - 1][j] = this.board[i][j]
                        newState.board[i][j] = this.board[i - 1][j]
                        valids.push(new Node(newState.board, this, "D"))
                    }
                    if (this.board[i + 1] != undefined) {
                        let newState = this.copy()
                        newState.board[i + 1][j] = this.board[i][j]
                        newState.board[i][j] = this.board[i + 1][j]
                        valids.push(new Node(newState.board, this, "U"))
                    }
                    if (this.board[i][j - 1] != undefined) {
                        let newState = this.copy()
                        newState.board[i][j - 1] = this.board[i][j]
                        newState.board[i][j] = this.board[i][j - 1]
                        valids.push(new Node(newState.board, this, "R"))
                    }
                    if (this.board[i][j + 1] != undefined) {
                        let newState = this.copy()
                        newState.board[i][j + 1] = this.board[i][j]
                        newState.board[i][j] = this.board[i][j + 1]
                        valids.push(new Node(newState.board, this, "L"))
                    }
                }
            }
        }
        return valids
    }
    stateChangeMoves = e => {
        let sum = 0
        //SO, this approach will not work so i found anpther way to do it. It is called BFS(Breadth First Search)
        //Like word ladder problem we do have a source word and a target word and we do have to tell the no. of steps it will take to react to the target word but we can only change one word at a time
        //we can also use DFS(Depth First Search)
        let open = new queue()
        open.push(this)
        let level = 1
        let path = ""
        while (!open.isEmpty()) {
            let size = open.length
            for (let i = 0; i < size; i++) {
                let current_state = open.pop()
                if (current_state.difference(e) == 0) {
                    console.log("fuck yeah")
                    let temp = current_state
                    while (temp.parent != null) {
                        path = temp.move + path
                        temp = temp.parent
                    }
                    console.log(path)
                    console.log(calculateSum(path))
                    return calculateSum(path)
                }
                let children = current_state.getSuccessors()
                console.log(current_state.board)
                for (let child of children) open.push(child)
                //find all possible states and push them in queue
            }
            level++
        }
    }
    return
    //
}

let moves = { L: 76, R: 82, U: 85, D: 68 }
let [w, r, b] = ["w", "r", "b"]

let s = [
    [2, 7, 8],
    [6, 4, 1],
    [5, 3, w]
]
let e = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, w]
]

let S = new Node(s)
let E = new Node(e)
// console.log(S.getSuccessors())
// console.log(S.difference(E))
S.stateChangeMoves(E)

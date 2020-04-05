const Board = function(grid) {
    this.rows = 9
    this.cols = 9
    this.start = {
        0: 0,
        1: 0,
        2: 0,
        3: 3,
        4: 3,
        5: 3,
        6: 6,
        7: 6,
        8: 6
    }
    if (grid) {
        this.data = grid
    } else {
        this.data = [
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false]
        ]
        this.data = this.data.map(e => {
            return e.map(b => {
                if (Math.random() < 0.1) {
                    let number = Math.floor(Math.random() * 8) + 1
                    return number
                }
                return false
            })
        })
    }
    this.isAllowed = (e, a, b) => {
        if (e) {
            for (let i = 0; i < this.rows; i++) {
                if (i != b && e == this.data[a][i]) return false
                if (i != a && e == this.data[i][b]) return false
            }
            let si = this.start[a]
            let sj = this.start[b]
            for (let i = si; i < si + 3; i++) {
                for (let j = sj; j < sj + 3; j++) {
                    if (i != a && j != b && e == this.data[i][j]) return false
                }
            }
        }
        return true
    }
    this.print = () => {
        let grid = this.data
        let res = ""
        res += "...................\n"
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                res += "|" + grid[i][j]
            }
            res += "|"
            res += "\n"
        }
        res += "..................."
        console.log(res)
    }
    this.solve = () => {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (!this.data[i][j]) {
                    for (let n = 1; n < 10; n++) {
                        if (this.isAllowed(n, i, j)) {
                            // console.log(`trying ${n} at (${i}, ${j})`)
                            this.data[i][j] = n
                            this.solve()
                            this.data[i][j] = false
                        }
                    }
                    return
                }
            }
        }
        this.print()
        return
    }
}

//function to reshape the array
Array.prototype.reshape = function(rows, cols) {
    var copy = this.slice(0) // Copy all elements.
    this.length = 0 // Clear out existing array.
    for (var r = 0; r < rows; r++) {
        var row = []
        for (var c = 0; c < cols; c++) {
            var i = r * cols + c
            if (i < copy.length) {
                row.push(copy[i])
            }
        }
        this.push(row)
    }
}

let puzzle = "200060004000050070705300020130000900009070800007000041050001408080020000300090006"

console.log(puzzle.length)
let grid = puzzle.split("").map(e => parseInt(e))
grid.reshape(9, 9)
let b = new Board(grid)
b.solve()

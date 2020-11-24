// You're given a 2d array of potentially uneuqal height and width
// containing only 0s and 1s. Each 0 represent land, and each 1 represents part
// of river. A river consists of any number of 1s formaing a river
// determine its size.

//   Note that a river can twist. In other words, it doesn't have to be a straight
//   vertical line or a straight horizontal line; it can be L-shaped, for example.
// Input:
//  [
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0],
// ]
//Output:
// [1, 2, 2, 2, 5]

let matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
]

function riverSize(m) {
    let rows = m.length
    let cols = m[0].length
    m = m.map((row) =>
        row.map((v) => ({
            value: v,
            visited: false,
        }))
    )
    let counter = 0
    let nums = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!m[i][j].visited & (m[i][j].value == 1)) countRiver(i, j)
            m[i][j].visited == true
        }
    }
    function countRiver(i, j) {
        // here goes the logic for counting the river at pos m[i][j]
        let [x, y] = [i, j]
        
    }
}

console.log(riverSize(matrix))

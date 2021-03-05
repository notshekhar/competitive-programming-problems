let image = [
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
]

function boxBlur(image) {
    let kernel = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ]
    let bluredImage = []
    for (let i = 0; i < image.length - kernel.length + 1; i++) {
        let arr = []
        for (let j = 0; j < image[0].length - kernel.length + 1; j++) {
            arr[j] = convoluteImage(kernel, image, i, j)
        }
        bluredImage.push(arr)
    }
    return bluredImage
    function convoluteImage(kernel, image, n, k) {
        let average = 0
        for (let i = 0; i < kernel.length; i++) {
            for (let j = 0; j < kernel.length; j++) {
                average += image[n + i][k + j]
            }
        }
        return Math.floor(average / Math.pow(kernel.length, 2))
    }
}

console.log(boxBlur(image))

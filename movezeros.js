const moveZeros = (arr) => {
    let mover = 0
    for(let e of arr){
        if(e != 0){
            arr[mover] = e
            mover++
        }
    }
    for(let i=mover; i<arr.length; i++){
        arr[i] = 0
    }
    return arr
}

let a = [0, 1, 0, 2, 12]

// console.log(moveZeros(a))
let counter = 0
const move = (f, t) => {
    counter++
    console.log(`Step ${counter}: Move one disc from ${f} to ${t}`)
}

const hanoi = (n, f, h, t) => {
    if (n == 0) return
    hanoi(n - 1, f, t, h) // first move n-1 discs from first to helper using target
    move(f, t) //then move remaining disc from first to target
    hanoi(n - 1, h, f, t) //finally move all n-1 discs from helper to target using first
}

hanoi(11, "A", "B", "C")

counter = 0

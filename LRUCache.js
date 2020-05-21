// Design and Implement a data structure for Least Recently Used(LRU) cache
// it should support the following operations `get` and `put`
// `get(key)` - Get the value (will always be positive) of the key exists in the cache otherwise return -1
// `put(key, value)` - Set or insert value if the key is not already present.
//                     When the cache reached in capacity it should invalidate the least recently used item before inserting a new ithem

const LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = []
    this.keys = {}
    this.max_f = 0
    this.length = 0
}

LRUCache.prototype.get = function (key) {
    if (this.keys[key] == undefined) return -1
    let pos = this.keys[key]
    this.cache[pos].freq += 1
    if (this.cache[pos].freq > this.max_f) {
        this.max_f = this.cache.freq
        let k
        for (let i = pos + 1; i < this.length; i++) {
            k = this.cache[i].key
            this.keys[k] = i - 1
        }
        k = this.cache[pos].key
        this.keys[k] = this.length - 1
        this.cache.push(this.cache.splice(pos, 1)[0])
        return this.cache[this.length - 1].value
    }
    if (this.cache[pos].freq < this.max_f) {
        let i = pos
        while (this.cache[i].value < this.cache[i + 1].value) {
            let temp = this.cache[i]
            this.cache[i] = this.cache[i + 1]
            this.cache[i + 1] = temp
            let k1 = this.cache[i].key
            let k2 = this.cache[i + 1].key
            this.keys[k1] = pos
            this.keys[k2] = i + 1
            i++
        }
        return this.cache[i].value
    }
    return this.cache[this.keys[key]].value
} 

LRUCache.prototype.put = function (key, value) {
    // this.keys.remove(key)
    if (this.keys[key]) return
    if (this.length < this.capacity) {
        // console.log(this.length)
        this.keys[key] = this.length
        // console.log(this.keys)
        this.cache[this.length] = { value, freq: 0, key }
        this.length++
        return
    }
    this.keys[key] = 0
    delete this.keys[this.cache[0].key]
    this.cache[0] = { value, freq: 0, key }
    return
}

let c = new LRUCache(2)
c.put(1, 1)
c.put(2, 2)
console.log(c.get(1))
c.put(3, 3)
console.log(c.get(2))
c.put(4, 4)
console.log(c.get(1)) 
console.log(c.get(3))
console.log(c.get(4))

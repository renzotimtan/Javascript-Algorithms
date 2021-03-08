class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key)

        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }

        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key)

        if (!this.keyMap[index]) return undefined
    
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1]
            }
        }
    }

    keys() {
        let keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let key = this.keyMap[i][j][0]
                    if (!keys.includes(key)) keys.push(key)
                }
            }
        }
        return keys
    }

    values() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let value = this.keyMap[i][j][1]
                    if (!values.includes(value)) values.push(value)
                }
            }   
        }
        return values
    }
 }

// CREATING A HASH FUNCTION

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

//only hashes strings
//linear time
//could be a little more random


// improved
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

//prime numbers spread out keys more uniformly (prevent collisions)
//prime number length also helps



/**
Instructions
Create a function named get which takes two arguments:

src: an object.
path: a string representing a path.
Your function will return the value at the given path in the src object.
 */

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// get(src, path) // -> 'peekaboo'

function get(src, path) {
    let arr = path.split(".")
    for (let i = 0; i < arr.length; i++) {
        src = src[arr[i]]
        if (src === undefined) {
            return undefined
        }
    }
    return src
}

// console.log(get(src,path))
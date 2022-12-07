/**
 * Instructions
Create a function named sums that accepts a number and returns its partitions.

A partition is a group of numbers, where the sum of the partition is equal to the number argument. Duplicate partitions are not allowed. [1, 2] and [2, 1] are considered duplicates. The array of partitions must be sorted.

Example:

sums(4) // [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]

 */
function sums(num) {

    let part = genOnes(num)
    let result = [part.slice()]

    while (part.length > 1) {
        let min = Math.min(...part.slice(0, -1))
        for (let i = 0; i < part.length - 1; i++) {
            if (part[i] === min) {
                part[i]++
                part[part.length - 1]--
                const sum = part.slice(i + 1).reduce((s, a) => s + a, 0);
                part = part.slice(0, i + 1).concat(genOnes(sum))

                result.push(part.slice().reverse())
            }
        }
    }

    return result.slice(0, -1).sort() //last element is always [num]
}

function genOnes(num) {
    // generating [1,1,1,...,1]
    let ones = []
    for (let i = 0; i < num; i++) {
        ones.push(1)
    }
    return ones
}

console.log(sums(7))
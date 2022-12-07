/** Instructions
Create two functions:

    race: that works like Promise.race.
    some: that takes an array of promises or values, and count number. It should return the first count resolved values. Empty arrays or a count of 0 return a promise resolving to undefined.

Code provided
The provided code will be added to your solution, and does not need to be submitted.

Promise.race = undefined
*/
function race(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then(resolve).catch(reject)
        }
    })
}

function some(promises, N) {
    let results = []
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then((val) => {
                if (N-- === 0) resolve(results)
                else results.push(val)
            }).catch(reject)
        }
    })
}
/** Instructions
Create a function named series that takes an array of async functions. It must execute them in series and return the results in order.

*/

async function series(promises) {
    let results = []
    for (const promise of promises) {
        results.push(await promise())
    }
    return results
}
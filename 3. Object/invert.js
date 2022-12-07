/** Instructions
Create a function named invert which takes an object and returns it with its keys and values inverted.

*/

function invert(obj) {
    const res = {}
    Object.keys(obj).forEach((key) => {
        res[obj[key]] = key
    })
    return res
}
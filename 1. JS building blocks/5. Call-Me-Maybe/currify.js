/**Instructions
Create the function currify that will curry any functions put as argument.

example:

const mult2 = (el1, el2) => el1 * el2
console.log(mult2(2, 2)) // result expected 4

const mult2Curried = currify(mult2)

console.log(mult2Curried(2)(2)) // result expected 4
// (same result, with a function that has technically only one argument)
 */

function currify(func) {
    return function curried(...args) {
        if (args.length === func.length) {
            return func(...args);
        }
        return function (...argsNew) {
            return curried(...args.concat(argsNew));
        }
    };
}
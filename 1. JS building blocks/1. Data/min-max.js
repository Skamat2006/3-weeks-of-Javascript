/**INSTRUCTIONS
 Create a function named max that takes 2 number arguments and returns the largest of the two.

    You must not just use Math.max, make your own.

Create a function named min which is the same as max, but returns the lowest.

    You must not just use Math.min, make your own.
 */

function max(x, y){
    if (x > y) {
        return x
    }
    return y
}

function min(x, y){
    if (x < y) {
        return x
    }
    return y
}
/**INSTRUCTIONS
 Create a function named isPositive that takes a number as a argument, returning true if the number is strictly positive, and false otherwise.

Create a function named abs that takes a number as an argument and returns its absolute value. You must make your own implementation. You must not use Math.abs().
 */

function isPositive(number) {
    return number > 0
}

//Absolute value describes the distance from zero that a number is on the number line, without considering direction. The absolute value of a number is never negative.
function abs (n){
    if (n == 0) {
        return 0
    }

    if (!isPositive(n)) {
        return n * -1
    }

    return n
}
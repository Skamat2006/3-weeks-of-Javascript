/**INSTRUCTIONS
Create a function named sign that takes one number argument; returning 1 if the number is positive, -1 if the number is negative and 0 if the number is exactly 0.

You must not just use Math.sign, make your own.

Create a function named sameSign that takes 2 numbers as arguments and returns true if they both have the same sign, or false otherwise.

 */

function isPositive(num){
    return num > 0
}

function sign(n){

    if (isPositive(n)) {
        return 1
    }
    if (n==0) {
        return 0
    }
        return -1 
}

function sameSign(x, y){

    if (sign(x)==sign(y)){
        return true
    }
    return false
}

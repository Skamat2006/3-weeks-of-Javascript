/**
 * Instructions
Create a function named findExpression that takes a number as parameter and returns a string.

2 constant variables will be made available to your function: add4 and mul2.
Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
If the number can not be reached you should return undefined
For example, for the number 8, you must first multiply by 2 twice, and then add 4. Your function should return something like: 1 *2 *2 +4.

 */

const findExpression = (number) => {
    if(number%2 != 0) {
        return undefined
    }

    let resultstr ="1 ";
    let resultint = 1;
    let twocount =0;
    while( resultint%2 !=0 || (number-resultint)%4 !=0 ) {
        resultint = 2*resultint
        twocount++
    }
    let fourcount =0;
    while( resultint < number) {
        resultint = resultint +4
        fourcount++
    }
    resultstr += repeat(mul2,twocount) + repeat(add4,fourcount)
    resultstr = resultstr.slice(0, -1)
    return resultstr
}


const repeat = (str,t) => {
    let result = '';
    let temp = 0;

    if (t <= 0) {
        return ''
    }

    while (temp < t) {
        result += str +" ";
        temp += 1
    }
    return result
}

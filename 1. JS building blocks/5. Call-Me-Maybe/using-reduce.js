/**Instructions
Create the following functions:

Your solutions must use reduce.

adder: accepts an array of numbers, and returns the sum as a number.

sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.

funcExec: accepts an array of functions and executes them using reduce, returning the result.

Each function may accept an optional argument, which should be the initial value for the function's execution.

Example:
sumOrMul([1, 2, 3, 5, 8], 5) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160
 */

const adder=(array, num=0)=>array.reduce(((total,currentItem)=>total+currentItem),num)

const sumOrMul=(array,num=0)=>array.reduce(((total,currentItem)=>{
  if (currentItem%2===0){
      return total*currentItem
  }else{
      return total+currentItem
  }
  }), num)

const funcExec=(array,num=0)=>array.reduce((total,currentItem)=>currentItem(total),num)
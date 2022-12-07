/**Instructions
Create a map function that takes an array as the first argument, a function as second, and that works like the method .map

Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap

Code provided
The provided code will be added to your solution, and does not need to be submitted.

Array.prototype.map = undefined
Array.prototype.flatMap = undefined
Array.prototype.flat = undefined
 */


const map =(arr, func)=>{
    let result = []
    for (let i =0; i <arr.length; i++){
        result.push(func(arr[i], i, arr))

    }
    return result 
}

const flatMap  =(arr, func)=>{
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(func(arr[i], i, arr))
    }
    return [].concat.apply([], newarr);


}
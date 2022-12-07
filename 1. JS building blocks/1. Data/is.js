/**INSTRUCTIONS
Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

    is.num: value is a number.
    is.nan: value is NaN.
    is.str: value is a string.
    is.bool: value is a boolean.
    is.undef: value is undefined.
    is.def: value is defined.
    is.arr: value is an array.
    is.obj: value is a simple object or null objects.
    is.fun: value is a function.
    is.truthy: value is truthy.
    is.falsy: value is falsy.

 */


// const is = {} will be added to your solution, and does not need to be submitted.

    is.num = (n) => typeof n === 'number'
    //value NaN = not a number
    is.nan = (n) => Number.isNaN(n)
    is.str = (n) => typeof n === 'string'
    is.bool = (n) => typeof n === 'boolean'
    is.undef = (n) => n === undefined
    is.def = (n) => !is.undef(n)
    is.arr = (n) => Array.isArray(n)
    is.obj = (n) => typeof n === 'object' && !is.fun(n) && !is.arr(n) && n !== null
    is.fun = (n) => typeof n === 'function'

    //A truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
    /**
        if (true)
        if ({})
        if ([])
        if (42)
        if ("0")
        if ("false")
        if (new Date())
        if (-42)
        if (12n)
        if (3.14)
        if (-3.14)
        if (Infinity)
        if (-Infinity)
     */
    is.truthy = (n) => !!n == true ? true : false 
    
    // A falsy value is a value that is considered false when encountered in a Boolean context.
    /**
        if (false)
        if (null)
        if (undefined)
        if (0)
        if (-0)
        if (0n)
        if (NaN)
        if ("")
    */
    is.falsy = (n) => !n 
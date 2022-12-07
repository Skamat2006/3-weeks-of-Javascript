/**Instructions
Create two functions which taken an object and a string or array of strings. They should return a new object which:

    pick: contains only those keys which appear in the string or array of strings.
    omit: contains only those keys which do not match the string, or do not appear in the array of strings.

    Those functions are pure and must not modify the given object

 */

    function pick(obj, str) {
        if (typeof str === 'string') str = [str]
    
        const res = {}
        str.forEach(key => {
            if (obj[key] !== undefined) res[key] = obj[key]
        })
        return res
    }
    
    function omit(obj, str) {
        if (typeof str === 'string') str = [str]
        str.forEach(key => {
            delete obj[key]
        })
    
        const res = {}
        Object.keys(obj).forEach(key => {
            res[key] = obj[key]
        })
        return res
    }
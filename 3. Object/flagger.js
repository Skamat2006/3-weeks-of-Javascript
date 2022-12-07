/**Instructions
Create a function named flags that receives an object and returns the specific aliases and descriptions from the properties of that object.

The help flag:

    > Must be present in the output by default.
    > When not present in the input, it should return the description of all flags.
    > When present in the input, it specifies the descriptions of the flags that are passed to help. (ex: help: ['divide'])

Example:
    {
    multiply: 'multiply the values',
    divide: 'divides the values',
    help: ['divide']
    }
    
and outputs :
    {
    alias: { h: 'help', m: 'multiply', d: 'divide'}
    description: '-d, --divide: divides the values',
    }
 */

function flags(obj) {
    const res = {alias: {h: 'help'}, description: ''}
    Object.keys(obj).forEach(key => {
        if (!res.alias[key[0]]) {
            res.alias[key[0]] = key
        }
    })
    // show info about keys from help or all keys if help is undefined
    res.description = (obj.help ? obj.help : Object.keys(obj)).reduce((prev, key) => {
        return prev + `-${key[0]}, --${key}: ${obj[key]}\n`
    }, res.description).slice(0, -1)

    return res
}
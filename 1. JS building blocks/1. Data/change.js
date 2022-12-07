/**INSTRUCTIONS
 * Create 2 functions:

    get: a function that takes a key and returns the corresponding value from the sourceObject.

    set: a function that takes a key and a value. Update the value for the corresponding property of the sourceObject and return the value.
 */

/**
 const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
 */

    function get(a) {
        return sourceObject[a]
    };

    function set(a,b) {
        sourceObject[a] = b
        return sourceObject[a]
    };
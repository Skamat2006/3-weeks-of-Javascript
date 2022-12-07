/** Instructions
Create two functions that will work like _.debounce from lodash.

    debounce: don't worry about the options.
    opDebounce: implement the leading options.
*/

function debounce(func, wait) {
    let timer;
    return function () {
        const fnCall = () => func.apply(this, arguments)
        clearTimeout(timer)
        timer = setTimeout(fnCall, wait)
    }
}

function opDebounce(func, wait, immediate) {
    let timer;
    return function () {
        const fnCall = () => {
            timer = null;
            if (!immediate) func.apply(this, arguments)
        }

        if (immediate && !timer) func.apply(this, arguments)

        clearTimeout(timer);
        timer = setTimeout(fnCall, wait)
    }
}
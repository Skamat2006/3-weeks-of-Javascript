/**
 * Instructions
Create 3 functions, which accept a string which we'll refer to as the dataSet. Your function should return an array of strings.

getURL: returns all URLs present in the dataSet.
greedyQuery: returns URLs from the dataSet, with at least 3 query parameters.
notSoGreedy: returns URLs from the dataSet, with at least 2, but not more then 3 query parameters.

Example dataSet:

qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you

 */

// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you"

function getURL(dataSet) {
    let reg = /https?:\/\/\b([\w()@:%_\-\[\]+.,~#?&/=]+)/g
    return dataSet.match(reg) || []
}

function greedyQuery(dataSet) {
    let urls = getURL(dataSet)
    let result = []
    for (const i in urls) {
        let params = new URLSearchParams(urls[i])
        if (Array.from(params).length > 2) result.push(urls[i])
    }
    return result
}

function notSoGreedy(dataSet) {
    let urls = getURL(dataSet)
    let result = []
    for (const i in urls) {
        let params = Array.from(new URLSearchParams(urls[i]))
        if (params.length === 2 || params.length === 3) result.push(urls[i])
    }
    return result
}

// console.log(getURL(dataSet))
// console.log(greedyQuery(dataSet))
// console.log(notSoGreedy(dataSet))
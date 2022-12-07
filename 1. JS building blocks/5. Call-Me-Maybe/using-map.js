/**Instructions
Create the following functions:

Your solutions must use map.

Cities Only
citiesOnly: accepts an array of objects and returns an array of strings from the city key.

citiesOnly([
  {
    city: 'Los Angeles',
    temperature: '  101 °F   ',
  },
  {
    city: 'San Francisco',
    temperature: ' 84 ° F   ',
  },
]) // -> ['Los Angeles', 'San Francisco']

Upper Casing States
upperCasingStates: accepts an array of strings, and returns a new array of strings. The returned array will be the same as the argument, except the first letter of every word must be capitalized.

upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']

Fahrenheit to Celsius
fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. Round down the result.

fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']

Trim Temp
trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. The temperature strings must have their spaces removed in the new array.

trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]) /* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */

/*
Temp Forecasts
tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:

tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]) // -> ['38°Celsius in Pasadena, California']
 */
function citiesOnly(array){
    let result = array.map(element => element.city)
    return result
}

const toUpper= str => str.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase()) 
function upperCasingStates(arr) {
    return arr.map(toUpper)
}

function fahrenheitToCelsius(arr){
    return arr.map(str=>Math.floor((parseInt(str)-32)/1.8)+'°C')
}

function trimTemp(arr) {
    return arr.map(element => {
        element.temperature = element.temperature.replace(/\s/g, '')
        return element
    })
}

function tempForecasts(arr){
    return  arr.map(element => `${element.temperature = Math.floor((parseInt(element.temperature)-32)/1.8)+'°Celsius'} in ${element.city}, ${element.state=element.state.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())}`)
}
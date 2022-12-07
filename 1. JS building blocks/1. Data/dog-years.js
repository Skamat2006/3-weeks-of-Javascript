/** INSTRUCTIONS
 Someone once said that a human year is equal to 7 dog years.

Create a function named dogYears, that accepts the name of a planet, and the age of the dog in seconds. Your function should return the age of the dog on that planet in dog years.

    earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
    mercury: orbital period 0.2408467 Earth years.
    venus: orbital period 0.61519726 Earth years.
    mars: orbital period 1.8808158 Earth years.
    jupiter: orbital period 11.862615 Earth years.
    saturn: orbital period 29.447498 Earth years.
    uranus: orbital period 84.016846 Earth years.
    neptune: orbital period 164.79132 Earth years.
If you were told that a dog was 1,000,000,000 seconds old, you should calculate that the dog would be 221.82 Earth-years old.

You will have to format the number so that the result is rounded like the example above.

 */

const planets = {
    earth: 1, //orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

//humanAge / (earthyear) = (dogAge-2)*4 + 21
// ((humanAge-21)/4) - 2 = dogAge

let year = 31557600; // or 31,557,600 seconds

function dogYears (planet, dogsAge) {

dogsAge = dogsAge / year

dogsAge = dogsAge / planets[planet] * 7

return Math.round(dogsAge);

}

// let newAge = (7 / Planets[name]) * (age / 31557600);
// return parseFloat(newAge.toFixed(2));

//console.log(dogYears('earth', 220903200))
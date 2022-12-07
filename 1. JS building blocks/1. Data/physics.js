/**INSTRUCTIONS
Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.

He must use the Second Law of Motion that states, "when the forces acting on an object are unbalanced, the object will accelerate."

This acceleration is dependent upon the force that acts upon the object and the object's mass.

So he wants to know what the acceleration of that object is, depending on its properties:

    mass of xx
    Δv of xx
    Δt of xx
    force of xx
    distance xx
    time xx
Create a function named getAcceleration that calculates the velocity of a given object. For example:

    {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d: 10
    }

If its not possible to calculate it, it must return the string "impossible".

FORMULAS
    a = F/m
    a = Δv/Δt
    a = 2d/t^2

    a = acceleration
    m = mass
    F = force
    Δv = final velocity - initial velocity
    Δt = final time - initial time
    d = distance
    t = time
 */

// const object = {
//     f: 10,
//     m: 5,
//     Δv: 100,
//     Δt: 50,
//     t:1,
//     d: 10
// }

// function getAcceleration(object)

const getAcceleration = (object) => {

    let a = object.f/object.m
    let a2 = object.Δv/object.Δt
    let a3 = (object.d*2)/(object.t*object.t)


    if(typeof(object.f) && typeof(object.m) == 'number'){
        return a
        }
    if(typeof(object.Δv) && typeof(object.Δt) == 'number'){
        return a2
        }
    if(typeof(object.d) && typeof(object.t) == 'number'){
        return a3
        }
    return 'impossible'
}
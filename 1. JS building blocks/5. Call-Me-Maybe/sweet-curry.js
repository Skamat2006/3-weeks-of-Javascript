/**Instructions
Create the following functions with the "currying" process. Those functions should accept only one argument each.

mult2: that multiplies two numbers.
add3: that adds three numbers.
sub4: that subtracts four numbers.
 */

function mult2(a) {
    return function(b) {
      return a*b
    }
}

function add3(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

function sub4(a){
    return function(b){
        return function(c){
            return function(d){
                return a-b-c-d
            }
        }
    }
}
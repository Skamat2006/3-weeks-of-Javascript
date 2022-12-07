/**INSTRUCTIONS
 Create some functions which behave like JavaScript's Math rounding functions:

    round: which behaves similar to Math.round().
    ceil: which behaves similar to Math.ceil().
    floor: which behaves similar to Math.floor().
    trunc: which behaves similar to Math.trunc().
 */

    
function modulo(num1, num2) {
    var sign = num1 < 0 ? -1 : 1;
    var dividend = Math.abs(num1);
    var divisor = Math.abs(num2);
    
    if (dividend === 0) {
        return 0;
    }
    if (dividend === 0 || isNaN(dividend) || isNaN(divisor)) {
        return NaN;
    }
    if (dividend < divisor) {
        return sign * dividend;
    }
    
    var counter = dividend;
    while (counter >= divisor) {
        counter = counter - divisor;
    }
    return sign * counter;
}

function round(number){
if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY){
return number;
}else if (number>=0){
        let num=trunc(number);
        let mod=number-num;
        if (mod>=0.5){
            let result=number+(1-mod);
            return result;
        }else{
            let result=number-mod;
            return result;
        }
    }else{
        let num=trunc(number);
        let mod=number-num;
        if (mod<=-0.5){
            let result=number-(1+mod);
            return result;
        }else{
            let result=number-mod;
            return result;
        }
    }
}

function ceil(number){
    if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY||Number.isInteger(number)){
    return number;
    }
    let mod=modulo(number,1);
    if (mod>=0){
        let result=number+(1-mod);
        return result;
    }else{
        let result=number-mod;
        return result;
    }
}

function floor(number){
    if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY||Number.isInteger(number)){
    return number;
    }
    let mod=modulo(number,1);
    if (mod>=0){
        let result=number-(mod);
        return result;
    }else{
        let result=number+(-1-mod);
        return result;
    }
}

function trunc(number){
    if (number==Number.POSITIVE_INFINITY||number==Number.NEGATIVE_INFINITY||Number.isInteger(number)){
    return number;
        }
    if (number>=0xfffffffff){
    let newNum=number-0xfffffffff;
    let remainder=modulo(newNum,1);
    let newNum2=newNum-remainder;
    let result=0xfffffffff+newNum2;
    return result;
    }else{
    let remainder=modulo(number,1);
    return number-remainder;
    }
}


// ////////////////////////

// function round(number){
//     let compteur = 0
//     let NUMBER = number

//     if (number < 0){
//         NUMBER = -number
//     }
    
//     if (NUMBER %1 == 0){
//         return number
//     }

//     for(let i = 0;i<NUMBER;i++){
//         compteur = i
//     }

//     if(NUMBER%1>=0.5){
//         if (number < 0){
//             return -compteur-1
//         }
//         return compteur + 1
//     }else if (NUMBER%1<0.5){
//         if(number < 0){
//             return-compteur
//         }
//         return compteur
//     }
//     return NaN
// }
    
// function ceil(number){
    
//     let compteur = 0
//     let NUMBER = number
    
//     if (number < 0){
//         NUMBER = -number
//     }

//     if (NUMBER %1 == 0){
//         return number
//     }
    
//     for(let i =0;i<NUMBER;i++){
//         compteur = i
//     }

//     if (number > 0){
//         return compteur + 1
//     }else if (number< 0){
//         return -compteur
//     }

//     return NaN
// }
    
// function floor (number){
    
//     let compteur = 0
//     let NUMBER = number
    
//     if (number < 0){
//         NUMBER = -number
//     }

//     if (NUMBER %1 == 0){
//         return number
//     }

//     for(let i =0;i<NUMBER;i++){
//         compteur = i
//     }

//     if (number > 0){
//         return compteur
//     }else if (number< 0){
//         return -compteur - 1
//     }
//     return NaN
// }
    
// function trunc(number){
//         return number - (number%1)
// }
    
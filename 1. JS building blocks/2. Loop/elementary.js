/**INSTRUCTIONS
Create 3 functions which each take (a, b) as arguments:

    multiply that acts like the * operator, without using it.
    divide that acts like the integer division operator /, without using it.
    modulo that acts like the % operator, without using it.
 */
    function multiply(a, b) {
        let num = 0;
      
        if (a && b > 0) {
          for (let i = 0; i < b; i++) {
            num += a;
          }
          return num;
        }
      
        if (a < 0 && b > 0) {
          for (let i = 0; i < b; i++) {
            num += Math.abs(a);
          }
          return -Math.abs(num);
        }
      
        if (a > 0 && b < 0) {
          for (let i = 0; i < Math.abs(b); i++) {
            num += a;
          }
          return -Math.abs(num);
        }
      
        if (a < 0 && b < 0) {
          for (let i = 0; i < Math.abs(b); i++) {
            num += Math.abs(a);
          }
          return num;
        } else {
          return 0;
        }
      }
      
      
      function divide(a, b) {
        //when a is smaller than b (both a and b positive)
        if (a < b && a > 0) {
          return 0;
        } else if (a > b && b > 0) {
        //^^^when a is greater than b, quotient >0 (both a and b positive)
          let quotient = 0;
          while (a >= 0 && a >= b) {
            //check how many times its possible to subtract a from b
            a -= b;
            quotient++;
          }
          return quotient;
        } else if (a < 0 && b > 0) {
        //^^^when a is negative and b is positive
          let quotient = 0;
          let c = -a;
      
          while (c >= 0 && c >= b) {
            c -= b;
            quotient++;
          }
          return -quotient;
        } else if (a > 0 && b < 0) {
        //^^^when a is positive while b is negative
          let quotient = 0;
          let d = -b;
      
          while (a >= 0 && a >= d) {
            a -= d;
            quotient++;
          }
          return -quotient;
        } else if (a < 0 && b < 0) {
        //^^^when both a and b is negative
          let quotient = 0;
          let c = -a;
          let d = -b;
      
          while (c >= 0 && c >= d) {
            c -= d;
            quotient++;
          }
          return quotient;
        }
      }
      
      function modulo(a, b) {
        //a = dividend, b= divisor, quotient = dividend/divisor
        let quotient = divide(a, b);
        //d = divisor *(dividend / divisor)
        let d = multiply(quotient, b);
        //mod = dividend - (divisor * (dividend / divisor))
        let mod = a - d;
        return mod;
      }
      

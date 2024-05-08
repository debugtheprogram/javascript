let userId = 102040;

let userInput = "123aa";

//console.log(typeof userInput); // String


/** conversion */

let convertUSerInput = Number(userInput);

//console.log(typeof convertUSerInput); // number

//  but check the convert value 

//console.log(convertUSerInput); // NaN

/**
 * "23" => 23
 * "23xyz" => NaN
 * true => 1;
 * false => 0;
 * 
 * 
 * 1 => true;
 * 0 => false;
 * "" => false;
 * "shoaib" => true;
 */

/** conversion of different dataTypr
 * 
 * Number();
 * String();
 * Boolean();
 */


//************** OPERATIONS ***************** */

let value = 3;
let negValue = -value;
console.log(negValue); // -3


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 = "hello";
let str2 = "shoaib";

let str3 = str1 + str2 ;

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33

console.log(+true); //--> 1
console.log(+"");  //--> 0

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //--> 101
++gameCounter;

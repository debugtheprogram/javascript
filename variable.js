const accountId = 615623589;
let accountEmail = "xyz@gmail.com";
var accountPassword = "332244";
accountCity = "Bangalore";

let accountState ;

/** const assigned value can't be changed it throws a error*/
//accountId = 2;

console.log(accountId);

// {
//     scope in js
// }

/**
 * prefer not to use var
 * because of issue in block scope and function scope
 */

accountEmail = "abcd@gmail.com";
accountPassword = "212156";
accountCity = "chennai";

console.table([accountId, accountEmail, accountPassword, accountCity]);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
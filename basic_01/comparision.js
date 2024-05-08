let a = 10;
let b = 20;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

console.log(null > 0);
console.log(null == 0);  // avoid this type of comparision
console.log(null >= 0);

console.log(undefined == 0); 
console.log(undefined > 0);  // avoid this type of comparision
console.log(undefined < 0);


console.log("2" == 2); //--> true it only compare the valyue

console.log("2" === 2); //--> false it compare both value and the dataTypes



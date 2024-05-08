//primitive DataTypes

// 7 types it also know as call by value
/**
 * String
 * Numner
 * Boolean
 * null --> it is empty
 * undefined --> variable declared not initialize
 * Symbol --> unique value
 * 
 */

const score = 100;
const scoreValue = 100.2;

const isLoggedIn = false;
const outsideTemp = null;
const name = "shoaib";

let userEmail;

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id === id2);

const bigNumber = 25765687489585744n;

// Javascript is a dynamically typed language

// Reference (Non primitive)
/**
 * Array
 * Objects
 * Functions
 */

const heros = ['ironMan','superMan','hulk'];

const person = {
    name:"shoaib",
    age:24,
}

function greet(name){
    console.log("Hello "+this.name);
}

console.log(typeof outsideTemp);
//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
var num = 10;

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
var str = "Rana Saud";

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
var present = true;

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
var isUndefined = undefined;

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
var isNull = null;

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
const mySymbol = Symbol("description");

console.log(`
Number: ${num}
String: ${str}
Boolean: ${present}
undefined: ${isUndefined}
Null: ${isNull}
BigInt: ${bigNumber}
`);

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓
// * Ans: Null is a special value that represents the absence of a value. Undefined is a variable that has not been assigned a value.

//? 2: What is the purpose of typeof operator in JavaScript❓
// * Ans: The typeof operator returns the type of a variable or an expression.

//? 3: What is the result of `typeof undefined` in JavaScript❓  // output: undefined

//? 3: What is the result of `typeof null` in JavaScript❓  // output: object

//? 4: What are primitive data types in JavaScript❓
// * Ans: Number, String, Boolean, Undefined, Null, BigInt, Symbol

//? 5: What are non-primitive data types in JavaScript❓
// * Ans: Object, Function, Array

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
var str = "42";
var num = +str;
console.log(num);

//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:
var num = 42;
var str = "" + num;
console.log(str);

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓
// * Ans: Truthy values are values that are considered true in JavaScript. Falsy values are values that are considered false in JavaScript.
//& Examples truthy values: true, 1, "Hello", [], {}.
//& Examples falsy values: false, 0, "", null, undefined, and NaN.

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

var myName = "";
myName ? console.log("truthy") : console.log("falsy");

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString, 10);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓
//^ Ans: NaN is a special value that represents an invalid or non-numeric value.

//* ========== parseInt & parseFloat End Section ==========

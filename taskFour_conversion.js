/**
 * Numeric Conversion: value ('string') is explicitly converted to a number
 */
let str = "567";
console.log(typeof str); // string

let num = Number(str); // becomes a number 567
console.log(typeof num);  // number


/**
 * String Conversion: value ('boolean') is explicitly converted to a string
 */
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

/**
 * Boolean Conversion: 0, an empty string, null, undefined and NaN 
 * are explicitly converted to fasle. 
 * Other values become true 
 */
//console.log(Boolean(1) ); // true
//console.log(Boolean(0) ); // false

console.log(Boolean("hello") ); // true
console.log(Boolean("") ); // false
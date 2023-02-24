/**Numeric Conversion*/
let str = "567";
console.log(typeof str); // string
let num = Number(str); // becomes a number 567
console.log(typeof num);  // number
/** String Conversion*/
let value = true;
console.log(typeof value); // boolean
value = String(value); // now value is a string "true"
console.log(typeof value); // string
/**Boolean Conversion*/
console.log(Boolean("hello") ); // true
console.log(Boolean("") ); // false
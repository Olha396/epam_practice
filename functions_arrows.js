/**
 * Arrow functions
 */
// no keyword 'function'
// have no 'this'
// NOT HOISTED


//const sum = (a, b) => {
    //return a + b;
//};


// arrow function can be much shorter

// const sum = (a, b) => {return a + b;}

const sum = (a, b) =>  a + b;

const result = sum(5,25);
console.log('result is: ', result);

/** One argument */

const double = a => a * 2;
const result = double (10);
console.log('result is: ', result);

/**Empty arguments */

const sayHay = () => console.log('Hey, I am arrow function without arguments!');
sayHay();
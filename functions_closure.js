/**
 * Closures
 */
//outer function
function makeFunction(){
    let a = 1;
    // closure functions
    return function inner(){
        console.log('a inside inner', a);
    };
}

const print = makeFunction();
//console.log(print);

print();

// we are using OUTSIDE variable INSIDE of a function
// a closure provides access to the scope of outer function from the inner function

//outer 
function makeCounter(){
    let count = 0;
    // closure 
    return function (){
        console.log('count:', count);
        return count++;
    };
}
const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


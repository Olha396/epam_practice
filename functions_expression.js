/**
 * Function Expression
 */
// assigned to variable
//no identifier
// NOT HOISTED


const sum = function(a, b){
    return a + b;
}

const result = sum(5, 10)
console.log('result is: ', result);

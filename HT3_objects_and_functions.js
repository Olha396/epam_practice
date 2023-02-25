/*Car, color: black, chaning color to green and adding enginePower*/
const car = {
    color: "black",
    //color: "green",
    enginePower(){
        this.enginePower
    }
}
 console.log(car);

 /**Adding pears and apples */
 const sum = function(a, b){
    return a + b;
}
const result = sum(600, 800) // accepted pears 600, apples 800
console.log('result is: ', result);

/**Hello, Olha! in the payment terminal */

const prompt = require("prompt-sync")({ sigint: true }); 
    let name;
    let eneteredName = prompt("Enter your name");
    if (name = "Olha") {
        console.log("Hello '+ name +'!");
    } else {
        console.log("There is no such name!");
    }

/**A Number is prime or not */

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false
  }
    return true;
}
/**Calculating the type of arguments */
const sum = (a, b) =>  a + b;

const result = sum(5,25);
console.log('result is: ', result);
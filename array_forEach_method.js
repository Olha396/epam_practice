/**Printing names to console */
//const arrayOfName = ['Alice', 'Jack', 'John', 'Jane', 'Bob'];

//arrayOfName.forEach(name => console.log(name));



/**Index and value */
//const arrayOfName = ['Alice', 'Jack', 'John', 'Jane', 'Bob'];

//arrayOfName.forEach((name, index) => {

    //return console.log(`Element index: ${index} Element value: ${name}`);
//});

/**+arr */
const arrayOfName = ['Alice', 'Jack', 'John', 'Jane', 'Bob'];

arrayOfName.forEach((name, index, arr) => {

    return console.log(`Index: ${index} Value: ${name} Array: ${arr}`);
});
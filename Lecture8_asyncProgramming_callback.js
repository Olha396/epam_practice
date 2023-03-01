/** A call back function is a function passed to another function as an argument,
 * which is then invoked inside the outer function to complete some kind of routine or action.
 * Used in JS to organiza async code*/
const fs = require('fs');

fs.readFile('file.txt', 'utf-8', handleResult);

function handleResult(err, data) {
    if(err) throw err
    console.log(data);
}
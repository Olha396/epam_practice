/** A Promise object represents the eventual comletion (of failure),
 * of an asynchronous operation and its resulting value.
 * 
 * promise states:
 * pending: initil state , neither fullfilled nor rejected.
 * fullfilled: meaning that the operation was completed sucessfully.
 * rejected: meaning that the operation failed.*/
//const fs = require('fs/promises');

//const promise = fs.readFile('file.txt', 'utf-8');

//promise
//.then(data => {
    //return data
//})
//.then(data => {
 //})

const rejectedPromise = fs.readFile('file3.txt', 'utf-8');
rejectedPromise
    .then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
});

const fs = require('fs');
const readFilePromise = new Promise((resolve,reject) => {

fs.readFile('./file.txt', 'utf-8', (err,data) => {
    if(err) reject(err);
    resolve(data);
    });
});
readFilePromise.then(data => {
    console.log(data);   
});



//const rejected = Promise.reject('custom error'));
//rejected.catch(err => {
    //conslole.log(err);   
//});


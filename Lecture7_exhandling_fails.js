const fs = require('fs');
const pathToDB = './database.jason';

function printUsers() {
    const users = JSON.parse(fs.readFileSync(pathToDB));
    return console.log(users)
}

printUsers();
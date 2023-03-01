const fs = require('fs');
const pathToDB = './database.jason';
const pathToBackupDB = './backup_database.jason';
function printUsers() {
    let users;
    try {
        users = JSON.parse(fs.readFileSync(pathToDB));  
    } catch {
        console.log(`Database not found! Using backaup database.`);
        users = JSON.parse(fs.readFileSync(pathToBackupDB));  
    } finally {
        console.log(users);
    }
}


/**Task_1: Movie names printed in the console */
const arrayOfMovieName = ['John Wick', 'Oppenheimer', 'Dune', 'Indiana Jones and Dial of Destiny', 'Dungeons and Drugons'];

arrayOfMovieName.forEach(name => console.log(name));


/*Task_7: outputring index of element on the conslole*/
const arrayOfNumber = [11, 22, 66, 88, 99];

arrayOfNumber.forEach((number, index) => {

    return console.log(`Element index: ${index} Element value: ${number}`);
});


/**Task_8: loop that prints the number "a" less than 10 */

const arr = [1,2,3,4,5,6,7,8,9,10]

for (let a = 0; a <arr.length; a++) {
    console.log(arr[a]);
}
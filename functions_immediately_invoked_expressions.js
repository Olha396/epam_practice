/**
 * Immediately Invoked Function Expression (IIFE)
 */

(function(){
    console.log('Did you call me?');
})()

(function(){
    console.log('I am A and I was called');  
}) ()

//a();
//a();
//a();

(function (name){
    console.log('I am ' + name + ' and I was called'); 
})('Jack');

let b = function (name){
    console.log('I am ' + name + ' and I was called'); 
};

b('Jack')


//assignment
let x = 12;
console.log('x =', x);
 
//arithmetic
let add = 10 + 4;
console.log('sum =', add);
let sub = 10 - 4;
console.log('sub =', sub);
let mul = 10 * 4;
console.log('mul =', mul);
let div = 10 / 2;
console.log('div =', div);
let mod = 8 % 2;
console.log('mod =', mod);
let pow = 10 ** 2;
console.log('pow =', pow);
  
let i = 1;
//let k = i++;
let k = ++i;
console.log('k =', k);
console.log('i =', i);

let j = 1;
j--;
--j;
console.log('j =', j);

//additional assignment
const INCREMENT_VALUE = 6;
let value1 = 100;
let value2 = 100;
let value3 = 100;
let value4 = 100;
let value5 = 100;

value1 += INCREMENT_VALUE; //value1 + INCREMENT_VALUE
console.log('value1 =', value1);
value2 -= INCREMENT_VALUE; //value1 - INCREMENT_VALUE
console.log('value2 =', value2);
value3 *= INCREMENT_VALUE; 
console.log('value3 =', value3);
value4 /= INCREMENT_VALUE; 
console.log('value4 =', value4);
value5 %= INCREMENT_VALUE; 
console.log('value5 =', value5);

//comparison
let eq = 5 == 5;
let eq2 = 5 == '5';
console.log('eq =', eq);
console.log('eq2 =', eq2);

let seq1 = 5 === 5;
let seq2 = 5 === '5';
console.log("strict equality =", seq1);
console.log('strict equality =', seq2);

let uneq  = 5 != '5';
let suneq = 5 !== '5';
console.log('unequality =', uneq);
console.log('strict unequality =', suneq);

let gt = 2 > 2;
let gte = 2 >= 2;
let lt = 3 < 3;
let lte = 3 <= 3;
console.log('gt =', gt);
console.log('gte =', gte);
console.log('lt =', lt);
console.log('lte =', lte);

//logical
let statement1 = 3 > 2; //true
let statement2 = 0 > 1; //false

let antitruth =! statement1;
console.log('antitruth =', antitruth);

let or = statement1;
console.log('or =', or);

//typeof
let str = typeof "John";
let nmb = 3.14;
let bool = typeof false;
console.log('str =', str);
console.log('nmb =', nmb);
console.log('bool =', bool);
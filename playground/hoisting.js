// ACCESS FUNCTIONS AND VARIABLES BEFORE THEY ARE CREATED
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

/* esline-disable */
let age;
console.log(age);
age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b){
  return a + b;
}

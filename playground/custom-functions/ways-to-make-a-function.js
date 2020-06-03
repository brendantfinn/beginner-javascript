/* eslint-disable */
// JAVASCRIPT FUNCTIONS are first class citizens

const age = 100; // value is 100 (number)
const cool = true; // value is true (booleans)

// FUNCTIONS can be passed into other functions, stored in variables, can be handled and moved around just like any other data in JAVASCRIPT.

// DIFFERENT WAYS TO DECLARE FUNCTIONS
function doctorize1(firstName) {
  return `Dr. ${firstName}`;
}
console.log(doctorize1('Billy'));

// Anonymous Function - FUNCTION STATEMENTS REQUIRE A FUNCTION NAME(although valid in call back and iffy)
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// RUNNING A FUNCTION BEFORE YOU DEFINE IT
// console.log(doctorize2('Wes')); // DOCTORIZE2 will NOT work. Since its not hoisted
console.log(doctorize3('Wes'));

// FUNCTION EXPRESSION - create variable and stored value is a function
const doctorize2 = function(firstName) {
  return `Dr. ${firstName}`;
};
console.log(doctorize2);

// HOISTED FUNCTIONS - JS will bring functions up to top of document so you can run a function before its defined
function doctorize3(firstName) {
  return `Dr. ${firstName}`;
}

// ARROW FUNCTIONS EXAMPLE
function inchToCm1(inches) {
  const cm = inches * 2.54;
  return cm;
}
console.log(`inchToCm1: ${inchToCm1(3)}`);

// ARROW
const inchToCm2 = inches => inches * 2.54;
// drop keyword function and return for implcit return.
// if there is only one argument you don't need (parentheses )
console.log(`inchToCm2: ${inchToCm2(3)}`);

function add1(a, b = 3) {
  const total = a + b;
  return total;
}
console.log(`add1: ${add1(1, 4)}`);
console.log(`add1: ${add1(1)}`);

// ARROW
const add2 = (a, b = 3) => a + b;
console.log(`add2: ${add2(1, 4)}`);
console.log(`add2: ${add2(1)}`);

// returning an OBJECT

function makeABaby1(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}
console.log(makeABaby1('kit', 'bos'));

// ARROW - just because its arrow doesnt make it better- This seems harder to read
const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 });
console.log(makeABaby2('arrow', 'baby'));

// IFFE
//  Immedfiatley Invoked Function Expression

const x = function() {
  console.log('Running The Anon function');
  return ' You Are Cool';
};

console.log(x);

// IFFE EXAMPLE ()(); - put the function in a parentheses and then envoke it it will run this function expression immediatley
(function(age1) {
  console.log('Running The Anon function');
  return ` You Are Cool ${age1}`;
})();

// METHODS - A function that lives inside of an object
// CONSOLE is an object LOG is a function.
console.log('this is a method');

const sally = {
  name: 'Sally Bos',
  //METHOD
  sayHi: function() {
    // browser will infer the name of the function from the varible that it is in
    // console.log(`Hi, ${this.name} - sayHi is a method function`);
    return `METHOD: Hi, ${sally.name}! sayHi is a method(function)`;
    
  },
  //SHORT HAND METHOD
  yellHi(){
    // console.log(`HELLO ${this.name.toUpperCase()}!`);
    return `SHORTHAND: Hi, ${this.name.toUpperCase()}! yellHi is a short hand method(function)`;
  },
  //ARROW FUNCTION METHOD
  whisperHi: () =>{
    // console.log(`HELLO ${this.name.toLowerCase()}!`);
    return `ARROW: Hi, ${sally.name.toLowerCase()} - whisperHi is a arrow (function)method`;
    //arrow functions do not have a scope of this. So instead i am using DOT notation. 
    //DOT NOTATION TO GRAB NAME OUT OF OBJECT. Sally {Object} . Name since thats the key's value we want.
  }
};
console.log(sally.sayHi(),sally.yellHi(),sally.whisperHi())

//CALL BACK FUNCTIONS 

// CLICK CALLBACK - a function that gets passed into another function and then is called by the browers at a later point in time
const button = document.querySelector('.clickMe')
console.log(button)
//listen for click on button

function handleClick(){
  console.log('Great Clicking!');
}
button.addEventListener('click', sally.name.sayHi);

button.addEventListener('click', handleClick);

button.addEventListener('click', function(){
  console.log('ANON FUNCTION: nice Clicking!');
});

// TIMER CALLBACK 
setTimeout(sally.name.sayHi, 3000 ) 

setTimeout(function(){
  console.log('TIMER CALLBACK: Time to eat!')
}, 3000 )




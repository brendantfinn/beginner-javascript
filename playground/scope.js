/* eslint-disable */



//VAR are attached to the WINDOW object & are globally scoped 
var age = 100;
//window.age 

//CONST & LET  = are global scope but not attached to WINDOW object
const first = 'wes';
//window.first -- UNDEFINED
let second = 'bos';
//window.second -- UNDEFINED


//AVIABLE IN GLOBAL SCOPE - functions when made globally are aviable in WINDOW
function sayHi(){
console.log('Hi!');
}


function go(){
  const myAge = 140; // THIS SHADOWS the variable age outside this function you can no longer use age outside.. rename to a better name myage?
  const hair = 'blonde'
  console.log(age); // SCOPE LOOK UP - if variable is not found in function it looks up into the next level of scope and so on
  console.log(hair); // 
}
// WHEN VARIABLES ARE CREATED INSIDE OF A FUNCTION - those variables are only avaible INSIDE that function
go(); // Error: hair is not defined
console.log(age);//RUNS - 
// console.log(hair); // Error: hair is not defined


if (1 === 1) {
  // CODE BLOCKS/GATES: if something is created inside of the gates.. you can not access it form outside the gates
  var cool1 = true; // WORKS:
  const cool2 = true; // DOESNT WORK: 
  let cool3 = true; // DOESNT WORK:
}
console.log(cool1)

function isCool(name){
  let cool; // LET & CONST variables are BLOCK SCOPED
  if (name === 'wes'){
    cool = true;
  }
  // console.log(cool);
  return `${name} isCool: ${cool}`;
}
console.log(isCool('wes'));

function isLame(name){
  if (name === 'bos'){
    var lame = false; // VAR varaibles are FUNCTION SCOPED
  }
  // console.log(cool);
  return `${name} isLame: ${lame}`;
}
console.log(isLame('bos'));



for(let i = 0; i < 10; i++){ 
  console.log(i);
}




const dog = 'snickers';

// Running logDog will output SNICKERS since 
function logDog(dog = 'snickers'){// logDog parameter would be best and just pass an argument of what ever youd like the dog name to be.
  console.log(dog); // no variable dog defined inside function logDog(); so it Scope Looks up and logs varaible value dog SNICKERS
}

function goDog(){ 
  const dog = 'sunny'; // locally scoped variable DOG 
  logDog('bugs');// PAS ARGUMENT HERE
}

goDog();




function sayHi(name){
  function yell(){
    console.log(name.toUpperCase())
  }
  yell();
}

console.log(sayHi('wes'));
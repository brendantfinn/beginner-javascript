/* eslint-disable */

/* BLOCK COMMENT */
//LINE COMMENT 

///STRINGS
const name = 'wes';
const middle = "topher";
const last = 'bos';

const sentence = "she's so \"cool\""; // need to escape quotes so it doesnt break string
const sentence2 = `she's so "cool"`; //back ticks


//Quotes you need to escape line breaks
const song = 'ohh\
\
\
ya\
\
i like\
\
pizza'

//Backticks pick up line break with no issue
const song2 = `ohh


ya

i dont like

hotdogs`
// Template literals
const hello = "hello this is an example of concatenation " + name + "..there is a varible (name) in between"
console.log(hello)

const hello2 = `hello2 this is an example of concatenation ${name} there is a varible (name) in between and some math: 100 + 74 = ${100 +74}`
console.log(hello2)


//NUMBERS


let age = 27.8; // Number - Float is a decimal 
const birthYear = 1993 //Number integer is a whole number
console.log(age, name)

const a = 10;
const b = 20;
console.log(`Addition(10, 20): ${a+b}`)
console.log(`Subtraction(10, 20): ${a-b}`)
console.log(`Multiplication(10, 20): ${a*b}`)
console.log(`Division(10, 20): ${a/b}`)
console.log(`Math Round(20.5): ${Math.round(20.5)}`) //Rounds up
console.log(`Math Floor(20.5): ${Math.floor(20.5)}`) // Rounds Down


const smarties = 20;
const kids = 3;
// const eachKidGets = smarties / kids; 6.66667 - NEED FLOOR
const eachKidGets = Math.floor(smarties / kids);

console.log(`Each kid gets ${eachKidGets}`)
const dadGets = smarties % kids; // whats left over
console.log(`Dad gets ${dadGets} smarties`)

const price = 1035; // store money in cents


//OBJECTS - EVERYTHING IN JAVASCRIPT IS A OBJECT 
//Order doesn't matter in an Object - it cane be any order. If you need ORDER us an ARRAY
const person = {
    //properties: value
    first: 'wes',
    last: 'bos',
    age: 32,
};
console.log(person)

// NULL & UNDEFINDED
// UNDEFINDED creating a variable and not setting a value will be read as UNDEFINDED 
let puppy
console.log(`Puppy Undefined: ${person.dog}`)
console.log(`Dog Undefinded: ${person.dog}`) // UNDEFINDED - since nothing is there

let somethingUndefined;//can't const something that doesnt have a value
const somethingNull = null; // NULL has a value that is explictly set to nothing aka NULL 


//BOOLEANS and EQUALITY

//Booleans: true or false / on or off / 1 or 0

let isDrawing = false; //Flag Variable 
age = 18 //age is set above so for this example i am just updating the age in this position
const ofAge = age > 19;
console.log(`Age:${age} - Older that 19?: ${ofAge}`)

console.log(`STRICT === ${age === 18}`) // same values same type
console.log(`== ${age == "18"}`) // same values - doesnt check if type is the same



// console.log('cf.js TEST: it works!');

let bill = 100;
const taxRate1 = 0.13;

function calculateBillSample() {
  // calculateBill is the name of the FUNCTION
  // Inside the braces is { } THE FUNCTION BODY
  console.log('Running calculate bill!');
  const total = bill * 1 + taxRate1; // its best practice to not reach outside of a function to grab
  // TOTAL IS ONLY AVAIBLE INSIDE THIS FUNCTION (BLOCK SCOPING)
  // console.log(`Console log TOTAL: ${total}`);
  return total;
}

// Function Call or Running the function by envoking it.
const myTotal = calculateBillSample();
console.log(`Your total is $${myTotal}`);
console.log(`Your total is $${calculateBillSample()} (function)`);

bill = 200;
const myTotal2 = calculateBillSample();
console.log(`Your total is $${myTotal2}`);

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // const total = billAmount * 1 + taxRate;
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
const tipTotal = calculateBill(100);
console.log(tipTotal);

// FUNCTIONS arguments need to be "undefined" if you want it to default to its value if you are going to change the next value over

const wesTotal = 168;
const wesTaxRate = 0.3;
const ourTotal = calculateBill(wesTotal, wesTaxRate);
console.log(`wesTotal: ${ourTotal}`);

// FUNCTION DEFINITION
function sayHiTo(firstName) {
  return `Hello ${firstName}!`;
}

const greeting = sayHiTo('Wes');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}
const drName = doctorize('Hammer');
console.log(drName);

function yello(name = 'Name Needed') {
  // DEFAULT TO NAME NEEDED
  return `YELLO ${name.toUpperCase()}`;
  // METHOD THAT upperCases the argument
}
const yell = yello('Hammer');
console.log(yell);

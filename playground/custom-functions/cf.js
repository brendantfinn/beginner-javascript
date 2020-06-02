// console.log('cf.js TEST: it works!');

function calculateBill() {
  // calculateBill is the name of the FUNCTION
  // Inside the braces is { } THE FUNCTION BODY
  console.log('Running calculate bill!');
  const total = 100 * 1.13;
  // TOTAL IS ONLY AVAIBLE INSIDE THIS FUNCTION (BLOCK SCOPING)
  // console.log(`Console log TOTAL: ${total}`);
  return total;
}

// Function Call or Running the function by envoking it.
const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);
console.log(`Your total is $${calculateBill()} (function)`);

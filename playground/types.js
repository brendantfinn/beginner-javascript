/* eslint-disable */

/* BLOCK COMMENT */
//LINE COMMENT 

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

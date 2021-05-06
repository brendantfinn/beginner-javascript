// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
// const ul = document.createElement('ul');
// console.log(ul);

const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

myDiv.innerHTML = ul;

// const il1 = document.createElement('il1');
// // console.log(il1);
// const il2 = document.createElement('il2');
// // console.log(il2);
// const il3 = document.createElement('il3');
// // console.log(il3);

// ul.appendChild(il1);
// ul.appendChild(il2);
// ul.appendChild(il3);

// create an image

const img = document.createElement('img');
console.log(img);

// set the source to an image
img.setAttribute('src', 'https://picsum.photos/200');
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.setAttribute('alt', 'Cute Puppy');
// Append that image to the wrapper
myDiv.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const ulElement = myDiv.querySelector('ul');
console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const div = myDiv.querySelector('.myDiv');
div.children[1].classList.add('warning');

// remove the first paragraph
div.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  // have that function return html that looks like this:
  const html = `
    <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height}ft tall and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">Delete Me</button>
    </div>
`;

  return html;
}

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);
console.log(cardsHTML);

divCards.innerHTML = cardsHTML;

// append those cards to the div
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', divCards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
const buttons = document.querySelectorAll('.delete');

function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  buttonClicked.parentElement.remove();
  console.log(event.currentTarget);
  console.log('DELETE CARD! TODO');
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));

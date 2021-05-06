// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// //   NODE LIST IS NOT A DIV - All methods are not built into it
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// // textContent is the newer & gets all contetns of HIDDEN(styling etc)
// console.log(heading.innerText);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🏓 ');

// // CLASSES
// const pic = document.querySelector('.nice');
// pic.classList.add('open');
// pic.classList.remove('cool');
// pic.classList.toggle('round');

// function toggleRound() {
//   pic.classList.toggle('round');
// }
// pic.addEventListener('click', toggleRound);

// pic.alt = 'Cute Pup'; // setter
// // pic.width = 200; //setter
// console.log(pic.alt); // getter
// console.log(pic.naturalWidth); // getter

// pic.addEventListener('load', function() {
//   console.log(pic.naturalWidth); // getter
// });

// pic.setAttribute('wes-is-cool', 'REALLY CUTE PUP');

// const custom = document.querySelector('.custom');
// console.log(custom.dataset);

// function customAlert() {
//   alert(`Welcome ${custom.dataset.name}!`);
// }
// custom.addEventListener('click', customAlert);

console.log('it works!');

const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P!';
myParagraph.classList.add('special');

const myImage = document.createElement('img');

myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');

heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('afterbegin', heading);

// UL w/ 5 li
const list = document.createElement('ul');
console.log(list);

myDiv.appendChild(list);

const myLi = document.createElement('li');
myLi.textContent = 'Line 2(1)';
console.log(myLi);

list.appendChild(myLi);

const myLi3 = document.createElement('li');
myLi3.textContent = 'Line 3(2) - before end';
list.insertAdjacentElement('beforeend', myLi3);
console.log(myLi);

const myLi2 = document.createElement('li');
myLi2.textContent = 'Line 1(3) - after begin';
list.insertAdjacentElement('afterbegin', myLi2);
console.log(myLi);

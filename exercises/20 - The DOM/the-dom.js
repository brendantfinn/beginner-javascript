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

// CLASSES
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup'; // setter
// pic.width = 200; //setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth); // getter
});

pic.setAttribute('wes-is-cool', 'REALLY CUTE PUP');

const custom = document.querySelector('.custom');
console.log(custom.dataset);

function customAlert() {
  alert(`Welcome ${custom.dataset.name}!`);
}
custom.addEventListener('click', customAlert);

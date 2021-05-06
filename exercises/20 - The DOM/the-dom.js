const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
//   NODE LIST IS NOT A DIV - All methods are not built into it
const heading = document.querySelector('h2');

console.log(heading.textContent);
// textContent is the newer & gets all contetns of HIDDEN(styling etc)
console.log(heading.innerText);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('afterbegin', '🏓 ');

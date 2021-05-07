const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('call back function worked!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// LISTEN ON MULTIPLE ITEMS
const buyButtons = document.querySelectorAll('.buy');

function handleBuyItem() {
  console.log(`BUYING ITEM`);
}
function loopBuyButton(e) {
  e.addEventListener('click', handleBuyItem);
}
buyButtons.forEach(loopBuyButton);

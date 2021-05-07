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
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  // const button = event.target;
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // STOP THIS EVENT FROM BUBBLING UP
  event.stopPropagation();

  // EVENT TARGER VS CURRENT TARGER - -
}

buyButtons.forEach(function(e) {
  e.addEventListener('click', handleBuyButtonClick);
  // console.log(`${}`)
});

window.addEventListener('click', function() {
  console.log('YOU CLICKED THE WINDOW');
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(e) {
  console.log(e.currentTarget.count);
  // console.log(this);
});

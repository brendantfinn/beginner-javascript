const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name} GROUP`);
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE!');
  console.groupEnd(`${person.name} GROUP`);
});

people.forEach((person, index) => {
    // debugger;
    console.log(`${person.name} DEBUGGER`);

  });

// Console Methods
people.forEach((person, index) => {
  if (person.name === 'Wes') {
    console.error(`Wes is Dumb name`);
    console.warn(`Wes is Dumb name`);
  }
});
console.table(people); // TABLE formats a list object into a nice table when the object has the same properties.

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code
function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey Im One');
  console.warn('watch out!');
  console.error('hey!');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count(`running Doctorize ${name}`); // CONSOLE COUNT tells you how many times the function is running - you can also pass in variables & it keeps individual counts on each variable passed in
}

function greet(name) {
  doesntExist(); // will cause an error
  return `Hello ${name}`;
}

// Callstack stack trace (BOOTSTRAP GO GREET )
function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

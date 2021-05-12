console.log('forms work');

const wes = document.querySelector('.wes');

function handleWesClick(e) {
  console.log(e);
  e.preventDefault();
  const shouldChangePage = confirm(
    'This site might be malicious, do you wish to proceed?'
  );

  if (shouldChangePage) {
    window.location = e.currentTarget.href;
  }
}

wes.addEventListener('click', handleWesClick);

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  //   console.dir(e.currentTarget.name.value);
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry bro');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);

// events accesibility gotchas and keyboard codes
const photo = document.querySelector('.photo');

photo.addEventListener('click', function() {
  console.log('you clicked photo');
});

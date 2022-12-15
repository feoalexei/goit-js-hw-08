const form = document.querySelector('.feedback-form');

form.style.backgroundColor = 'tomato';

form.addEventListener('submit', onSubmit);

console.log('someting from 03-feedback.js');

function onSubmit(e) {
  e.preventDefault();
  console.log('submit');
}

import throttle from 'lodash.throttle';
import { save, load } from './storage.js';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

loadFromStorage();

form.addEventListener('input', throttle(inputFeedback, 500));
form.addEventListener('submit', submitFeedback);

function loadFromStorage() {
  const fromStorage = load(LOCAL_STORAGE_KEY);

  if (fromStorage) {
    form.elements.email.value = fromStorage.email;
    form.elements.message.value = fromStorage.message;
  }
}

function createFeedbackObj() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  return { email, message };
}

function inputFeedback() {
  save(LOCAL_STORAGE_KEY, createFeedbackObj());
}

function submitFeedback(e) {
  e.preventDefault();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(createFeedbackObj());
  e.currentTarget.reset();
}

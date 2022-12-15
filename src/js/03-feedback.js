import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

loadFromStorage();

form.addEventListener('submit', throttle(submitFeedback, 500));

function submitFeedback(e) {
  e.preventDefault();
  const feedback = {};
  feedback.email = e.target.elements.email.value;
  feedback.message = e.target.elements.message.value;
  if (feedback.email && feedback.message) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));
  }
  e.currentTarget.reset();
  console.log(feedback);
}

function loadFromStorage() {
  const feedbackFromStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY)
  );

  if (feedbackFromStorage) {
    email.value = feedbackFromStorage.email;
    message.value = feedbackFromStorage.message;
  }
}
